'use client';

import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sponsors/CROs', href: '#sponsors' },
    { name: 'For Patients', href: '#patients' },
    { name: 'For Physicians', href: '#physicians' },
    { name: 'Careers', href: '#careers' },
    { name: 'Denali Insights', href: '#insights' },
  ];

  const services = [
    { name: 'Neurology', href: '#' },
    { name: 'Cardiology', href: '#' },
    { name: 'Vaccines', href: '#' },
    { name: 'Infectious Disease', href: '#' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'HIPAA Compliance', href: '#' },
    { name: 'Accessibility', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-primary-900 text-white">
      <Container>
        {/* Newsletter Section */}
        <div className="py-12 border-b border-neutral-800">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Stay Updated on Clinical Research</h3>
            <p className="text-neutral-300 mb-6">
              Get the latest updates on clinical trials and research innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">Denali</span>
                <span className="text-primary-400">Health</span>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Independent Research Organization dedicated to clinical research excellence & accelerating therapies to market with integrity & innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-neutral-300">
                <PhoneIcon className="h-4 w-4 mr-2 text-primary-400" />
                813-796-6716
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <EnvelopeIcon className="h-4 w-4 mr-2 text-primary-400" />
                Connect with Denali
              </div>
              <div className="flex items-center text-sm text-neutral-300">
                <MapPinIcon className="h-4 w-4 mr-2 text-primary-400" />
                Plant City, Florida
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Therapeutic Areas</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Legal & Compliance</h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-800">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center mb-4 md:mb-0">
              <span>© 2024 Denali Health. All rights reserved.</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-primary-300">Accelerating Therapies from Bench to Bedside</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}