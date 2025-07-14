'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';

export default function MissionSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
               backgroundSize: '30px 30px'
             }}
        />
      </div>
      
      <Container>
        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Accelerating Therapies
          </h2>
          
          <blockquote className="relative">
            <div className="absolute -top-6 -left-8 text-6xl text-primary-300/30 font-serif">"</div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-primary-100">
              At Denali, we are dedicated to accelerating therapies from bench to market and bringing treatments to patients as quickly and efficiently as possible. By working together, we believe we can make a significant impact on the lives of those who need it most.
            </p>
            <div className="absolute -bottom-6 -right-8 text-6xl text-primary-300/30 font-serif rotate-180">"</div>
          </blockquote>
          
          {/* Call to action */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 text-accent-400 font-semibold">
              <span className="text-lg">Making a Difference Together</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}