import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projectCategories = [
  {
    category: "Software Development",
    projects: [
      {
        title: "Cryptocurrency Telegram Bot",
        description: "Developed a real-time cryptocurrency update bot for Telegram, providing users with up-to-the-minute information on prices, market trends, and analytical tools. The backend leverages Scrapy for efficient data extraction and Selenium for dynamic content, collecting data from various cryptocurrency exchanges and news sources. Serves over 300 active monthly users.",
        tech: ["Python", "Scrapy", "Selenium", "Docker"],
        link: "https://t.me/Test_pumpdotfun_bot",
        github: null
      },
      {
        title: "HSMS (Hospital Management System)",
        description: "A comprehensive hospital management ERP solution built with PySide6 and MySQL, streamlining hospital operations including patient management, staff scheduling, inventory tracking, and billing. Designed for real-world deployment in healthcare environments.",
        tech: ["Python", "PySide6", "MySQL"],
        link: null,
        github: null
      },
      {
        title: "Zipline (LAN Data Sharing Desktop App)",
        description: "A desktop application for seamless data sharing between systems over a local area network. Built for fast, secure, peer-to-peer file transfers without internet dependency, ideal for office and enterprise environments.",
        tech: ["Python", "Networking", "Desktop"],
        link: null,
        github: null
      },
      {
        title: "Novatoken (Solana Blockchain Token)",
        description: "Built a token on the Solana blockchain, including a smart contract for interacting with the token and a backend API for token management and transactions. Demonstrates full-stack blockchain development from smart contract to API layer.",
        tech: ["Solana", "Smart Contracts", "Rust", "Web3"],
        link: null,
        github: null
      },
      {
        title: "Solsynk (Trading Platform)",
        description: "A high-performance trading platform built using Rust, designed for speed and reliability in financial markets. Leverages Rust's memory safety and concurrency for real-time trade execution and market data processing.",
        tech: ["Rust", "Finance", "Trading"],
        link: null,
        github: null
      },
      {
        title: "Talking AI Chrome Extension",
        description: "A Chrome extension that reads webpages and selected text aloud using AI voices and interacts with AI to provide summaries of page content. Enhances accessibility and productivity through intelligent text-to-speech and summarization.",
        tech: ["TypeScript", "Chrome API", "AI/TTS"],
        link: null,
        github: "https://github.com/Ddilibe/talking-ai"
      },
      {
        title: "T-Library (Library Management System)",
        description: "A full-stack library management interface built with Django, HTML, JavaScript, and CSS. Supports book cataloguing, member management, borrowing and return tracking, and administrative reporting.",
        tech: ["Django", "HTML", "JavaScript", "CSS"],
        link: null,
        github: null
      },
      {
        title: "Tetris (C Game)",
        description: "A fully functional Tetris game built from scratch using the C programming language, implementing game logic, rendering, collision detection, and scoring with no external game engine.",
        tech: ["C", "Game Development"],
        link: null,
        github: null
      },
      {
        title: "Custom Component Registry",
        description: "A registry of custom JavaScript components built with Tailwind CSS and shadcn/ui. A collection of reusable, well-designed components for modern web development.",
        tech: ["TypeScript", "Tailwind CSS", "shadcn/ui"],
        link: null,
        github: "https://github.com/Ddilibe/registry"
      }
    ]
  },
  {
    category: "Research & AI",
    projects: [
      {
        title: "CounterFactual Regret Minimization (Poker AI)",
        description: "Developed an AI agent for Texas Hold'em poker using the Monte Carlo Counterfactual Regret Minimization (MCCFR) algorithm. Trained through iterative self-play and systematic regret minimization, converging on a near-optimal, unexploitable playing strategy by efficiently navigating poker's vast game tree.",
        tech: ["Python", "NumPy", "Game Theory", "CFR"],
        link: null,
        github: null
      },
      {
        title: "GoSifu (Go AI Agent)",
        description: "An AI Go agent that plays the traditional board game using a Python implementation of the rules. Integrated with the Telex platform, implementing advanced algorithms for strategic gameplay in one of the world's most complex board games.",
        tech: ["Python", "AI", "Game Theory"],
        link: null,
        github: "https://github.com/Ddilibe/go-ai-agent"
      },
      {
        title: "CASSIA (Advanced Chess Engine)",
        description: "A high-performance chess engine using Rust for core logic, driven by optimized Minimax and Alpha-Beta pruning algorithms capable of evaluating over 10,000 board positions per second. Features a PyGame GUI for gameplay visualization.",
        tech: ["Rust", "Python", "PyGame"],
        link: null,
        github: "https://github.com/Ddilibe/pyfish"
      },
      {
        title: "Final Year Research: Lightning Effect on Skutterudite",
        description: "Multiphysics simulation research investigating lightning-induced electrical surges on skutterudite (CoSb₃), a high-performance thermoelectric material used in solar thermoelectric generators (STEGs). Used COMSOL Multiphysics for FEA modeling and Python for simulation automation, data processing, and performance curve visualization.",
        tech: ["COMSOL Multiphysics", "Python", "FEA", "Thermoelectrics"],
        link: null,
        github: null
      }
    ]
  },
  {
    category: "Machine Learning",
    projects: [
      {
        title: "Climate Pattern Classification Model",
        description: "A machine learning model engineered to classify weather data and identify distinct climate patterns. Improved data analysis efficiency by 92%, processing complex meteorological datasets to extract meaningful insights automatically.",
        tech: ["Python", "PyTorch", "Machine Learning", "AWS"],
        link: "https://colab.research.google.com/drive/1zJbnkl4V9AjwInMRJGZi60n-hxsfoQ8v",
        github: null
      },
      {
        title: "Tesla Stock Price Forecasting Algorithm",
        description: "A predictive deep learning algorithm for Tesla stock price forecasting achieving 94% accuracy in backtesting. Built with PyTorch for model construction, Pandas for data manipulation, and Scikit-learn for ML utilities.",
        tech: ["Python", "PyTorch", "Pandas", "Scikit-learn", "AWS"],
        link: "https://colab.research.google.com/drive/1xre7LZ2U9drOzZGDTflcrmfpyeCZceIQ",
        github: null
      },
      {
        title: "Amazon Sentiment Analysis",
        description: "A sentiment analysis model trained on Amazon product reviews to classify customer opinions as positive, negative, or neutral. Demonstrates NLP preprocessing, feature extraction, and classification techniques for real-world e-commerce data.",
        tech: ["Python", "NLP", "Machine Learning", "Sentiment Analysis"],
        link: null,
        github: null
      },
      {
        title: "Course Completion Prediction Model",
        description: "A machine learning model that predicts the likelihood of a student completing an online course based on behavioral and engagement data. Supports early intervention strategies and personalized learning recommendations.",
        tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
        link: null,
        github: null
      },
      {
        title: "FINDERS KEEPERS (AI-Powered Dating Platform)",
        description: "A machine learning-driven dating application matching users based on personality traits, interests, and behavioral data using collaborative filtering and neural networks. Achieved 85% match accuracy during user testing.",
        tech: ["Python", "PyTorch", "React", "Flask", "Docker"],
        link: null,
        github: "https://github.com/Ddilibe/FK"
      }
    ]
  },
  {
    category: "Frontend Development",
    projects: [
      {
        title: "Solar System Visualization",
        description: "An interactive 3D solar system visualization built with Three.js, allowing users to explore planets and celestial bodies in a visually stunning web experience.",
        tech: ["TypeScript", "JavaScript", "Three.js"],
        link: "https://dplanet.netlify.app/",
        github: null
      },
      {
        title: "Rixar Construction Website",
        description: "A modern, responsive frontend website built for Rixar Construction, showcasing their services, portfolio, and contact information with clean UI design.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: null,
        github: null
      },
      {
        title: "Intergrasphere",
        description: "A website for financial academics and enlightenment, providing resources, insights, and educational content on financial markets and investment strategies.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: null,
        github: null
      }
    ]
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
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
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <motion.div 
        className="max-w-7xl mx-auto space-y-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my work in software development, research, and machine learning
          </p>
        </motion.div>

        {/* Project Categories */}
        {projectCategories.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex}
            variants={itemVariants}
            className="space-y-6"
          >
            {/* Category Title */}
            <div className="flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                {category.category}
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-600/50 to-transparent"></div>
            </div>

            {/* Projects Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {category.projects.map((project, projectIndex) => (
                <motion.div
                  key={projectIndex}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card 
                    className="h-full cursor-pointer hover:shadow-xl transition-shadow group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm line-clamp-3">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary"
                            className="hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <DialogDescription className="text-base leading-relaxed">
              {selectedProject?.description}
            </DialogDescription>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary"
                    className="text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t">
              {selectedProject?.link && (
                <Button asChild size="lg">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Project
                  </a>
                </Button>
              )}
              {selectedProject?.github && (
                <Button variant="outline" asChild size="lg">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Projects