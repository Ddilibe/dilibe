import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const About = () => {
  const skills = {
    languages: ['Python', 'C', 'Rust', 'C++', 'JavaScript'],
    frameworks: ['Django', 'Flask', 'PyTorch', 'Scikit-Learn'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis'],
    cloud: ['Docker', 'Kubernetes'],
    tools: ['Git', 'CI/CD', 'Linux']
  }

  const experiences = [
    {
      title: 'System Analyst',
      company: 'Chartered Institute of Statisticians of Nigeria',
      period: 'November 2025 - Present',
      description: 'Analyzing and optimizing statistical systems and data infrastructure.'
    },
    {
      title: 'Researcher',
      company: 'Center for Satellite and Technology Development, Nigeria',
      period: 'June 2025 - April 2026',
      description: 'PPA during NYSC studies, conducting research in satellite technology and applications.'
    },
    {
      title: ' Software Engineer',
      company: 'Meliora Business Solutions Limited',
      period: 'January, 2025 - April, 2025',
      description: 'Leading development of distributed systems, cloud and desktop applications.'
    },
    {
      title: 'HNG Finalist',
      company: 'HNG Internship',
      period: 'October 2025 - December 2025',
      description: 'Selected as a finalist in the highly competitive HNG internship program, demonstrating exceptional skills in software development and collaborative team projects.'
    },
    {
      title: 'Freelance Software Engineer',
      company: 'Cypher',
      period: '2023 - Present',
      description: 'Architected and implemented scalable backend and AI services.'
    },
    {
      title: 'Software Engineer Intern',
      company: 'ALX Africa',
      period: '2022 - 2023',
      description: 'Full-stack development of software applications.'
    }
  ]

  const education = [
    {
      degree: 'Master of Science in Financial Engineering',
      institution: 'Quant World University',
      period: '2026 - Present',
      focus: 'Financial Engineering, AI and Machine Learning'
    },
    {
      degree: 'Bachelor of Engineering in Mechanical Engineering',
      institution: 'University of Nigeria, Nsukka',
      period: '2024',
      focus: 'Graduated with Honors'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
        </motion.div>

        {/* Profile Section */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-8 p-6 md:p-8">
                <div className="flex justify-center md:justify-start">
                  <motion.img
                    src="/Profile Picture.jpeg"
                    alt="Dilibe Franklin"
                    className="w-48 h-48 rounded-full object-cover shadow-lg ring-4 ring-blue-100 dark:ring-blue-900"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="md:col-span-2 space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    I am a Software Engineer and Researcher with over 4 years of experience in scalable distributed systems and cloud infrastructure. Currently working as System Analyst at the Chartered Institute of Statisticians of Nigeria and serving at the Center for Satellite and Technology Development, Nigeria (NYSC), I specialize in full-stack development, machine learning, and distributed architectures.
                  </p>
                  <p>
                    My work includes ML models for weather pattern classification (92% efficiency gain), a Tesla stock forecasting algorithm (94% accuracy), and production systems from hospital ERPs to crypto bots serving 300+ users. Notable projects include 'Finders Keepers' (AI dating platform), 'DChess' (Dirty Chess Game), and various open-source tools. I'm passionate about solving complex challenges and sharing knowledge through open-source contributions and technical writing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="space-y-3"
                  >
                    <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400 capitalize">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <motion.div
                          key={index}
                          variants={skillVariants}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="px-3 py-1 text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-gray-800" />
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {exp.title}
                      </h4>
                      <h5 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {edu.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      {edu.focus}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About