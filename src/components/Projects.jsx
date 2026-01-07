import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaChevronDown, FaChevronUp, FaCheck, FaInfoCircle } from 'react-icons/fa';
import Container from './Container';

import grenoImage from '../assets/greno.jpg';
import canImage from '../assets/can.png';
import coursinImage from '../assets/coursin.png';
import modelImage from '../assets/model.jpg';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
   
 const allProjects = [
  {
    title: "Greno Rede Social",
    description: "Plataforma de rede social com feed de mensagens e perfis de usuário.",
    image: grenoImage, 
    liveLink: "https://greno-social.vercel.app/",
    githubLink: "https://github.com/Kevin-Pro-Codes/greno-social",
    tags: ["HTML", "CSS", "React", "Node.js", "Bootstrap", "SQLite"]
  },
  {
    title: "Coursin Plataforma de Cursos",
    description: "Plataforma abrangente de aprendizado online com cursos, acompanhamento de progresso, certificados e conteúdo interativo.",
    image: coursinImage, 
    liveLink: "https://coursin.vercel.app/",
    githubLink: "https://github.com/Kevin-Pro-Codes/coursin",
    tags: ["HTML", "CSS", "React", "Node.js", "Tailwind", "MySQL"]
  },
  {
    title: "Halo Plataforma de Trading",
    description: "Plataforma avançada de trading de criptomoedas com gráficos em tempo real, rastreamento de portfólio e transações seguras.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveLink: "https://halo-trading.vercel.app/",
    githubLink: "https://github.com/Kevin-Pro-Codes/halo-trading",
    tags: ["HTML", "CSS", "React", "Tailwind"]
  },
  {
    title: "Modelle Plataforma de Moda",
    description: "Plataforma moderna de moda com visualizações 3D de produtos, experimentação virtual e recomendações personalizadas.",
    image: modelImage, 
    liveLink: "https://modelle-one.vercel.app/",
    githubLink: "https://github.com/Kevin-Pro-Codes/modelle",
    tags: ["HTML", "CSS", "React", "Tailwind"]
  },
  {
    title: "Newfoundland Turismo de Ilha Canadense",      
    description: "Guia de viagem interativo para Newfoundland com atrações, mapas, sistema de reservas e experiências locais.",
    image: canImage,     
    liveLink: "https://newfoundland-island.vercel.app/",
    githubLink: "https://github.com/Kevin-Pro-Codes/newfoundland-island",
    tags: ["HTML", "CSS", "React", "Tailwind"]
  },
  {
    title: "Colorify: Paleta de Cores",
    description: "Gerador moderno de paletas de cores com pré-visualização em tempo real, extração de códigos de cor e opções de exportação para designers e desenvolvedores.",
    image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    liveLink: "https://color-palette-code.vercel.app/",
    githubLink: "https://github.com/Kevin-Pro-Codes/color-code",
    tags: ["HTML", "CSS", "React", "Tailwind"]
  }
];

  // Número de projetos a serem exibidos por padrão
  const INITIAL_DISPLAY_COUNT = 6;
  
  // Sempre mostra o botão, mesmo se não houver projetos extras
  const hasProjectsToShow = allProjects.length > 0;
  const hasAdditionalProjects = allProjects.length > INITIAL_DISPLAY_COUNT;
  const additionalCount = allProjects.length - INITIAL_DISPLAY_COUNT;
  
  // Projetos a serem exibidos
  const displayedProjects = showAll 
    ? allProjects 
    : allProjects.slice(0, INITIAL_DISPLAY_COUNT);

  const handleShowMore = () => {
    if (hasAdditionalProjects) {
      setShowAll(!showAll);
    } else {
      setShowAll(!showAll);
    }
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      key={`${project.title}-${index}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Buttons are now ALWAYS VISIBLE by default */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            {project.liveLink !== "#" ? (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300 border border-gray-300 shadow-md text-xs sm:text-sm"
              >
                <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Live Demo</span>
                <span className="xs:hidden">Demo</span>
              </a>
            ) : (
              <button 
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-100 text-gray-700 rounded-lg font-medium cursor-not-allowed border border-gray-300 text-xs sm:text-sm"
                disabled
              >
                <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Demo</span>
                <span className="xs:hidden">Demo</span>
              </button>
            )}
            {project.githubLink !== "#" ? (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-black hover:scale-105 transition-all duration-300 border border-gray-800 shadow-md text-xs sm:text-sm"
              >
                <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Code</span>
                <span className="xs:hidden">Code</span>
              </a>
            ) : (
              <button 
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-100 text-gray-700 rounded-lg font-medium cursor-not-allowed border border-gray-300 text-xs sm:text-sm"
                disabled
              >
                <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Code</span>
                <span className="xs:hidden">Code</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 flex-grow">
        <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-black transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-3 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-sm border border-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-12 md:py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900">Projetos </span>
            <span className="text-blue-600">Desenvolvidos</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Aplicações modernas desenvolvidas com tecnologias atuais, focadas em performance, usabilidade e design responsivo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </div>
      
        {hasProjectsToShow && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleShowMore}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                showAll 
                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-2 border-blue-300 shadow-lg'
                  : 'bg-gradient-to-r from-gray-900 to-black text-white hover:from-black hover:to-gray-900 border-2 border-gray-800 shadow-lg hover:shadow-xl'
              }`}
              disabled={!hasAdditionalProjects && showAll}
            >
              {hasAdditionalProjects ? (
                showAll ? (
                  <>
                    <FaChevronUp className="text-lg" />
                    <span className="text-lg">Mostrar menos ({INITIAL_DISPLAY_COUNT} projetos)</span>
                  </>
                ) : (
                  <>
                    <FaChevronDown className="text-lg" />
                    <span className="text-lg">Ver mais {additionalCount} projeto{additionalCount > 1 ? 's' : ''}</span>
                  </>
                )
              ) : (
                showAll ? (
                  <>
                    <FaCheck className="text-lg" />
                    <span className="text-lg">Todos os {allProjects.length} projetos exibidos</span>
                  </>
                ) : (
                  <>
                    <FaInfoCircle className="text-lg" />
                    <span className="text-lg">Todos os {allProjects.length} projetos estão visíveis</span>
                  </>
                )
              )}
            </button>
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default Projects;