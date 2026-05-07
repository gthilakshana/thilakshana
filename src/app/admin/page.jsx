'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import LoginForm from './components/LoginForm';

export default function AdminLoginPage() {
  const router = useRouter();
  const [initialCheck, setInitialCheck] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const res = await fetch('/api/admin/check-session');
      if (res.ok) {
        router.push('/dashboard');
      }
    } catch (err) {
      console.error('Session check failed');
    } finally {
      setInitialCheck(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setChecking(true);
    setLoginError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPass })
      });
      const data = await res.json();
      if (data.success) {
        router.push('/dashboard');
      } else {
        setLoginError('Invalid Administrator Credentials');
      }
    } catch (err) {
      setLoginError('Connection Error');
    } finally {
      setChecking(false);
    }
  };

  if (initialCheck) return (
    <div className="min-h-screen bg-[var(--bg-main)] flex items-center justify-center">
      <Loader2 className="text-primary animate-spin" size={40} />
    </div>
  );

  return (
    <LoginForm 
      loginEmail={loginEmail} 
      setLoginEmail={setLoginEmail} 
      loginPass={loginPass} 
      setLoginPass={setLoginPass} 
      loginError={loginError} 
      handleLogin={handleLogin} 
      checking={checking} 
    />
  );
}
