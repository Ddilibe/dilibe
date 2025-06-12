import React, { useState } from 'react'

const Projects = () => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: '',
    description: '',
    tech: '',
    link: ''
  })

  const handleProjectClick = (project) => {
    setModalData({
      isOpen: true,
      ...project
    })
  }

  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }))
  }

  const projects = {
    software: [
      {
        title: "Cryptocurrency Telegram Bot",
        description: "Developed a real-time cryptocurrency update bot for Telegram, designed to provide users with up-to-the-minute information on prices, market trends, and analytical tools. The bot's backend leverages robust web scraping techniques, primarily utilizing Scrapy for efficient data extraction and Selenium for handling dynamic content, to collect data from various cryptocurrency exchanges and news sources. This solution effectively serves over 300 active monthly users, demonstrating proficiency in data acquisition, bot development, and delivering critical real-time information to a user base.",
        tech: "Tech: Python, Scrapy, Selenium, Docker",
        link: "https://example.com/orchestrator"
      },
      {
        title: "CASSIA (Advanced Chess Engine)",
        description: "Designed and implemented Cassia, a high-performance chess engine using Rust for its core logic, capitalizing on Rust's memory safety and concurrency features. The engine's analytical prowess is driven by optimized Minimax and Alpha-Beta pruning algorithms, demonstrating a capability to evaluate over 10,000 board positions per second. A separate, intuitive graphical user interface (GUI) was developed using Python's PyGame, facilitating interaction with the engine and visualization of gameplay",
        tech: "Tech: Rust, Python, PyGame",
        link: "https://github.com/Ddilibe/pyfish.git"
      },
      {
        title: "FINDERS KEEPERS (AI-Powered Dating Platform)",
        description: "This project involved the development of a machine learning-driven dating application The platform's core functionality is to match users based on personality traits, interests, and behavioral data, employing sophisticated algorithms such as collaborative filtering and neural networks. For the machine learning component, Python and PyTorch were utilized for model development. The application's architecture included React for the frontend and Flask for the backend, successfully achieving 85% match accuracy during user testing.",
        tech: "Tech: Python, PyTorch, React, Flask, Docker",
        link: "https://example.com/finders-keepers"
      }
    ],
    research: [
      {
        title: "CounterFactual Regret Minimization",
        description: "This project focused on developing an AI agent for Texas Hold'em poker, a complex imperfect-information game, by implementing the Monte Carlo Counterfactual Regret Minimization (MCCFR) algorithm. The objective was to train an AI capable of near-optimal play through iterative self-play and systematic regret minimization. MCCFR's sampling approach was crucial for efficiently navigating poker's vast game tree, allowing the algorithm to refine its strategy and converge on a highly effective, unexploitable playing style by focusing computational resources on relevant decision points. This work demonstrated practical application of advanced game theory algorithms and efficient computational strategies for complex probabilistic scenarios.",
        tech: "Tech: Python, Numpy, Unit Testing, Git, CLI, CFR",
        link: "projects/pokerai"
      }
    ],
    ml: [
      {
        title: "Climate Pattern Classification Model",
        description: "This project involved the design and deployment of a machine learning model engineered to classify weather data and identify distinct climate patterns or regimes. The model's successful implementation significantly improved data analysis efficiency by 92%, demonstrating its capability to process complex meteorological datasets and extract meaningful insights automatically. This work highlights expertise in applying machine learning for environmental data analysis and optimizing scientific data processing workflows.",
        tech: "Tech: Python, Machine Learning, AWS, Pytorch",
        link: "https://example.com/dashboard"
      },
      {
        title: "Tesla Stock Price Forecasting Algorithm",
        description: "Developed a predictive algorithm for Tesla stock price forecasting, achieving 94% accuracy in backtesting. This robust solution was built using Python, leveraging the powerful deep learning capabilities of PyTorch for model construction, alongside Pandas for data manipulation and scikit-learn for machine learning utilities. The project demonstrates strong skills in financial data analysis, predictive modeling, and the application of advanced machine learning frameworks for real-world forecasting challenges.",
        tech: "Tech: Python, PyTorch, Pandas, Scikit-learn, AWS",
        link: "https://example.com/dashboard"
      }
    ],
    frontend: [
      {
        title: "Solar System",
        description: "",
        tech: "Tech: Typescript, Javascript, Three JS",
        link: "https://dplanet.netlify.app/"
      }
    ]
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-categories">
          <div className="category">
            <h3 className="category-title">Software Development</h3>
            <div className="projects-grid">
              {projects.software.map((project, index) => (
                <div
                  key={`software-${index}`}
                  className="project-card"
                  onClick={() => handleProjectClick(project)}
                >
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {project.description.length > 150
                      ? `${project.description.substring(0, 150)}...`
                      : project.description}
                  </p>
                  <p className="project-tech">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Research Papers</h3>
            <div className="projects-grid">
              {projects.research.map((project, index) => (
                <div
                  key={`research-${index}`}
                  className="project-card"
                  onClick={() => handleProjectClick(project)}
                >
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {project.description.length > 150
                      ? `${project.description.substring(0, 150)}...`
                      : project.description}
                  </p>
                  <p className="project-tech">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Machine Learning</h3>
            <div className="projects-grid">
              {projects.ml.map((project, index) => (
                <div
                  key={`ml-${index}`}
                  className="project-card"
                  onClick={() => handleProjectClick(project)}
                >
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {project.description.length > 150
                      ? `${project.description.substring(0, 150)}...`
                      : project.description}
                  </p>
                  <p className="project-tech">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Frontend Projects</h3>
            <div className="projects-grid">
              {projects.frontend.map((project, index) => (
                <div
                  key={`frontend-${index}`}
                  className="project-card"
                  onClick={() => handleProjectClick(project)}
                >
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {project.description.length > 150
                      ? `${project.description.substring(0, 150)}...`
                      : project.description}
                  </p>
                  <p className="project-tech">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {modalData.isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h3 className="modal-title">{modalData.title}</h3>
            <p className="modal-description">{modalData.description}</p>
            <p className="modal-tech">{modalData.tech}</p>
            <a
              href={modalData.link}
              className="modal-link"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects 