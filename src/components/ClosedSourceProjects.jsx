import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaEye, FaCode, FaLock, FaTimes } from 'react-icons/fa';
import Container from './Container';

const ClosedSourceProjects = () => {
  const [showForm, setShowForm] = useState(false);
  const [demoRequest, setDemoRequest] = useState({
    name: '',
    email: '',
    projectInterest: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDemoRequest(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitDemoRequest = (e) => {
    e.preventDefault();
    console.log('Demo request:', demoRequest);
    alert('Solicitação de demonstração enviada! Entrarei em contato em breve para agendar.');
    setShowForm(false);
    setDemoRequest({
      name: '',
      email: '',
      projectInterest: '',
      preferredDate: '',
      preferredTime: ''
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setDemoRequest({
      name: '',
      email: '',
      projectInterest: '',
      preferredDate: '',
      preferredTime: ''
    });
  };

  return (
    <section className="bg-white text-gray-900 py-12 md:py-16">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center border border-gray-400">
                <FaLock className="text-gray-800 text-2xl" />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-gray-900">Projetos com </span>
              <span className="text-gray-700">
                Código Fechado
              </span>
            </h2>
            
            <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-6">
              Tenho experiência em diversos projetos com código fonte proprietário que não posso disponibilizar publicamente.
              Posso demonstrar essas soluções em vídeo chamada ou apresentação personalizada.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-400">
                <FaVideo className="text-gray-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Demonstração ao Vivo</h3>
              <p className="text-gray-700 mb-4">
                Agende uma vídeo chamada para ver o projeto em funcionamento, fluxos de usuário e funcionalidades principais.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  Demonstração interativa
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  Q&A em tempo real
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  Screen sharing
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-400">
                <FaEye className="text-gray-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Casos de Uso</h3>
              <p className="text-gray-700 mb-4">
                Projetos em produção com casos reais: sistemas internos, dashboards administrativos e automações complexas.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-400">
                  APIs Privadas
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-400">
                  Dashboards
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-400">
                  Automação
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-400">
                  Sistemas Internos
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-400">
                <FaCode className="text-gray-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Arquitetura & Código</h3>
              <p className="text-gray-700 mb-4">
                Discussão técnica sobre arquitetura, padrões de código, decisões técnicas e soluções implementadas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  Code review conceitual
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  Decisões arquiteturais
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  Padrões implementados
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            {!showForm ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <button
                  onClick={() => setShowForm(true)}
                  className="px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white font-semibold rounded-xl hover:bg-black transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto border border-gray-700"
                >
                  <FaVideo />
                  Solicitar Demonstração em Vídeo
                </button>
                <p className="text-gray-600 mt-4 text-sm">
                  Entrarei em contato para agendar o melhor horário
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-300 max-w-2xl mx-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Agendar Demonstração</h3>
                  <button
                    onClick={handleCancel}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Fechar formulário"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
                
                <form onSubmit={handleSubmitDemoRequest} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-800 mb-2 text-sm">Nome</label>
                      <input
                        type="text"
                        name="name"
                        value={demoRequest.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 mb-2 text-sm">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={demoRequest.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-800 mb-2 text-sm">Interesse Específico</label>
                    <select
                      name="projectInterest"
                      value={demoRequest.projectInterest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm"
                    >
                      <option value="">Selecione o tipo de projeto</option>
                      <option value="backend">Sistemas Backend/APIs</option>
                      <option value="frontend">Aplicações Frontend Complexas</option>
                      <option value="projetos">Projetos</option>
                      <option value="automation">Automação/DevOps</option>
                      <option value="dashboard">Dashboards & Analytics</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-800 mb-2 text-sm">Data Preferencial</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={demoRequest.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 mb-2 text-sm">Horário Preferencial</label>
                      <select
                        name="preferredTime"
                        value={demoRequest.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm"
                      >
                        <option value="">Qual horário prefere?</option>
                        <option value="morning">Manhã (9h-12h)</option>
                        <option value="afternoon">Tarde (14h-18h)</option>
                        <option value="evening">Noite (19h-21h)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 px-5 py-2.5 bg-gradient-to-r from-gray-800 to-black text-white font-semibold rounded-lg hover:bg-black transition-all duration-300 text-sm border border-gray-700"
                    >
                      Solicitar Demonstração
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-5 py-2.5 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition-all duration-300 text-sm border border-gray-400"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>

          <div className="py-8 border-t border-gray-300 text-center">
            <p className="text-gray-600 text-sm">
              <FaLock className="inline mr-2 text-gray-500" />
              Por questões de confidencialidade, o código fonte não pode ser compartilhado publicamente.
              A demonstração permite avaliar minhas habilidades técnicas sem expor propriedade intelectual.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClosedSourceProjects;