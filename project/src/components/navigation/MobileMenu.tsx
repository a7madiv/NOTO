import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import NavLogo from './NavLogo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

const links = [
  { name: 'Features', path: '/#features' },
  { name: 'Medical Forms', path: '/medical-forms' },
  { name: 'Testimonials', path: '/#testimonials' },
  { name: 'Pricing', path: '/#pricing' },
  { name: 'About', path: '/#about' }
];

export default function MobileMenu({ isOpen, onClose, onLoginClick }: MobileMenuProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleLinkClick = (path: string) => {
    if (path.startsWith('/#') && !isHome) {
      window.location.href = path;
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-gray-900 
                     shadow-xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <NavLogo />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <nav className="flex-1 overflow-y-auto py-6">
              <ul className="space-y-2 px-4">
                {links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 4 }}
                    className="rounded-lg overflow-hidden"
                  >
                    <Link
                      to={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className={`block px-4 py-3 text-lg transition-colors
                                ${location.pathname === link.path
                                  ? 'bg-emerald-500/10 text-emerald-500'
                                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="p-6 border-t border-gray-800">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onLoginClick();
                  onClose();
                }}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 
                         text-white rounded-lg font-medium transition-colors"
              >
                Sign In
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}