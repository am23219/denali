'use client';

import { motion } from 'framer-motion';
import { 
  UserGroupIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import Container from '../ui/Container';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function IntroductionSection() {
  const stats = [
    {
      icon: UserGroupIcon,
      value: 50000,
      suffix: '+',
      label: 'Patients Served',
      description: 'Trusted by thousands of families'
    },
    {
      icon: ClockIcon,
      value: 15,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Proven track record in healthcare'
    },
    {
      icon: AcademicCapIcon,
      value: 200,
      suffix: '+',
      label: 'Medical Professionals',
      description: 'Expert team at your service'
    },
    {
      icon: ShieldCheckIcon,
      value: 99.9,
      suffix: '%',
      label: 'Patient Satisfaction',
      description: 'Exceptional care standards'
    }
  ];

  return (
    <section id="introduction" className="py-20 bg-neutral-50">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Leading Healthcare Innovation Since 2008
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              At Denali Health, we're not just treating patients—we're transforming lives through 
              cutting-edge medical technology, personalized care, and an unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-primary-700 mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    className="text-4xl font-bold text-primary-700"
                  />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-neutral-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              Your Health, Our Innovation
            </h3>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Founded with a vision to revolutionize healthcare delivery, Denali Health has 
                consistently pushed the boundaries of medical excellence. Our state-of-the-art 
                facilities and world-class medical team work together to provide comprehensive 
                care that's both innovative and deeply personal.
              </p>
              <p>
                We believe that exceptional healthcare should be accessible, efficient, and 
                tailored to each individual's unique needs. From preventive care to complex 
                surgical procedures, we're committed to delivering outcomes that exceed expectations.
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                'Joint Commission Accredited',
                'Magnet Hospital Recognition',
                'Top 100 Hospitals Award'
              ].map((badge, index) => (
                <motion.div
                  key={badge}
                  className="bg-success-100 text-success-800 px-4 py-2 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Our Commitment to Excellence</h4>
              <ul className="space-y-3">
                {[
                  'Advanced diagnostic technology',
                  'Multidisciplinary care teams',
                  '24/7 emergency services',
                  'Comprehensive wellness programs',
                  'Cutting-edge treatment protocols'
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <ShieldCheckIcon className="w-5 h-5 mr-3 text-accent-300 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}