import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa'
import Button from './ui/Button'

const Hero: React.FC = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const phrases = [
    'Full Stack Developer',
    'React Enthusiast',
    'Problem Solver',
    'Building Scalable Apps'
  ]

  useEffect(() => {
    const currentPhrase = phrases[loopNum % phrases.length]
    
    const tick = () => {
      const updatedText = isDeleting 
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1)
      
      setText(updatedText)

      if (!isDeleting && updatedText === currentPhrase) {
        setIsDeleting(true)
        setTypingSpeed(2000)
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500)
      } else {
        setTypingSpeed(isDeleting ? 50 : 100)
      }
    }

    const timer = setTimeout(tick, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error(`Element with id "${sectionId}" not found`)
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 pt-16 md:pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/10 dark:from-primary-500/5 dark:via-transparent dark:to-primary-600/5" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              className="inline-block mb-3 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full text-xs md:text-sm font-semibold">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Pavan Adhitya Bollam</span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="gradient-text">{text}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </motion.div>

            <motion.p
              className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Building scalable web applications with React, Node.js, and MongoDB. Passionate about creating elegant solutions to complex problems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                onClick={(e) => scrollToSection('projects', e)}
                size="md"
                className="flex-1 sm:flex-none"
              >
                View Projects
                <FaArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/resume.pdf"
                download
                className="flex-1 sm:flex-none"
              >
                Download Resume
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={(e) => scrollToSection('contact', e)}
                className="flex-1 sm:flex-none"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/pavan-adhitya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/pavan-adhitya-bollam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/Adhitya_16/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="font-bold text-sm md:text-lg">L</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 opacity-20 blur-3xl" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 opacity-30 blur-2xl" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-primary-300 to-primary-500 opacity-40 blur-xl" />
            </motion.div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 p-1 glow-green overflow-hidden">
                <img 
                  src="/PavanAdhityaPortfolio.png" 
                  alt="Pavan Adhitya" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-500 dark:border-primary-400 flex justify-center pt-2">
          <motion.div
            className="w-1 h-3 bg-primary-500 dark:bg-primary-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
