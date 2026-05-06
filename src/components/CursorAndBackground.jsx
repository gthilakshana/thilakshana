'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorAndBackground() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Forced Dark Mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div 
          className="cinematic-glow animate-float top-[-10%] left-[-10%]" 
          style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', opacity: 0.1 }}
        ></div>
        <div 
          className="cinematic-glow animate-float bottom-[-20%] right-[-10%]" 
          style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)', opacity: 0.08, animationDelay: '-5s' }}
        ></div>
        <div 
          className="cinematic-glow animate-float top-[40%] right-[10%]" 
          style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', opacity: 0.05, animationDelay: '-10s', width: '400px', height: '400px' }}
        ></div>
      </div>

      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ 
          x: cursorPos.x - 16, 
          y: cursorPos.y - 16,
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? 'var(--color-primary-dark)' : 'transparent',
          opacity: isPointer ? 0.1 : 1
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.5 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-1 h-1 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{ 
          x: cursorPos.x - 2, 
          y: cursorPos.y - 2,
          scale: isPointer ? 0 : 1
        }}
        transition={{ type: "spring", damping: 20, stiffness: 800, mass: 0.2 }}
      />
    </>
  );
}
