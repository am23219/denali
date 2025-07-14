'use client';

import { motion } from 'framer-motion';
import { 
  BeakerIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  SunIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  UserIcon,
  CloudIcon
} from '@heroicons/react/24/outline';
import Container from '../ui/Container';

export default function TherapeuticExcellenceSection() {
  const specialties = [
    { title: 'Neurology', icon: AcademicCapIcon },
    { title: 'Cardiology', icon: HeartIcon },
    { title: 'Vaccines', icon: ShieldCheckIcon },
    { title: 'Infectious Disease', icon: BeakerIcon },
    { title: 'Endocrinology & Metabolism', icon: SparklesIcon },
    { title: 'Dermatology', icon: SunIcon },
    { title: 'Psychiatry', icon: UserGroupIcon },
    { title: 'Rheumatology', icon: HandRaisedIcon },
    { title: "Women's Health", icon: UserIcon },
    { title: 'Respiratory', icon: CloudIcon }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Our Therapeutic Excellence
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Denali Health Plant City is Equipped to Support the following Indications with Utmost Excellence
            </p>
          </motion.div>
        </div>

        {/* Therapeutic Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-500 transition-colors duration-300 mx-auto">
                  <specialty.icon className="w-6 h-6 text-primary-600 group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 text-center text-sm">
                  {specialty.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}