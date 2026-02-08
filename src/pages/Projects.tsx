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
          description: "Developed a real-time cryptocurrency update bot for Telegram, designed to provide users with up-to-the-minute information on prices, market trends, and analytical tools. The bot's backend leverages robust web scraping techniques, primarily utilizing Scrapy for efficient data extraction and Selenium for handling dynamic content, to collect data from various cryptocurrency exchanges and news sources. This solution effectively serves over 300 active monthly users, demonstrating proficiency in data acquisition, bot development, and delivering critical real-time information to a user base.",
          tech: ["Python", "Scrapy", "Selenium", "Docker"],
          link: "https://t.me/Test_pumpdotfun_bot",
          github: null
        },
        // {
        //   title: "CASSIA (Advanced Chess Engine)",
        //   description: "Designed and implemented Cassia, a high-performance chess engine using Rust for its core logic, capitalizing on Rust's memory safety and concurrency features. The engine's analytical prowess is driven by optimized Minimax and Alpha-Beta pruning algorithms, demonstrating a capability to evaluate over 10,000 board positions per second. A separate, intuitive graphical user interface (GUI) was developed using Python's PyGame, facilitating interaction with the engine and visualization of gameplay.",
        //   tech: ["Rust", "Python", "PyGame"],
        //   link: null,
        //   github: "https://github.com/Ddilibe/pyfish"
        // },
        {
          title: "FINDERS KEEPERS (AI-Powered Dating Platform)",
          description: "This project involved the development of a machine learning-driven dating application. The platform's core functionality is to match users based on personality traits, interests, and behavioral data, employing sophisticated algorithms such as collaborative filtering and neural networks. For the machine learning component, Python and PyTorch were utilized for model development. The application's architecture included React for the frontend and Flask for the backend, successfully achieving 85% match accuracy during user testing.",
          tech: ["Python", "PyTorch", "React", "Flask", "Docker"],
          link: null,
          github: "https://github.com/Ddilibe/FK"
        },
        {
          title: "Talking AI Chrome Extension",
          description: "A Chrome extension that reads webpages and selected text aloud using AI voices and interacts with AI to provide summaries of the page content. Enhances accessibility and productivity by converting text to speech with intelligent summarization.",
          tech: ["TypeScript", "Chrome API", "AI/TTS"],
          link: null,
          github: "https://github.com/Ddilibe/talking-ai"
        },
        {
          title: "DChess",
          description: "Dirty Chess built with Python - a custom chess implementation with unique rules and variations, providing an alternative chess experience with modified gameplay mechanics.",
          tech: ["Python", "Game Development"],
          link: null,
          github: "https://github.com/Ddilibe/dchess"
        },
        {
          title: "Custom Component Registry",
          description: "Registry of custom JavaScript components built with Tailwind CSS and shadcn/ui. A collection of reusable, well-designed components for modern web development.",
          tech: ["TypeScript", "Tailwind CSS", "shadcn/ui"],
          link: null,
          github: "https://github.com/Ddilibe/registry"
        }
      ]
    },
    {
      category: "Research",
      projects: [
        {
          title: "CounterFactual Regret Minimization",
          description: "This project focused on developing an AI agent for Texas Hold'em poker, a complex imperfect-information game, by implementing the Monte Carlo Counterfactual Regret Minimization (MCCFR) algorithm. The objective was to train an AI capable of near-optimal play through iterative self-play and systematic regret minimization. MCCFR's sampling approach was crucial for efficiently navigating poker's vast game tree, allowing the algorithm to refine its strategy and converge on a highly effective, unexploitable playing style by focusing computational resources on relevant decision points. This work demonstrated practical application of advanced game theory algorithms and efficient computational strategies for complex probabilistic scenarios.",
          tech: ["Python", "NumPy", "Game Theory", "CFR"],
          link: null,
          github: null
        },
        {
          title: "Go AI Agent",
          description: "An AI Go agent that plays the traditional board game using a Python implementation of the rules. Implements advanced algorithms for strategic gameplay in one of the world's most complex board games.",
          tech: ["Python", "AI", "Game Theory"],
          link: null,
          github: "https://github.com/Ddilibe/go-ai-agent"
        }
      ]
    },
    {
      category: "Machine Learning",
      projects: [
        {
          title: "Climate Pattern Classification Model",
          description: "This project involved the design and deployment of a machine learning model engineered to classify weather data and identify distinct climate patterns or regimes. The model's successful implementation significantly improved data analysis efficiency by 92%, demonstrating its capability to process complex meteorological datasets and extract meaningful insights automatically. This work highlights expertise in applying machine learning for environmental data analysis and optimizing scientific data processing workflows.",
          tech: ["Python", "Machine Learning", "AWS", "PyTorch"],
          link: "https://colab.research.google.com/drive/1zJbnkl4V9AjwInMRJGZi60n-hxsfoQ8v",
          github: null
        },
        {
          title: "Tesla Stock Price Forecasting Algorithm",
          description: "Developed a predictive algorithm for Tesla stock price forecasting, achieving 94% accuracy in backtesting. This robust solution was built using Python, leveraging the powerful deep learning capabilities of PyTorch for model construction, alongside Pandas for data manipulation and scikit-learn for machine learning utilities. The project demonstrates strong skills in financial data analysis, predictive modeling, and the application of advanced machine learning frameworks for real-world forecasting challenges.",
          tech: ["Python", "PyTorch", "Pandas", "Scikit-learn", "AWS"],
          link: "https://colab.research.google.com/drive/1xre7LZ2U9drOzZGDTflcrmfpyeCZceIQ",
          github: null
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