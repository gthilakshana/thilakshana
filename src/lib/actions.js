'use server';

import db from './db';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

import { getSanityClient } from './sanity';

async function verifyAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_session')?.value;
  if (!token) throw new Error('Unauthorized');

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'secret');
    await jwtVerify(token, secret);
    return true;
  } catch (err) {
    throw new Error('Unauthorized');
  }
}

export async function addProject(formData) {
  try {
    await verifyAuth();

    const title = formData.get('title');
    const category = formData.get('category');
    const description = formData.get('description');
    const tech = formData.get('tech');
    const github = formData.get('github');
    const demo = formData.get('demo');
    const imageFile = formData.get('imageFile');

    if (!imageFile) throw new Error('Image file is required');

    // 1. Upload image to Sanity
    const sanity = getSanityClient();
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const asset = await sanity.assets.upload('image', buffer, {
      filename: imageFile.name,
    });

    const imageUrl = asset.url;

    // 2. Save project to SQLite
    const info = await db.execute({
      sql: `INSERT INTO projects (title, category, description, image, github, demo, tech) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [title, category, description, imageUrl, github, demo, tech]
    });

    revalidatePath('/');
    revalidatePath('/admin');
    
    return { success: true, id: info.lastInsertRowid ? Number(info.lastInsertRowid) : null };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteProject(id) {
  try {
    await verifyAuth();

    await db.execute({
      sql: 'DELETE FROM projects WHERE id = ?',
      args: [id]
    });

    revalidatePath('/');
    revalidatePath('/admin');
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function registerAdmin(data) {
  try {
    await verifyAuth();

    const { email, password, name } = data;
    
    if (!email || !password) {
      return { success: false, error: 'Email and password are required' };
    }

    await db.execute({
      sql: 'INSERT INTO admins (email, password, name) VALUES (?, ?, ?)',
      args: [email, password, name]
    });
    
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteAdmin(id) {
  try {
    await verifyAuth();

    // Prevent deleting the last admin
    const result = await db.execute('SELECT COUNT(*) as count FROM admins');
    const row = result.rows[0];
    if (row.count <= 1) {
      return { success: false, error: 'Cannot delete the last administrator' };
    }

    await db.execute({
      sql: 'DELETE FROM admins WHERE id = ?',
      args: [id]
    });
    
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function fetchAdmins() {
  try {
    const result = await db.execute('SELECT id, email, name FROM admins');
    return JSON.parse(JSON.stringify(result.rows.map(row => ({ ...row }))));
  } catch (error) {
    console.error('Fetch admins error:', error);
    return [];
  }
}

export async function login(email, password) {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@thilakshana.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (email === adminEmail && password === adminPassword) {
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateAdmin(id, data) {
  try {
    await verifyAuth();
    const { email, password, name } = data;
    await db.execute({
      sql: `UPDATE admins SET email = ?, password = ?, name = ? WHERE id = ?`,
      args: [email, password, name, id]
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// SERVICES ACTIONS
export async function addService(data) {
  try {
    await verifyAuth();
    const { title, description, icon, color, tags } = data;
    const info = await db.execute({
      sql: `INSERT INTO services (title, description, icon, color, tags) VALUES (?, ?, ?, ?, ?)`,
      args: [title, description, icon, color, tags]
    });
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true, id: info.lastInsertRowid ? Number(info.lastInsertRowid) : null };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteService(id) {
  try {
    await verifyAuth();
    await db.execute({
      sql: 'DELETE FROM services WHERE id = ?',
      args: [id]
    });
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function fetchServices() {
  try {
    const result = await db.execute('SELECT * FROM services');
    return JSON.parse(JSON.stringify(result.rows.map(row => ({ ...row }))));
  } catch (error) {
    return [];
  }
}

// FAQ ACTIONS
export async function updateService(id, data) {
  try {
    await verifyAuth();
    const { title, description, icon, color, tags } = data;
    await db.execute({
      sql: `UPDATE services SET title = ?, description = ?, icon = ?, color = ?, tags = ? WHERE id = ?`,
      args: [title, description, icon, color, tags, id]
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function addFAQ(data) {
  try {
    await verifyAuth();
    const { question, answer } = data;
    const info = await db.execute({
      sql: `INSERT INTO faqs (question, answer) VALUES (?, ?)`,
      args: [question, answer]
    });
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true, id: info.lastInsertRowid ? Number(info.lastInsertRowid) : null };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateFAQ(id, data) {
  try {
    await verifyAuth();
    const { question, answer } = data;
    await db.execute({
      sql: `UPDATE faqs SET question = ?, answer = ? WHERE id = ?`,
      args: [question, answer, id]
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteFAQ(id) {
  try {
    await verifyAuth();
    await db.execute({
      sql: 'DELETE FROM faqs WHERE id = ?',
      args: [id]
    });
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function fetchFAQs() {
  try {
    const result = await db.execute('SELECT * FROM faqs');
    return JSON.parse(JSON.stringify(result.rows.map(row => ({ ...row }))));
  } catch (error) {
    return [];
  }
}

// SETTINGS ACTIONS
export async function fetchSectionOrder() {
  try {
    const result = await db.execute({
      sql: 'SELECT value FROM settings WHERE key = ?',
      args: ['section_order']
    });
    const row = result.rows[0];
    return row ? JSON.parse(row.value) : ['about', 'services', 'resume', 'projects', 'skills', 'faq', 'contact'];
  } catch (error) {
    console.error('Fetch section order error:', error);
    return ['about', 'services', 'resume', 'projects', 'skills', 'faq', 'contact'];
  }
}

export async function updateSectionOrder(order) {
  try {
    await verifyAuth();
    await db.execute({
      sql: 'UPDATE settings SET value = ? WHERE key = ?',
      args: [JSON.stringify(order), 'section_order']
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateServiceOrder(items) {
  try {
    await verifyAuth();
    const batch = items.map((item, index) => ({
      sql: 'UPDATE services SET display_order = ? WHERE id = ?',
      args: [index, item.id]
    }));
    await db.batch(batch);
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateFAQOrder(items) {
  try {
    await verifyAuth();
    const batch = items.map((item, index) => ({
      sql: 'UPDATE faqs SET display_order = ? WHERE id = ?',
      args: [index, item.id]
    }));
    await db.batch(batch);
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
