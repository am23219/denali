'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BeakerIcon,
  CpuChipIcon,
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import Container from '../ui/Container';
import Card from '../ui/Card';

export default function Big5Section() {
  const [activeCard, setActiveCard] = useState(null);

  const differentiators = [
    {
      id: 1,
      icon: BeakerIcon,
      title: 'Patient Recruitment Prowess',
      subtitle: 'Cutting-edge Recruitment Solutions',
      description: 'Our Patient Recruitment system is the cutting-edge solution for maximizing recruitment speed and efficiency. With advanced technology and targeted outreach strategies, we guarantee unparalleled velocity in filling trial quotas.',
      details: [
        'Advanced technology and targeted outreach strategies',
        'Guaranteed unparalleled velocity in filling trial quotas'
      ],
      gradient: 'from-primary-500 to-primary-600',
      progress: 98
    },
    {
      id: 2,
      icon: CpuChipIcon,
      title: 'Efficient Study Start-Up',
      subtitle: 'Streamlined Process Excellence',
      description: 'Efficiency is at the core of our study start-up process. Our dedicated personnel, combined with our ability to run start-up activities in parallel and implement technology-enabled solutions, allow us to complete all study start-up activities in less than a few weeks, given the sponsor\'s support.',
      details: [
        'Complete all study start-up activities in less than a few weeks',
        'Dedicated personnel running start-up activities in parallel'
      ],
      gradient: 'from-primary-400 to-primary-500',
      progress: 95
    },
    {
      id: 3,
      icon: HeartIcon,
      title: 'AI-Driven Solutions',
      subtitle: 'Dynamic & Innovative Approach',
      description: 'Our AI-driven dynamic solutions are tailored to the unique parameters of each study, empowering our employees to think critically and solve problems creatively. This innovative approach ensures that we can confidently address the specific challenges of each trial with agility and precision.',
      details: [
        'Tailored to unique parameters of each study',
        'Empowering critical thinking and creative problem solving'
      ],
      gradient: 'from-accent-500 to-accent-600',
      progress: 99
    },
    {
      id: 4,
      icon: LightBulbIcon,
      title: 'Quality Assurance',
      subtitle: 'Non-Negotiable Excellence',
      description: 'At Denali Health, quality is non-negotiable. We maintain a rigorous Quality Assurance program that ensures we are always FDA audit-ready. Through meticulous internal quality audits done routinely, we uphold the highest standards of compliance and excellence.',
      details: [
        'Rigorous Quality Assurance program ensuring FDA audit-readiness',
        'Meticulous internal quality audits done routinely'
      ],
      gradient: 'from-success-500 to-success-600',
      progress: 92
    },
    {
      id: 5,
      icon: UserGroupIcon,
      title: 'Diversity Leaders',
      subtitle: 'Inclusive Clinical Research',
      description: 'We are proud to be diversity leaders in clinical research. Our commitment to inclusivity ensures that our trials reflect the diverse populations they aim to serve. By prioritizing diversity, we enhance the generalizability of our study results and contribute to more equitable healthcare solutions.',
      details: [
        'Commitment to inclusivity ensuring trials reflect diverse populations',
        'Enhanced generalizability of study results'
      ],
      gradient: 'from-clinical-500 to-clinical-700',
      progress: 96
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Denali's Big 5 Differentiators
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Five core pillars that set us apart in delivering exceptional healthcare experiences 
              and outcomes for every patient we serve.
            </p>
          </motion.div>
        </div>

        {/* Mobile Carousel - visible on small screens */}
        <div className="block lg:hidden">
          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer" onClick={() => setActiveCard(activeCard === item.id ? null : item.id)}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mr-4`}>
                        <item.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                        <p className="text-sm text-primary-600">{item.subtitle}</p>
                      </div>
                    </div>
                    <ChevronDownIcon 
                      className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
                        activeCard === item.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                  
                  <AnimatePresence>
                    {activeCard === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-neutral-200 pt-4 mt-4">
                          <ul className="space-y-2">
                            {item.details.map((detail, idx) => (
                              <li key={idx} className="text-sm text-neutral-600 flex items-start">
                                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Grid - visible on large screens */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${index === 2 ? 'lg:col-span-3 lg:max-w-2xl lg:mx-auto' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div 
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer h-full" 
                onClick={() => setActiveCard(activeCard === item.id ? null : item.id)}
              >
                {/* Gradient border effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute inset-[2px] bg-white rounded-2xl" />
                
                {/* Number badge */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-primary-100 transition-colors duration-300">
                  {String(item.id).padStart(2, '0')}
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <item.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-primary-600 font-medium mb-3">{item.subtitle}</p>
                  <p className="text-neutral-600 mb-6">{item.description}</p>
                  
                  {/* Progress bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-neutral-600 mb-2">
                      <span>Excellence Rating</span>
                      <span className="font-semibold">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1">
                      <motion.div
                        className={`h-1 rounded-full bg-gradient-to-r ${item.gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeCard === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-neutral-200 pt-6"
                      >
                        <ul className="space-y-3 text-left">
                          {item.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              className="text-sm text-neutral-600 flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-4 transition-colors duration-200">
                    {activeCard === item.id ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}