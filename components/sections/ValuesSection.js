'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';

export default function ValuesSection() {
  return (
    <section id="values" className="relative py-24 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-72 h-72 bg-primary-100 rounded-full opacity-20 blur-3xl" />
      </div>
      
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-8">
              Integrity & Innovation
            </h2>
            
            <blockquote className="relative max-w-4xl mx-auto">
              <div className="absolute -top-8 -left-4 text-8xl text-primary-100 font-serif">"</div>
              <p className="relative z-10 text-2xl md:text-3xl font-light text-gray-800 leading-relaxed">
                At Denali, we believe that integrity and innovation are the pillars of our success. We strive to maintain the highest ethical standards in all our patient care and data collection while continuously pushing the boundaries of what's possible. Our values are what sets us apart and drives us forward.
              </p>
              <div className="absolute -bottom-8 -right-4 text-8xl text-primary-100 font-serif rotate-180">"</div>
            </blockquote>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}