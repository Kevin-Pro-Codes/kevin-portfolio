import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaGitAlt, FaBrain, FaReact } from 'react-icons/fa';
import { SiAngular, SiBootstrap, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiSqlite, SiPhp } from 'react-icons/si';
import { FaJava, FaNodeJs, FaGithub } from 'react-icons/fa';
import Container from './Container';
import { useTranslation } from 'react-i18next'; // 1. IMPORTAR O HOOK

const Skills = () => {
  const { t } = useTranslation(); // 2. INICIALIZAR t

  const skillCategories = [
    {
      id: 'frontend', // ID estável para lógica de cores
      icon: <FaCode className="text-2xl text-blue-600" />,
      title: t('skills.categories.frontend'),
      skills: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'Angular', icon: <SiAngular className="text-red-500" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-500" /> },
      ]
    },
    {
      id: 'backend',
      icon: <FaServer className="text-2xl text-green-600" />,
      title: t('skills.categories.backend'),
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'PHP', icon: <SiPhp className="text-indigo-500" /> },
        { name: 'Java', icon: <FaJava className="text-red-600" /> },
      ]
    },
    {
      id: 'database',
      icon: <FaDatabase className="text-2xl text-purple-600" />,
      title: t('skills.categories.database'),
      skills: [
        { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
        { name: 'SQLite', icon: <SiSqlite className="text-blue-300" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      ]
    },
    {
      id: 'versioning',
      icon: <FaGitAlt className="text-2xl text-orange-600" />,
      title: t('skills.categories.versioning'),
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-900" /> },
      ]
    },
  ];

  return (
    <section id="skills" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <FaBrain className="inline mr-2 text-gray-800" />
            <span className="text-gray-900">{t('skills.title_main')}</span>
            <span className="text-black">
               {t('skills.title_sub')}
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl md:rounded-2xl shadow-sm md:shadow-lg p-4 md:p-5 hover:shadow-md md:hover:shadow-xl transition-shadow duration-300 w-full border border-gray-200 group"
            >
              <div className={`
                w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 
                ${category.id === 'frontend' 
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200' 
                  : category.id === 'backend' 
                  ? 'bg-gradient-to-br from-green-50 to-green-100 border border-green-200'
                  : category.id === 'database'
                  ? 'bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200'
                  : 'bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200'
                }
              `}>
                {React.cloneElement(category.icon, { className: 'text-base md:text-lg' })}
              </div>
              
              <h3 className={`text-base md:text-lg font-bold mb-3 md:mb-4 
                ${category.id === 'frontend' ? 'text-blue-700' 
                  : category.id === 'backend' ? 'text-green-700'
                  : category.id === 'database' ? 'text-purple-700'
                  : 'text-orange-700'
                }`}>
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 p-2 bg-gray-50 rounded-md md:rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                    <div className="text-base md:text-lg">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-900 text-sm md:text-base">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 max-w-6xl mx-auto border border-gray-300"
        >
          <div className="text-center mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-gray-900">
              <FaCode className="inline mr-2 text-gray-800" />
              {t('skills.methodologies.title')}
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base">
              {t('skills.methodologies.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mb-2 md:mb-3 border border-blue-200">
                <FaCode className="text-blue-600 text-base md:text-xl" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{t('skills.methodologies.card1_title')}</h4>
              <p className="text-gray-700 text-xs md:text-sm">
                {t('skills.methodologies.card1_desc')}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200">React Router</span>
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200">Forms</span>
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200">APIs</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center mb-2 md:mb-3 border border-green-200">
                <FaServer className="text-green-600 text-base md:text-xl" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{t('skills.methodologies.card2_title')}</h4>
              <p className="text-gray-700 text-xs md:text-sm">
                {t('skills.methodologies.card2_desc')}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-green-50 text-green-700 text-xs rounded border border-green-200">REST API</span>
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-green-50 text-green-700 text-xs rounded border border-green-200">MVC</span>
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-green-50 text-green-700 text-xs rounded border border-green-200">JWT</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm border border-gray-200">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center mb-2 md:mb-3 border border-purple-200">
                <FaDatabase className="text-purple-600 text-base md:text-xl" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{t('skills.methodologies.card3_title')}</h4>
              <p className="text-gray-700 text-xs md:text-sm">
                {t('skills.methodologies.card3_desc')}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-purple-50 text-purple-700 text-xs rounded border border-purple-200">SQL/NoSQL</span>
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-purple-50 text-purple-700 text-xs rounded border border-purple-200">Backup</span>
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-purple-50 text-purple-700 text-xs rounded border border-purple-200">Modeling</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;