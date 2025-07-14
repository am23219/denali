'use client';

import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  ...props 
}) {
  return (
    <motion.div
      className={`
        bg-white rounded-2xl p-6 shadow-soft
        ${gradient ? 'bg-gradient-to-br from-white to-neutral-50' : ''}
        ${hover ? 'hover:shadow-large hover:-translate-y-1' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}