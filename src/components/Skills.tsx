import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaJava, FaJs, FaGitAlt, FaCode } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiTailwindcss, SiExpress, SiSocketdotio, SiPostman, SiRedux } from 'react-icons/si'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'

interface Skill {
  name: string
  icon: React.ReactNode
  category: string
}

const skills: Skill[] = [
  // Frontend
  { name: 'React.js', icon: <FaReact size={40} />, category: 'Frontend' },
  { name: 'HTML', icon: <FaCode size={40} />, category: 'Frontend' },
  { name: 'CSS', icon: <FaCode size={40} />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, category: 'Frontend' },
  { name: 'Redux', icon: <SiRedux size={40} />, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', icon: <FaNodeJs size={40} />, category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress size={40} />, category: 'Backend' },
  { name: 'Socket.IO', icon: <SiSocketdotio size={40} />, category: 'Backend' },
  { name: 'JWT', icon: <FaCode size={40} />, category: 'Backend' },
  
  // Databases
  { name: 'MongoDB', icon: <SiMongodb size={40} />, category: 'Databases' },
  { name: 'MySQL', icon: <SiMysql size={40} />, category: 'Databases' },
  { name: 'Mongoose', icon: <SiMongodb size={40} />, category: 'Databases' },
  
  // Languages
  { name: 'Java', icon: <FaJava size={40} />, category: 'Languages' },
  { name: 'JavaScript', icon: <FaJs size={40} />, category: 'Languages' },
  
  // Tools
  { name: 'Git', icon: <FaGitAlt size={40} />, category: 'Tools' },
  { name: 'Postman', icon: <SiPostman size={40} />, category: 'Tools' },
  { name: 'VS Code', icon: <FaCode size={40} />, category: 'Tools' },
]

const categories = ['Frontend', 'Backend', 'Databases', 'Languages', 'Tools']

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-white dark:bg-dark-bg">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="Technologies I work with"
      />

      <div className="max-w-7xl mx-auto">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-8 md:mb-12"
          >
            <h3 className="text-xl md:text-2xl font-bold gradient-text mb-4 md:mb-6">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="text-center hover:glow-green transition-all duration-300 p-4 md:p-6">
                      <div className="flex flex-col items-center space-y-3 md:space-y-4">
                        <motion.div
                          className="text-primary-500 dark:text-primary-400"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-base">
                          {skill.name}
                        </h4>
                      </div>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
