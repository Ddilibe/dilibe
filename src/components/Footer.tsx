import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
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

  const footerLinks = [
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms of Use' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg 
                className="text-blue-600 dark:text-blue-400" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="24" 
                height="24"
                aria-hidden="true"
              >
                <path 
                  fill="currentColor" 
                  d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" 
                />
              </svg>
              <span className="text-xl font-semibold">Dilibe</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Software Engineer and Researcher passionate about building innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors ${link.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Dilibe Franklin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer