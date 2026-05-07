import db from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await db.execute('SELECT * FROM projects ORDER BY id DESC');
    const projects = result.rows;
    const parsedProjects = projects.map(p => {
      let techArray = [];
      try {
        techArray = p.tech ? JSON.parse(p.tech) : [];
      } catch (e) {
        console.error('JSON parse error for project tech:', e);
        techArray = [];
      }
      return {
        ...p,
        tech: techArray
      };
    });
    return NextResponse.json(parsedProjects);
  } catch (error) {
    console.error('Projects API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { title, category, description, image, github, demo, tech } = data;
    const info = await db.execute({
      sql: `INSERT INTO projects (title, category, description, image, github, demo, tech) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [title, category, description, image, github, demo, JSON.stringify(tech || [])]
    });
    return NextResponse.json({ id: info.lastInsertRowid, message: 'Project added successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    await db.execute({
      sql: 'DELETE FROM projects WHERE id = ?',
      args: [id]
    });
    return NextResponse.json({ message: 'Project deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
