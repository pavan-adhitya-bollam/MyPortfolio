import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'

interface Certification {
  title: string
  issuer: string
  icon: React.ReactNode
}

const certifications: Certification[] = [
  {
    title: 'Object Oriented Programming in Java',
    issuer: 'Coursera',
    icon: <FaCertificate size={40} />
  },
  {
    title: 'HTML, CSS & JavaScript',
    issuer: 'Coursera',
    icon: <FaCertificate size={40} />
  }
]

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" className="bg-gray-50 dark:bg-dark-bg/50">
      <SectionTitle
        title="Certifications"
        subtitle="Professional certifications and courses"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="hover:glow-green transition-all duration-300">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <motion.div
                    className="text-primary-500 dark:text-primary-400 flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-primary-500 dark:text-primary-400 font-semibold mb-2 text-sm md:text-base">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                      Completed comprehensive course covering fundamental concepts and best practices.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Certifications
