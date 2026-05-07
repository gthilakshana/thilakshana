import { NextResponse } from 'next/server';
import db from '../../../lib/db';

export async function GET() {
  try {
    const result = await db.execute('SELECT * FROM faqs ORDER BY display_order ASC, id ASC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('FAQs API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
