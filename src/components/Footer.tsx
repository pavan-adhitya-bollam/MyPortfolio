import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold gradient-text mb-3 md:mb-4">Pavan Adhitya</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Full Stack Developer passionate about building scalable web applications with React, Node.js, and MongoDB.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors text-sm md:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm md:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors text-sm md:text-base">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm md:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Connect</h4>
            <div className="flex space-x-3 md:space-x-4">
              <motion.a
                href="https://github.com/pavan-adhitya-bollam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pavan-adhitya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-6 md:pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm md:text-base">
            © {currentYear} Pavan Adhitya Bollam. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs md:text-sm mt-2 flex items-center justify-center">
            Built with <FaHeart className="mx-2 text-primary-500" /> using React, Vite, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
