'use client';
import { motion } from 'framer-motion';
import { Plus, Trash2, Image as ImageIcon, Send } from 'lucide-react';

export default function ProjectsTab({ 
  projects, 
  loading, 
  submitting, 
  formData, 
  setFormData, 
  handleProjectSubmit, 
  confirmDelete 
}) {
  return (
    <motion.div key="projects" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-1">
        <div className="cinematic-glass p-8 rounded-3xl border border-primary/20">
          <div className="flex items-center gap-3 mb-8"><Plus className="text-primary" size={20} /><h2 className="text-xl font-bold uppercase tracking-widest">New Project</h2></div>
          <form onSubmit={handleProjectSubmit} className="space-y-5">
            <input required type="text" placeholder="Project Title" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-primary/50 outline-none" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none appearance-none" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
              <option value="Full Stack">Full Stack</option><option value="Frontend">Frontend</option><option value="Mobile">Mobile</option><option value="UI/UX">UI/UX</option>
            </select>
            <input type="text" placeholder="React, Node, etc." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none" value={formData.tech} onChange={(e) => setFormData({...formData, tech: e.target.value})} />
            <textarea required rows={4} placeholder="Description" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none resize-none" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}></textarea>
            <div className="relative group">
              <input type="file" accept="image/*" className="hidden" id="image-upload" onChange={(e) => { const file = e.target.files[0]; if (file) setFormData({...formData, imageFile: file}); }} />
              <label htmlFor="image-upload" className="flex flex-col items-center justify-center gap-2 w-full bg-white/5 border border-dashed border-white/20 rounded-xl py-6 cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group">
                {formData.imageFile ? <><ImageIcon className="text-primary" size={20} /><span className="text-[10px] text-primary font-bold uppercase">{formData.imageFile.name.substring(0, 20)}...</span></> : <><Plus className="text-white/20 group-hover:text-primary transition-colors" size={20} /><span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Upload Project Image</span></>}
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="GitHub" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none" value={formData.github} onChange={(e) => setFormData({...formData, github: e.target.value})} />
              <input type="text" placeholder="Demo" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs outline-none" value={formData.demo} onChange={(e) => setFormData({...formData, demo: e.target.value})} />
            </div>
            <button disabled={submitting} className="w-full premium-button py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-all">{submitting ? 'Publishing...' : <><Send size={16} /> Publish Project</>}</button>
          </form>
        </div>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/50 mb-8">Showcase ({projects.length})</h3>
        {loading ? <div className="text-center py-20 animate-pulse text-xs uppercase tracking-widest">Loading...</div> : (
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.id} className="cinematic-glass p-5 rounded-2xl border border-white/5 group hover:border-primary/30 transition-all relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[8px] font-bold uppercase rounded-full">{p.category}</span>
                  <button onClick={() => confirmDelete(p, 'project')} className="p-2 text-white/20 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h4>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2 mb-4 font-light leading-relaxed">{p.description}</p>
                <div className="flex items-center gap-4 text-white/20 text-[10px] font-bold uppercase tracking-widest">ID: {p.id}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
