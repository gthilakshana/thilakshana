import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'data.db');
const db = new Database(dbPath);

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    image TEXT,
    github TEXT,
    demo TEXT,
    tech TEXT
  );

  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  );

  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT
  );

  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    color TEXT,
    tags TEXT,
    display_order INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS faqs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    answer TEXT,
    display_order INTEGER DEFAULT 0
  );
`);

// Add display_order column to existing tables if they don't have it (Migration)
try {
  db.prepare("ALTER TABLE services ADD COLUMN display_order INTEGER DEFAULT 0").run();
} catch (e) {}
try {
  db.prepare("ALTER TABLE faqs ADD COLUMN display_order INTEGER DEFAULT 0").run();
} catch (e) {}

// Seed initial admins if table is empty
const adminCount = db.prepare('SELECT COUNT(*) as count FROM admins').get();
if (adminCount.count === 0) {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@thilakshana.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  
  db.prepare('INSERT INTO admins (email, password, name) VALUES (?, ?, ?)').run(
    adminEmail,
    adminPassword,
    'Main Admin'
  );
}

// Seed initial settings if table is empty
const settingCheck = db.prepare('SELECT COUNT(*) as count FROM settings').get();
if (settingCheck.count === 0) {
  const defaultOrder = ['about', 'services', 'resume', 'projects', 'skills', 'faq', 'contact'];
  db.prepare('INSERT INTO settings (key, value) VALUES (?, ?)').run('section_order', JSON.stringify(defaultOrder));
}

// NEW: Check if we have already seeded or if we have existing data
const isSeeded = db.prepare('SELECT value FROM settings WHERE key = ?').get('is_seeded');
const hasData = db.prepare('SELECT COUNT(*) as count FROM projects').get().count > 0 ||
                db.prepare('SELECT COUNT(*) as count FROM services').get().count > 0 ||
                db.prepare('SELECT COUNT(*) as count FROM faqs').get().count > 0;

if (!isSeeded) {
  if (hasData) {
    // If we have data but no flag, just set the flag to prevent future seeding
    db.prepare('INSERT INTO settings (key, value) VALUES (?, ?)').run('is_seeded', 'true');
  } else {
    // Seed initial projects
    const initialProjects = [
      {
        title: "Job Management System",
        category: "Full Stack",
        description: "Designed and developed a comprehensive Job Management System using React.js. Engineered a high-performance Admin Panel to manage workflows, track job statuses, and handle user data efficiently.",
        image: "/project/portfolio.png",
        github: "https://github.com/gthilakshana",
        demo: "https://thilakshana.vercel.app/",
        tech: JSON.stringify(["React", "Tailwind", "Firebase"])
      },
      {
        title: "Southern Design Warehouse",
        category: "Full Stack",
        description: "A logistics and material supply platform built with Next.js and MongoDB. Executed a strategic cloud migration for image management from Sanity.io to Supabase to enhance scalability.",
        image: "/project/mahee_store.png",
        github: "https://github.com/gthilakshana",
        demo: "https://southerndesignwarehouse.com/",
        tech: JSON.stringify(["Next.js", "MongoDB", "Supabase"])
      }
    ];

    const insertProj = db.prepare(`
      INSERT INTO projects (title, category, description, image, github, demo, tech)
      VALUES (@title, @category, @description, @image, @github, @demo, @tech)
    `);

    const initialServices = [
      {
        title: "Web Architecture",
        description: "Architecting high-performance digital ecosystems using Next.js and the MERN stack. Focused on scalability, speed, and SEO excellence.",
        icon: "Globe",
        color: "from-blue-500/20 to-cyan-500/20",
        tags: JSON.stringify(["Next.js", "React", "Node.js", "SSR"]),
        display_order: 1
      },
      {
        title: "UI/UX Engineering",
        description: "Designing immersive, high-fidelity user interfaces with a focus on micro-interactions and cinematic aesthetics.",
        icon: "Layout",
        color: "from-orange-500/20 to-red-500/20",
        tags: JSON.stringify(["Figma", "Framer Motion", "GSAP", "Tailwind"]),
        display_order: 2
      }
    ];

    const insertServ = db.prepare(`
      INSERT INTO services (title, description, icon, color, tags, display_order)
      VALUES (@title, @description, @icon, @color, @tags, @display_order)
    `);

    const initialFaqs = [
      {
        question: "What technologies do you specialize in?",
        answer: "I specialize in the Next.js and MERN stack (MongoDB, Express, React, Node.js).",
        display_order: 1
      }
    ];

    const insertFaq = db.prepare(`
      INSERT INTO faqs (question, answer, display_order)
      VALUES (@question, @answer, @display_order)
    `);

    db.transaction(() => {
      for (const p of initialProjects) insertProj.run(p);
      for (const s of initialServices) insertServ.run(s);
      for (const f of initialFaqs) insertFaq.run(f);
      db.prepare('INSERT INTO settings (key, value) VALUES (?, ?)').run('is_seeded', 'true');
    })();
  }
}

export default db;
