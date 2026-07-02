import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'
import Button from './ui/Button'

interface Profile {
  name: string
  icon: React.ReactNode
  url: string
  stats: string[]
  color: string
}

const profiles: Profile[] = [
  {
    name: 'GitHub',
    icon: <FaGithub size={48} />,
    url: 'https://github.com/pavan-adhitya-bollam',
    stats: ['Full Stack Projects', 'Open Source Contributions', 'Active Developer'],
    color: 'from-gray-700 to-gray-900'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={48} />,
    url: 'https://www.linkedin.com/in/pavan-adhitya/',
    stats: ['Professional Network', 'Full Stack Developer', 'Open to Opportunities'],
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'LeetCode',
    icon: <FaCode size={48} />,
    url: 'https://leetcode.com/u/Adhitya_16/',
    stats: ['300+ Problems Solved', 'DSA Practice', 'Problem Solving'],
    color: 'from-orange-500 to-orange-700'
  }
]

const CodingProfiles: React.FC = () => {
  return (
    <Section id="profiles" className="bg-white dark:bg-dark-bg">
      <SectionTitle
        title="Coding Profiles"
        subtitle="Connect with me on coding platforms"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="text-center hover:glow-green transition-all duration-300 h-full flex flex-col p-4 md:p-6">
                <div className="mb-4 md:mb-6">
                  <motion.div
                    className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br ${profile.color} flex items-center justify-center text-white`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {profile.icon}
                  </motion.div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold gradient-text mb-3 md:mb-4">
                  {profile.name}
                </h3>

                <div className="space-y-1 md:space-y-2 mb-4 md:mb-6 flex-grow">
                  {profile.stats.map((stat, statIndex) => (
                    <motion.div
                      key={stat}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: statIndex * 0.1 }}
                      className="flex items-center justify-center"
                    >
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-500 rounded-full mr-2" />
                      <span className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">
                        {stat}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  href={profile.url}
                  variant="outline"
                  size="sm"
                  className="w-full text-xs md:text-sm"
                >
                  View Profile
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default CodingProfiles
