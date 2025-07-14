'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function CTASection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <Container>
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-neutral-600">
              Phone: 813-796-6716
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="firstName"
                    className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-600"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="lastName"
                    className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-600"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-600"
                  >
                    Email
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="phone"
                    className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-600"
                  >
                    Phone
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="message"
                  className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-600"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Partner with Us
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}