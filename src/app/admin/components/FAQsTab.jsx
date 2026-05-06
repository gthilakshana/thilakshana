'use client';
import { motion } from 'framer-motion';
import { Plus, Trash2, HelpCircle, Layout, ArrowUp, ArrowDown } from 'lucide-react';

export default function FAQsTab({
  faqs,
  loading,
  submitting,
  faqFormData,
  setFaqFormData,
  handleFaqSubmit,
  editingFaq,
  startEditFaq,
  cancelEditFaq,
  confirmDelete,
  moveFAQ
}) {
  return (
    <motion.div key="faqs" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-1">
        <div className="cinematic-glass p-8 rounded-3xl border border-primary/20">
          <div className="flex items-center gap-3 mb-8">
            {editingFaq ? <HelpCircle className="text-primary" size={20} /> : <Plus className="text-primary" size={20} />}
            <h2 className="text-xl font-bold uppercase tracking-widest">{editingFaq ? 'Update FAQ' : 'New FAQ'}</h2>
          </div>
          <form onSubmit={handleFaqSubmit} className="space-y-5">
            <input required type="text" placeholder="Question" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none" value={faqFormData.question || ''} onChange={(e) => setFaqFormData({...faqFormData, question: e.target.value})} />
            <textarea required rows={6} placeholder="Answer" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm outline-none resize-none" value={faqFormData.answer || ''} onChange={(e) => setFaqFormData({...faqFormData, answer: e.target.value})}></textarea>
            <div className="flex flex-col gap-3">
              <button disabled={submitting} className="w-full premium-button py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                {submitting ? 'Processing...' : editingFaq ? 'Update FAQ' : 'Add FAQ'}
              </button>
              {editingFaq && (
                <button type="button" onClick={cancelEditFaq} className="w-full py-4 bg-white/5 text-white/50 font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest text-[10px]">
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/50 mb-8">FAQ List ({faqs.length})</h3>
        {loading ? <div className="text-center py-20 animate-pulse text-xs uppercase tracking-widest">Loading...</div> : (
          <div className="space-y-4">
            {faqs.map((f, index) => (
              <div key={f.id} className={`cinematic-glass p-6 rounded-2xl border transition-all ${editingFaq?.id === f.id ? 'border-primary bg-primary/5' : 'border-white/5 hover:border-primary/30'}`}>
                <div className="flex justify-between items-start gap-6">
                  <div>
                    <h4 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">{f.question}</h4>
                    <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">{f.answer}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => moveFAQ(index, 'up')} disabled={index === 0} className="p-2 text-white/20 hover:text-primary transition-colors disabled:opacity-0"><ArrowUp size={16} /></button>
                    <button onClick={() => moveFAQ(index, 'down')} disabled={index === faqs.length - 1} className="p-2 text-white/20 hover:text-primary transition-colors disabled:opacity-0"><ArrowDown size={16} /></button>
                    <div className="w-[1px] h-4 bg-white/10 mx-1"></div>
                    <button onClick={() => startEditFaq(f)} className="p-2 text-white/20 hover:text-primary transition-colors"><Layout size={16} /></button>
                    <button onClick={() => confirmDelete(f, 'faq')} className="flex-shrink-0 p-2 text-white/20 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
