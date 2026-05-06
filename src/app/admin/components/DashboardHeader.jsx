'use client';
import { motion } from 'framer-motion';
import { Globe, LogOut } from 'lucide-react';

export default function DashboardHeader({ activeTab, setActiveTab, tabs, handleLogout }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12 mb-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-primary">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Management Terminal</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-gradient">Admin Panel</h1>
          <p className="text-[var(--text-muted)] text-base md:text-xl font-light max-w-2xl">Securely manage your portfolio architecture and administrative protocols.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.location.href = '/'}
            className="cinematic-glass px-6 py-4 rounded-2xl border border-white/5 text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary/10 transition-all flex items-center gap-3 group"
          >
            <Globe size={16} className="group-hover:rotate-12 transition-transform" /> 
            <span className="hidden sm:inline">Back to Website</span>
            <span className="sm:hidden">Exit</span>
          </button>
          <button onClick={handleLogout} className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg shadow-red-500/10"><LogOut size={20} /></button>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative overflow-hidden px-6 py-5 rounded-2xl border transition-all duration-500 flex items-center justify-center gap-3 group
                ${activeTab === tab.id 
                  ? 'bg-primary border-primary shadow-xl shadow-primary/20 text-white' 
                  : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20 hover:text-white'
                }
              `}
            >
              <span className={`transition-transform duration-500 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {tab.icon}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-white/10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
