'use client';
import { motion } from 'framer-motion';
import { UserPlus, Users, Layout, Trash2 } from 'lucide-react';

export default function AdminsTab({
  admins,
  loading,
  submitting,
  adminFormData,
  setAdminFormData,
  handleAdminSubmit,
  editingAdmin,
  startEditAdmin,
  cancelEditAdmin,
  confirmDelete
}) {
  return (
    <motion.div key="admins" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-1">
        <div className="cinematic-glass p-8 rounded-3xl border border-primary/20">
          <div className="flex items-center gap-3 mb-8">
            {editingAdmin ? <Layout className="text-primary" size={20} /> : <UserPlus className="text-primary" size={20} />}
            <h2 className="text-xl font-bold uppercase tracking-widest">{editingAdmin ? 'Update Admin' : 'Register Admin'}</h2>
          </div>
          <form onSubmit={handleAdminSubmit} className="space-y-5">
            <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-primary/50 outline-none" value={adminFormData.name || ''} onChange={(e) => setAdminFormData({...adminFormData, name: e.target.value})} />
            <input required type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-primary/50 outline-none" value={adminFormData.email || ''} onChange={(e) => setAdminFormData({...adminFormData, email: e.target.value})} />
            <input required type="password" placeholder="Access Password" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-primary/50 outline-none" value={adminFormData.password || ''} onChange={(e) => setAdminFormData({...adminFormData, password: e.target.value})} />
            <div className="flex flex-col gap-3">
              <button disabled={submitting} className="w-full premium-button py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                {submitting ? 'Processing...' : editingAdmin ? 'Update Account' : 'Create Administrator'}
              </button>
              {editingAdmin && (
                <button type="button" onClick={cancelEditAdmin} className="w-full py-4 bg-white/5 text-white/50 font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest text-[10px]">
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/50 mb-8">Authorized Admins ({admins.length})</h3>
        {loading ? <div className="text-center py-20 animate-pulse text-xs uppercase tracking-widest">Loading...</div> : (
          <div className="space-y-4">
            {admins.map((a) => (
              <div key={a.id} className={`cinematic-glass p-6 rounded-2xl border flex items-center justify-between group transition-all ${editingAdmin?.id === a.id ? 'border-primary bg-primary/5' : 'border-white/5 hover:border-primary/30'}`}>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all"><Users size={20} /></div>
                  <div><h4 className="font-bold text-lg">{a.name || 'Administrator'}</h4><p className="text-xs text-[var(--text-muted)] font-light">{a.email}</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => startEditAdmin(a)} className="p-3 text-white/10 hover:text-primary hover:bg-primary/10 rounded-xl transition-all"><Layout size={18} /></button>
                  <button onClick={() => confirmDelete(a, 'admin')} className="p-3 text-white/10 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"><Trash2 size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
