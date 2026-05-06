import { NextResponse } from 'next/server';
import db from '../../../lib/db';

export async function GET() {
  try {
    const faqs = db.prepare('SELECT * FROM faqs ORDER BY display_order ASC, id ASC').all();
    return NextResponse.json(faqs);
  } catch (error) {
    console.error('FAQs API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
