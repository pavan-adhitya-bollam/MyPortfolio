import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'
import Button from './ui/Button'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Replace with your actual EmailJS service ID, template ID, and public key
      // You need to configure these in your EmailJS account
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" className="bg-gray-50 dark:bg-dark-bg/50">
      <SectionTitle
        title="Get In Touch"
        subtitle="Let's connect and build something amazing together"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card glow>
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-4 md:mb-6">Contact Information</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 rounded-lg bg-primary-500/10 dark:bg-primary-500/20">
                    <FaEnvelope className="text-primary-500 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <a href="mailto:pavanadhityabollam@gmail.com" className="text-gray-900 dark:text-gray-100 font-semibold hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm md:text-base break-all">
                      pavanadhityabollam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 rounded-lg bg-primary-500/10 dark:bg-primary-500/20">
                    <FaPhone className="text-primary-500 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <a href="tel:+919398730870" className="text-gray-900 dark:text-gray-100 font-semibold hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm md:text-base">
                      +91 9398730870
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 rounded-lg bg-primary-500/10 dark:bg-primary-500/20">
                    <FaMapMarkerAlt className="text-primary-500 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-gray-100 font-semibold text-sm md:text-base">
                      Godavarikhani, Telangana, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">Follow Me</h4>
                <div className="flex gap-3 md:gap-4">
                  <motion.a
                    href="https://github.com/pavan-adhitya-bollam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/pavan-adhitya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-4 md:mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Your message..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 md:p-4 rounded-lg bg-green-500/10 border border-green-500 text-green-600 dark:text-green-400 text-xs md:text-sm"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 md:p-4 rounded-lg bg-red-500/10 border border-red-500 text-red-600 dark:text-red-400 text-xs md:text-sm"
                  >
                    Failed to send message. Please try again or contact me directly via email.
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full text-sm md:text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
