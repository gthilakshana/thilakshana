'use server';

import db from './db';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

import { sanityClient } from './sanity';

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
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const asset = await sanityClient.assets.upload('image', buffer, {
      filename: imageFile.name,
    });

    const imageUrl = asset.url;

    // 2. Save project to SQLite
    const info = db.prepare(`
      INSERT INTO projects (title, category, description, image, github, demo, tech)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(title, category, description, imageUrl, github, demo, tech);

    revalidatePath('/');
    revalidatePath('/admin');
    
    return { success: true, id: info.lastInsertRowid };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteProject(id) {
  try {
    await verifyAuth();

    db.prepare('DELETE FROM projects WHERE id = ?').run(id);

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

    db.prepare('INSERT INTO admins (email, password, name) VALUES (?, ?, ?)').run(email, password, name);
    
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
    const count = db.prepare('SELECT COUNT(*) as count FROM admins').get();
    if (count.count <= 1) {
      return { success: false, error: 'Cannot delete the last administrator' };
    }

    db.prepare('DELETE FROM admins WHERE id = ?').run(id);
    
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function fetchAdmins() {
  try {
    await verifyAuth();
    return db.prepare('SELECT id, email, name FROM admins').all();
  } catch (error) {
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
    db.prepare(`
      UPDATE admins 
      SET email = ?, password = ?, name = ? 
      WHERE id = ?
    `).run(email, password, name, id);
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
    const info = db.prepare(`
      INSERT INTO services (title, description, icon, color, tags)
      VALUES (?, ?, ?, ?, ?)
    `).run(title, description, icon, color, tags);
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true, id: info.lastInsertRowid };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteService(id) {
  try {
    await verifyAuth();
    db.prepare('DELETE FROM services WHERE id = ?').run(id);
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function fetchServices() {
  try {
    return db.prepare('SELECT * FROM services').all();
  } catch (error) {
    return [];
  }
}

// FAQ ACTIONS
export async function updateService(id, data) {
  try {
    await verifyAuth();
    const { title, description, icon, color, tags } = data;
    db.prepare(`
      UPDATE services 
      SET title = ?, description = ?, icon = ?, color = ?, tags = ? 
      WHERE id = ?
    `).run(title, description, icon, color, tags, id);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function addFAQ(data) {
  try {
    await verifyAuth();
    const { question, answer } = data;
    const info = db.prepare(`
      INSERT INTO faqs (question, answer)
      VALUES (?, ?)
    `).run(question, answer);
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true, id: info.lastInsertRowid };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateFAQ(id, data) {
  try {
    await verifyAuth();
    const { question, answer } = data;
    db.prepare(`
      UPDATE faqs 
      SET question = ?, answer = ? 
      WHERE id = ?
    `).run(question, answer, id);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteFAQ(id) {
  try {
    await verifyAuth();
    db.prepare('DELETE FROM faqs WHERE id = ?').run(id);
    revalidatePath('/');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function fetchFAQs() {
  try {
    return db.prepare('SELECT * FROM faqs').all();
  } catch (error) {
    return [];
  }
}

// SETTINGS ACTIONS
export async function fetchSectionOrder() {
  try {
    const row = db.prepare('SELECT value FROM settings WHERE key = ?').get('section_order');
    return row ? JSON.parse(row.value) : ['about', 'services', 'resume', 'projects', 'skills', 'faq', 'contact'];
  } catch (error) {
    console.error('Fetch section order error:', error);
    return ['about', 'services', 'resume', 'projects', 'skills', 'faq', 'contact'];
  }
}

export async function updateSectionOrder(order) {
  try {
    await verifyAuth();
    db.prepare('UPDATE settings SET value = ? WHERE key = ?').run(JSON.stringify(order), 'section_order');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateServiceOrder(items) {
  try {
    await verifyAuth();
    const update = db.prepare('UPDATE services SET display_order = ? WHERE id = ?');
    const transaction = db.transaction((data) => {
      for (let i = 0; i < data.length; i++) {
        update.run(i, data[i].id);
      }
    });
    transaction(items);
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateFAQOrder(items) {
  try {
    await verifyAuth();
    const update = db.prepare('UPDATE faqs SET display_order = ? WHERE id = ?');
    const transaction = db.transaction((data) => {
      for (let i = 0; i < data.length; i++) {
        update.run(i, data[i].id);
      }
    });
    transaction(items);
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
