import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaTrophy, FaCode, FaAward } from 'react-icons/fa'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'

interface Achievement {
  icon: React.ReactNode
  value: number
  suffix: string
  label: string
  description: string
}

const achievements: Achievement[] = [
  {
    icon: <FaCode size={40} />,
    value: 300,
    suffix: '+',
    label: 'LeetCode Problems',
    description: 'Solved across various difficulty levels'
  },
  {
    icon: <FaTrophy size={40} />,
    value: 1,
    suffix: '',
    label: 'Hackathon Finalist',
    description: 'Fiserv Hackathon Bengaluru 2024'
  },
  {
    icon: <FaAward size={40} />,
    value: 9,
    suffix: '.0',
    label: 'CGPA',
    description: 'Consistent academic performance'
  }
]

const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="gradient-text">
      {count}{suffix}
    </span>
  )
}

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" className="bg-white dark:bg-dark-bg">
      <SectionTitle
        title="Achievements"
        subtitle="Milestones and accomplishments"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="text-center hover:glow-green transition-all duration-300 p-4 md:p-6">
                <motion.div
                  className="text-primary-500 dark:text-primary-400 mb-3 md:mb-4 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {achievement.icon}
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter value={achievement.value} suffix={achievement.suffix} />
                </h3>
                <h4 className="text-base md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {achievement.label}
                </h4>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card glow>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-3 md:mb-4">Hackathon Experience</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4">
                Participated in the prestigious Fiserv Hackathon held in Bengaluru and successfully reached the interview round. This experience enhanced my problem-solving skills and ability to work under pressure in a team environment.
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <span className="px-3 py-1 md:px-4 md:py-2 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full text-xs md:text-sm font-semibold">
                  Team Collaboration
                </span>
                <span className="px-3 py-1 md:px-4 md:py-2 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full text-xs md:text-sm font-semibold">
                  Innovation
                </span>
                <span className="px-3 py-1 md:px-4 md:py-2 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full text-xs md:text-sm font-semibold">
                  Problem Solving
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}

export default Achievements
