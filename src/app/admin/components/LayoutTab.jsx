'use client';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown, AlertCircle } from 'lucide-react';

export default function LayoutTab({
  sectionOrder,
  moveSection
}) {
  return (
    <motion.div key="layout" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-display font-bold uppercase tracking-widest mb-4 text-gradient">Home Section Architecture</h3>
        <p className="text-[var(--text-muted)] text-sm font-light uppercase tracking-[0.3em]">Arrange the flow of your digital narrative</p>
      </div>
      <div className="space-y-4">
        {sectionOrder.map((section, idx) => (
          <motion.div 
            key={section} 
            layout
            className="cinematic-glass p-6 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-primary/30 transition-all"
          >
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all text-xs font-bold">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-lg uppercase tracking-widest">{section}</h4>
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em]">Front-page Component</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                disabled={idx === 0} 
                onClick={() => moveSection(idx, 'up')}
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/20 hover:text-primary hover:bg-primary/10 disabled:opacity-0 transition-all"
              >
                <ArrowUp size={18} />
              </button>
              <button 
                disabled={idx === sectionOrder.length - 1} 
                onClick={() => moveSection(idx, 'down')}
                className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/20 hover:text-primary hover:bg-primary/10 disabled:opacity-0 transition-all"
              >
                <ArrowDown size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 cinematic-glass p-6 rounded-2xl border border-primary/20 flex items-center gap-4 text-xs text-[var(--text-muted)] uppercase tracking-widest">
        <AlertCircle className="text-primary" size={16} />
        Changes are saved automatically to the database terminal.
      </div>
    </motion.div>
  );
}
