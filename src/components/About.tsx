import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaLightbulb } from 'react-icons/fa'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-gray-50 dark:bg-dark-bg/50">
      <SectionTitle
        title="About Me"
        subtitle="Get to know the developer behind the code"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold gradient-text mb-3 md:mb-4">My Journey</h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack Developer currently pursuing my B.Tech in Computer Science and Engineering at SR University with a CGPA of 9.0. My journey in tech began with a curiosity about how things work on the web, and it has evolved into a deep passion for building scalable, user-centric applications.
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have experience building real-time applications, job portals, and management systems. I believe in writing clean, maintainable code and staying updated with the latest technologies.
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me solving problems on LeetCode (300+ problems solved), participating in hackathons, or exploring new technologies. I recently participated in the Fiserv Hackathon in Bengaluru and reached the interview round.
                </p>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="p-2 md:p-3 rounded-lg bg-primary-500/10 dark:bg-primary-500/20">
                      <FaMapMarkerAlt className="text-primary-500 dark:text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 text-xs md:text-sm">Telangana, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="p-2 md:p-3 rounded-lg bg-primary-500/10 dark:bg-primary-500/20">
                      <FaCode className="text-primary-500 dark:text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Experience</p>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 text-xs md:text-sm">Full Stack</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <Card glow>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex-shrink-0">
                  <FaGraduationCap size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Education</h3>
                  <p className="text-primary-500 dark:text-primary-400 font-semibold mb-1 text-sm md:text-base">SR University</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm md:text-base">B.Tech Computer Science and Engineering</p>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 md:px-3 md:py-1 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full text-xs md:text-sm font-semibold">
                      CGPA: 9.0
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex-shrink-0">
                  <FaLightbulb size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Career Objective</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    To leverage my skills in full-stack development to build innovative, scalable solutions that make a positive impact. I'm seeking opportunities to work with dynamic teams and contribute to meaningful projects.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg md:text-xl font-bold gradient-text mb-3 md:mb-4">Contact Info</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-1 sm:space-y-0">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Email:</span>
                  <a href="mailto:pavanadhityabollam@gmail.com" className="text-primary-500 dark:text-primary-400 hover:underline text-sm break-all">
                    pavanadhityabollam@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Phone:</span>
                  <span className="text-gray-900 dark:text-gray-100 text-sm">+91 9398730870</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default About
