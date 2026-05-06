'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2 } from 'lucide-react';

export default function DeleteModal({
  show,
  setShow,
  item,
  type,
  onConfirm,
  submitting
}) {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShow(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm"></motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="w-full max-w-sm cinematic-glass p-8 rounded-[2rem] border border-red-500/20 shadow-2xl relative z-10 text-center">
            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-500 border border-red-500/20">
              <Trash2 size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-widest">Are you sure?</h2>
            <p className="text-[var(--text-muted)] text-sm mb-8 font-light">
              This action cannot be undone. The {type} <strong>"{item?.title || item?.name || item?.question}"</strong> will be permanently removed.
            </p>
            <div className="flex flex-col gap-3">
              <button onClick={onConfirm} disabled={submitting} className="w-full py-4 bg-red-500 text-white font-bold rounded-2xl hover:bg-red-600 active:scale-95 transition-all uppercase tracking-widest text-xs">
                {submitting ? 'Deleting...' : 'Yes, Delete Permanently'}
              </button>
              <button onClick={() => setShow(false)} className="w-full py-4 bg-white/5 text-white/50 font-bold rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
