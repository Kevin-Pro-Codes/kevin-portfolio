import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import Container from './Container';
import { FaHandsClapping} from 'react-icons/fa6';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-black text-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Sobre </span>
              <span className="text-gray-300">
                Mim
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Desenvolvedor Full Stack especializado em criar soluções completas, 
              combinando frontend moderno, backend robusto e modelagem de dados eficiente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-700 via-gray-800 to-black rounded-3xl blur-xl opacity-30"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 border border-gray-700 shadow-2xl h-full">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-2xl flex items-center justify-center mx-auto border-2 border-gray-600">
                      <FaHandsClapping className="text-white text-4xl md:text-5xl" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Minha História
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base text-left">
                          Comecei na programação por curiosidade e transformei paixão em profissão
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base text-left">
                          Autodidata com mais de 3 anos construindo soluções do zero
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base text-left">
                          Apaixonado por resolver problemas complexos com código limpo
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-gray-400 text-sm italic">
                        "Cada linha de código é uma oportunidade de criar algo impactante"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                Minha Abordagem
              </h3>
              
              <p className="text-gray-300 mb-6">
                Acredito que desenvolver software vai além de escrever código - é sobre entender necessidades, 
                criar experiências e entregar valor real para os usuários finais.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700">
                    <FaCode className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Foco no Usuário</h4>
                    <p className="text-gray-300">Desenvolvo sempre pensando na experiência final do usuário</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700">
                    <FaServer className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Qualidade & Performance</h4>
                    <p className="text-gray-300">Código otimizado pensando em escalabilidade e manutenção</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700">
                    <FaDatabase className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Comunicação Clara</h4>
                    <p className="text-gray-300">Explico processos técnicos de forma acessível para todos</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="font-bold text-white mb-2">Fora do código:</h4>
                <p className="text-gray-300 text-sm">
                  Aprendo constantemente sobre novas tecnologias, acompanho comunidades de desenvolvimento 
                  e acredito que o melhor software é feito com colaboração e mente aberta.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;