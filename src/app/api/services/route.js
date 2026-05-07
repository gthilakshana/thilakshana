import { NextResponse } from 'next/server';
import db from '../../../lib/db';

export async function GET() {
  try {
    const result = await db.execute('SELECT * FROM services ORDER BY display_order ASC, id ASC');
    const services = result.rows;
    const parsedServices = services.map(s => ({
      ...s,
      tags: s.tags ? JSON.parse(s.tags) : []
    }));
    return NextResponse.json(parsedServices);
  } catch (error) {
    console.error('Services API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
