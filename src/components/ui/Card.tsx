import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, glow = false }) => {
  return (
    <motion.div
      className={`glass-card rounded-2xl p-6 ${glow ? 'glow-green' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
    >
      {children}
    </motion.div>
  )
}

export default Card
