import React from 'react';
import { Pen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NavLogo() {
  return (
    <motion.a
      href="/"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-2 py-1 rounded-lg transition-colors
                hover:bg-white/5"
      aria-label="Noto - Home"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 
                      rounded-lg opacity-50 blur-sm" />
        <Pen className="relative w-8 h-8 text-white" />
      </div>
      <span className="text-2xl font-bold tracking-tight">
        <span className="text-emerald-500">N</span>
        <span className="text-white">oto</span>
      </span>
    </motion.a>
  );
}