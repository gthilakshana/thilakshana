import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';
import db from '../../../../lib/db';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const jwtSecret = process.env.JWT_SECRET || 'secret';

    // Check admin in database
    const result = await db.execute({
      sql: 'SELECT * FROM admins WHERE email = ? AND password = ?',
      args: [email, password]
    });
    const admin = result.rows[0];

    if (admin) {
      // Create JWT token
      const token = await new SignJWT({ email: admin.email, role: 'admin', id: admin.id })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('24h')
        .sign(new TextEncoder().encode(jwtSecret));

      // Set cookie
      const cookieStore = await cookies();
      cookieStore.set('admin_session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return NextResponse.json({ success: true, message: 'Logged in successfully' });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
