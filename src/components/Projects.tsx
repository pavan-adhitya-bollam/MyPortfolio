import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'
import Button from './ui/Button'

interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
  live: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'DreamHire – Job Portal',
    description: 'Built a full-stack job portal with advanced search and multiple filters. Implemented OTP authentication and JWT authorization. Optimized MongoDB queries for faster performance.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux'],
    github: 'https://github.com/pavan-adhitya-bollam/MERN',
    live: 'https://mern-frontend-eight-alpha.vercel.app/'
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Built a real-time chat application supporting instant messaging, online user status, JWT authentication, and Socket.IO communication.',
    technologies: ['React.js', 'Node.js', 'Socket.IO', 'MongoDB'],
    github: 'https://github.com/pavan-adhitya-bollam/Real-Time-Chat-Application',
    live: 'https://real-time-chat-application-flax-three.vercel.app/'
  },
  {
    title: 'Transport Management System',
    description: 'Full-stack transport management system with role-based access control, driver assignment, delivery tracking, and analytics dashboard.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/pavan-adhitya-bollam/Transport-Management',
    live: 'https://transport-management-psi.vercel.app/login'
  }
]

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-gray-50 dark:bg-dark-bg/50">
      <SectionTitle
        title="Featured Projects"
        subtitle="Showcasing my best work"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col hover:glow-green transition-all duration-300">
                <div className="mb-4 md:mb-6">
                  <div className="w-full h-36 md:h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 dark:from-primary-500/10 dark:to-primary-600/10 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <motion.div
                      className="text-4xl md:text-6xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      🚀
                    </motion.div>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold gradient-text mb-2 md:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 md:mb-4 flex-grow">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 md:px-3 md:py-1 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full text-xs md:text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 md:gap-4 mt-auto">
                  <Button
                    href={project.live}
                    variant="primary"
                    size="sm"
                    className="flex-1 text-xs md:text-sm"
                  >
                    <FaExternalLinkAlt className="mr-1 md:mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    href={project.github}
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs md:text-sm"
                  >
                    <FaGithub className="mr-1 md:mr-2" />
                    GitHub
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projects
