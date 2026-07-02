import React from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
}

const Section: React.FC<SectionProps> = ({ children, id, className = '' }) => {
  return (
    <section
      id={id}
      className={`py-20 px-4 md:px-8 lg:px-16 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default Section
