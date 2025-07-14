'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const variants = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white border-primary-500',
  secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white border-secondary-500',
  outline: 'bg-transparent hover:bg-primary-50 text-primary-600 border-primary-600',
  ghost: 'bg-transparent hover:bg-neutral-100 text-neutral-700 border-transparent'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon = false,
  onClick,
  ...props 
}) {
  return (
    <motion.button
      className={`
        inline-flex items-center justify-center gap-2 
        font-medium rounded-lg border-2 
        transition-all duration-200 ease-in-out
        hover:shadow-medium hover:-translate-y-0.5
        focus:outline-none focus:ring-4 focus:ring-primary-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon && (
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRightIcon className="w-4 h-4" />
        </motion.div>
      )}
    </motion.button>
  );
}