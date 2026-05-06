import { NextResponse } from 'next/server';
import { fetchSectionOrder } from '../../../../lib/actions';

export async function GET() {
  try {
    const order = await fetchSectionOrder();
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
