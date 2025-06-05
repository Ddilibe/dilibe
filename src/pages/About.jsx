import React from 'react'

const About = () => {
  const skills = {
    languages: ['Python', "C", "Rust", "C++", 'JavaScript'],
    frameworks: ['Django', 'Flask', 'Pytorch', 'Scikit-Learn'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis'],
    cloud: ['Docker', 'Kubernetes'],
    tools: ['Git', 'CI/CD', "Linux"]
  }

  const experiences = [
    {   
      title: 'Principal Software Engineer',
      company: 'Meliora Business Solutions Limited',
      period: '2025 - Present',
      description: 'Leading development of distributed systems, cloud and desktop applications.'
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

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <div className="profile-info">
            <img 
              src="/Profile Picture.jpeg" 
              alt="Dilibe Franklin" 
              className="profile-image"
            />
            <div className="bio">
              <p>
              I am a Principal Software Engineer and Researcher with a proven track record of over 4 years in designing, deploying, and optimizing scalable distributed systems and cloud infrastructure. My unique skill set encompasses full-stack development, machine learning, deep learning, and in-depth research into distributed architectures.
            </p>
            <p>
Throughout my career, I've driven tangible results: I developed ML models for weather pattern classification (92% efficiency gain) and a 94% accurate Tesla stock price forecasting algorithm. My work extends to robust application development, from streamlining hospital operations with a PySide6/MySQL ERP solution to securing software with unique hardware-tied licensing algorithms. As a freelancer, I built a real-time crypto bot (300 monthly users), and my personal projects include 'Finders Keepers,' an AI-powered dating platform (85% match accuracy), and 'CASSIA,' a high-performance Rust chess engine.
            </p>
            <p>
I am passionate about tackling complex technical challenges, accelerating product development lifecycles, and fostering growth in engineering teams. My commitment to the tech community is evident through my contributions to open-source projects and technical articles.
              </p>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <ul className="skill-list">
                  {items.map((skill, index) => (
                    <li key={index} className="skill-item">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h3>Professional Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h4>{exp.title}</h4>
                  <h5>{exp.company}</h5>
                  <p className="period">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Master of Science in Financial Engineering</h4>
            <p>Quant World University, 2025 - Present</p>
            <p>Focus: Financial Engineering, AI and Machine Learning</p>
          </div>
          <div className="education-item">
            <h4>Bachelor of Engineering in Mechanical Engineering</h4>
            <p>University of Nigeria, Nsukka, 2024</p>
            <p>Graduated with Honors</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 