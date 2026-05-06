'use client';
import { motion } from 'framer-motion';
import { Plus, Trash2, Layout, Globe, ArrowUp, ArrowDown } from 'lucide-react';

export default function ServicesTab({
  services,
  loading,
  submitting,
  serviceFormData,
  setServiceFormData,
  handleServiceSubmit,
  editingService,
  startEditService,
  cancelEditService,
  confirmDelete,
  moveService
}) {
  return (
    <motion.div key="services" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-1">
        <div className="cinematic-glass p-8 rounded-3xl border border-primary/20">
          <div className="flex items-center gap-3 mb-8">
            {editingService ? <Layout className="text-primary" size={20} /> : <Plus className="text-primary" size={20} />}
            <h2 className="text-xl font-bold uppercase tracking-widest">{editingService ? 'Update Service' : 'Add Service'}</h2>
          </div>
          <form onSubmit={handleServiceSubmit} className="space-y-5">
            <input required type="text" placeholder="Service Title" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none" value={serviceFormData.title || ''} onChange={(e) => setServiceFormData({...serviceFormData, title: e.target.value})} />
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none" value={serviceFormData.icon} onChange={(e) => setServiceFormData({...serviceFormData, icon: e.target.value})}>
              <option value="Globe">Web (Globe)</option><option value="Layout">UI/UX (Layout)</option><option value="Cloud">Cloud (Cloud)</option><option value="Smartphone">Mobile (Smartphone)</option><option value="Cpu">AI (Cpu)</option>
            </select>
            <textarea required rows={4} placeholder="Description" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none resize-none" value={serviceFormData.description || ''} onChange={(e) => setServiceFormData({...serviceFormData, description: e.target.value})}></textarea>
            <input type="text" placeholder="Tags (React, AWS, etc.)" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none" value={serviceFormData.tags || ''} onChange={(e) => setServiceFormData({...serviceFormData, tags: e.target.value})} />
            <div className="flex flex-col gap-3">
              <button disabled={submitting} className="w-full premium-button py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                {submitting ? 'Processing...' : editingService ? 'Update Service' : 'Add Service'}
              </button>
              {editingService && (
                <button type="button" onClick={cancelEditService} className="w-full py-4 bg-white/5 text-white/50 font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest text-[10px]">
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/50 mb-8">My Services ({services.length})</h3>
        {loading ? <div className="text-center py-20 animate-pulse text-xs uppercase tracking-widest">Loading...</div> : (
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, index) => (
              <div key={s.id} className={`cinematic-glass p-6 rounded-2xl border transition-all ${editingService?.id === s.id ? 'border-primary bg-primary/5' : 'border-white/5 hover:border-primary/30'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary"><Layout size={18} /></div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => moveService(index, 'up')} disabled={index === 0} className="p-2 text-white/20 hover:text-primary transition-colors disabled:opacity-0"><ArrowUp size={16} /></button>
                    <button onClick={() => moveService(index, 'down')} disabled={index === services.length - 1} className="p-2 text-white/20 hover:text-primary transition-colors disabled:opacity-0"><ArrowDown size={16} /></button>
                    <div className="w-[1px] h-4 bg-white/10 mx-1"></div>
                    <button onClick={() => startEditService(s)} className="p-2 text-white/20 hover:text-primary transition-colors"><Layout size={16} /></button>
                    <button onClick={() => confirmDelete(s, 'service')} className="p-2 text-white/20 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{s.title}</h4>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2 mb-4 font-light leading-relaxed">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {JSON.parse(s.tags || '[]').map((t, idx) => (
                    <span key={idx} className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 bg-white/5 rounded-full text-white/30">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
