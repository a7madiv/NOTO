import React from 'react';
import { Pin } from 'lucide-react';
import { motion } from 'framer-motion';

interface CenteredPinIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function CenteredPinIcon({ 
  size = 24, 
  color = 'currentColor',
  className = ''
}: CenteredPinIconProps) {
  return (
    <div className="relative inline-flex">
      {/* Circular container */}
      <motion.div 
        className={`relative flex items-center justify-center w-12 h-12 
                    rounded-full bg-emerald-500/10 ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Centered icon */}
        <Pin 
          size={size} 
          className="text-emerald-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
          color={color}
        />
      </motion.div>
    </div>
  );
}