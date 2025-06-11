import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import '../styles/Projects.css';

export default function Projects({ onClose }) {
  // Array of project data with random YouTube video IDs
  const projects = [
    {
      id: 1,
      title: "Greeno Social",
      videoId: "0_DmabOD54k",
      date: "Maio de 2025",
      category: "Desenvolvimento Web",
      description: "Um projeto que usa Reactjs, Bootstrap, HTML5, CSS3 como sua base.",
      tech: ["HTML5", "CSS3/Bootstrap", "React.js"]
    },
    /*
    {
      id: 2,
      title: "E-commerce Platform",
      videoId: "9bZkp7q19f0",
      date: "Abril de 2025",
      category: "Full Stack",
      description: "Complete online store with product listings, cart functionality, and secure checkout process.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"]
    },
    {
      id: 3,
      title: "Task Management App",
      videoId: "JGwWNGJdvx8",
      date: "Março de 2025",
      category: "Mobile Development",
      description: "Productivity application with drag-and-drop interface, reminders, and team collaboration features.",
      tech: ["React Native", "Firebase", "Redux", "Expo"]
    },
    {
      id: 4,
      title: "Weather Dashboard",
      videoId: "OPf0YbXqDm0",
      date: "Fevereiro de 2025",
      category: "Frontend",
      description: "Real-time weather forecasting application with interactive maps and historical data visualization.",
      tech: ["JavaScript", "Chart.js", "Weather API", "Geolocation"]
    },
    {
      id: 5,
      title: "Social Media Analytics",
      videoId: "kJQP7kiw5Fk",
      date: "Janeiro de 2025",
      category: "Data Visualization",
      description: "Dashboard for tracking engagement metrics across multiple social platforms with custom reporting.",
      tech: ["Python", "D3.js", "MongoDB", "Express"]
    },
    {
      id: 6,
      title: "Fitness Tracker",
      videoId: "RgKAFK5djSk",
      date: "Dezembro de 2024",
      category: "Mobile App",
      description: "Workout logging application with exercise database, progress tracking, and community features.",
      tech: ["Flutter", "Firebase", "BLoC Pattern", "Google Fit API"]
    } */
  ];

  return (
    <div className="divisionx">
      <div className="inner-content">
        {/* Main Content Area */}
        <main className="main-content">
          <section className="division">
            <div className="projects-content">
              <h2 className="projects-title">Projetos</h2>
              
              {/* Map through projects array */}
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="video-showcase">
                    <div className="video-player-container">
                      <iframe
                        src={`https://www.youtube.com/embed/${project.videoId}?modestbranding=1&rel=0`}
                        title={`${project.title} Demonstration`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    <div className="project-details">
                      <h3 className="projects-title2">{project.title}</h3>
                      <div className="project-meta">
                        <span className="date">{project.date}</span>
                        <span className="category">{project.category}</span>
                      </div>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <div className="tech-stack">
                        {project.tech.map((tech, index) => (
                          <span key={index}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Add divider except after last project */}
                  {project.id !== projects.length && (
                    <div className="project-divider"></div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}