import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import RubiksCube from '../components/RubiksCube'
import WebGL from '@/WebGL/App'

const Home = () => {
  const socialLinks = [
    { 
      href: 'https://github.com/Ddilibe', 
      icon: Github, 
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    { 
      href: 'https://twitter.com/therealdilibe', 
      icon: Twitter, 
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    { 
      href: 'https://linkedin.com/in/dilibe-fidelugwuowo', 
      icon: Linkedin, 
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    { 
      href: 'mailto:franklinfidelugwuowo@gmail.com', 
      icon: Mail, 
      label: 'Email',
      color: 'hover:text-red-500'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <motion.div 
        className="max-w-4xl w-full flex flex-col items-center space-y-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Rubik's Cube */}
        <motion.div variants={itemVariants}>
          <WebGL />
        </motion.div>
        
        {/* Name and Title */}
        <motion.div 
          className="text-center space-y-3"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Fidelugwuowo Dilibe Franklin
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
            Software Engineer and Researcher
          </p>
        </motion.div>
        
        {/* Social Links */}
        <motion.div 
          className="flex gap-6"
          variants={itemVariants}
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-600 dark:text-gray-400 transition-all duration-300 ${link.color}`}
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home