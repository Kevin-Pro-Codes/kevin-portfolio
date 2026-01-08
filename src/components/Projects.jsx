import React, { useState, useMemo } from 'react'; // Adicionado useMemo
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaChevronDown, FaChevronUp, FaCheck, FaInfoCircle } from 'react-icons/fa';
import Container from './Container';
import { useTranslation } from 'react-i18next'; // 1. IMPORTADO

import grenoImage from '../assets/greno.jpg';
import canImage from '../assets/can.png';
import coursinImage from '../assets/coursin.png';
import modelImage from '../assets/model.jpg';

const Projects = () => {
  const { t } = useTranslation(); // 2. INICIALIZADO
  const [showAll, setShowAll] = useState(false);
    
  // 3. ARRAY CONECTADA AO JSON (Baseado no seu JSON emitido)
  const allProjects = useMemo(() => [
    {
      title: t('projects.items.greno.title'),
      description: t('projects.items.greno.description'),
      image: grenoImage, 
      liveLink: "https://greno-social.vercel.app/",
      githubLink: "https://github.com/Kevin-Pro-Codes/greno-social",
      tags: ["HTML", "CSS", "React", "Node.js", "Bootstrap", "SQLite"]
    },
    {
      title: t('projects.items.coursin.title'),
      description: t('projects.items.coursin.description'),
      image: coursinImage, 
      liveLink: "https://coursin.vercel.app/",
      githubLink: "https://github.com/Kevin-Pro-Codes/coursin",
      tags: ["HTML", "CSS", "React", "Node.js", "Tailwind", "MySQL"]
    },
    {
      title: t('projects.items.halo.title'),
      description: t('projects.items.halo.description'),
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveLink: "https://halo-trading.vercel.app/",
      githubLink: "https://github.com/Kevin-Pro-Codes/halo-trading",
      tags: ["HTML", "CSS", "React", "Tailwind"]
    },
    {
      title: t('projects.items.modelle.title'),
      description: t('projects.items.modelle.description'),
      image: modelImage, 
      liveLink: "https://modelle-one.vercel.app/",
      githubLink: "https://github.com/Kevin-Pro-Codes/modelle",
      tags: ["HTML", "CSS", "React", "Tailwind"]
    },
    {
      title: t('projects.items.newfoundland.title'),      
      description: t('projects.items.newfoundland.description'),
      image: canImage,     
      liveLink: "https://newfoundland-island.vercel.app/",
      githubLink: "https://github.com/Kevin-Pro-Codes/newfoundland-island",
      tags: ["HTML", "CSS", "React", "Tailwind"]
    },
    {
      title: t('projects.items.colorify.title'),
      description: t('projects.items.colorify.description'),
      image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveLink: "https://color-palette-code.vercel.app/",
      githubLink: "https://github.com/Kevin-Pro-Codes/color-code",
      tags: ["HTML", "CSS", "React", "Tailwind"]
    }
  ], [t]); // O [t] faz a lista atualizar quando o idioma mudar

  const INITIAL_DISPLAY_COUNT = 6;
  const hasProjectsToShow = allProjects.length > 0;
  const hasAdditionalProjects = allProjects.length > INITIAL_DISPLAY_COUNT;
  const additionalCount = allProjects.length - INITIAL_DISPLAY_COUNT;
  
  const displayedProjects = showAll 
    ? allProjects 
    : allProjects.slice(0, INITIAL_DISPLAY_COUNT);

  const handleShowMore = () => {
    setShowAll(!showAll);
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
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 border border-gray-300 shadow-md text-xs sm:text-sm">
              <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{t('buttons.live_demo')}</span>
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-black border border-gray-800 shadow-md text-xs sm:text-sm">
              <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{t('buttons.code')}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="p-5 flex-grow">
        <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-black transition-colors">{project.title}</h3>
        <p className="text-gray-700 mb-3 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-sm border border-gray-300">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-12 md:py-16 bg-white">
      <Container>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900">{t('projects.title_main')}</span>
            <span className="text-blue-600">{t('projects.title_sub')}</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      
        {hasProjectsToShow && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
            <button
              onClick={handleShowMore}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                showAll ? 'bg-blue-100 text-blue-700 border-2 border-blue-300 shadow-lg' : 'bg-gradient-to-r from-gray-900 to-black text-white border-2 border-gray-800 shadow-lg'
              }`}
            >
              {hasAdditionalProjects ? (
                showAll ? (
                  <><FaChevronUp className="text-lg" /> <span className="text-lg">{t('projects.btn_show_less', { count: INITIAL_DISPLAY_COUNT })}</span></>
                ) : (
                  <><FaChevronDown className="text-lg" /> <span className="text-lg">{t('projects.btn_show_more', { count: additionalCount })}</span></>
                )
              ) : (
                showAll ? (
                  <><FaCheck className="text-lg" /> <span className="text-lg">{t('projects.btn_all_shown', { count: allProjects.length })}</span></>
                ) : (
                  <><FaInfoCircle className="text-lg" /> <span className="text-lg">{t('projects.btn_visible', { count: allProjects.length })}</span></>
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