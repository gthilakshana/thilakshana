'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, AlertCircle, ChevronRight, Loader2 } from 'lucide-react';

export default function LoginForm({ 
  loginEmail, 
  setLoginEmail, 
  loginPass, 
  setLoginPass, 
  loginError, 
  handleLogin, 
  checking 
}) {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] -z-10 rounded-full"></div>
      <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="w-full max-w-md cinematic-glass p-10 rounded-[2.5rem] border border-primary/20 shadow-2xl relative">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary border border-primary/20"><Lock size={28} /></div>
          <h1 className="text-3xl font-display font-extrabold uppercase tracking-widest mb-2">Secure Access</h1>
          <p className="text-[var(--text-muted)] text-xs font-light uppercase tracking-[0.3em]">Administrator Portal</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary ml-1">Email Identity</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={16} />
              <input autoFocus type="email" placeholder="admin@example.com" className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-sm focus:border-primary/50 transition-all outline-none" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary ml-1">Access Key</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={16} />
              <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-sm focus:border-primary/50 transition-all outline-none tracking-[0.3em]" value={loginPass || ''} onChange={(e) => setLoginPass(e.target.value)} />
            </div>
            <AnimatePresence>{loginError && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-500 text-[10px] font-bold uppercase mt-3 ml-1"><AlertCircle size={12} /> {loginError}</motion.div>}</AnimatePresence>
          </div>
          <button disabled={checking} className="w-full premium-button group py-4 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3 disabled:opacity-50 active:scale-95 transition-all mt-4">
            {checking ? 'Authenticating...' : <>Access Terminal<ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /></>}
          </button>
        </form>
      </motion.div>
    </main>
  );
}
