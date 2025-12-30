import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGitAlt } from 'react-icons/fa';
import axios from 'axios'; // Ensure you ran: npm install axios
import Container from './Container';

const Contact = () => {
  // 1. State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. State for UI feedback (loading and success/error messages)
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  // 3. Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 4. Handle form submission to your Node.js backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      // Sends data to your local backend server
      const response = await axios.post('/api/contact', formData);

      if (response.status === 200) {
        setStatus({ type: 'success', msg: 'Mensagem enviada com sucesso!' });
        setFormData({ name: '', email: '', message: '' }); 
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus({ 
        type: 'error', 
        msg: 'Erro ao enviar. Verifique se o servidor backend está ligado.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900">Vamos </span>
            <span className="text-black">Conversar</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Entre em contato para discutirmos colaboração em projetos ou oportunidades profissionais
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Column: The Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 max-w-lg mx-auto md:mx-0 border border-gray-200">
              
              {/* Success/Error Alert */}
              {status.msg && (
                <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${
                  status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {status.msg}
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label className="block text-gray-800 font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-gray-900 disabled:opacity-50"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-gray-900 disabled:opacity-50"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-gray-900 resize-none disabled:opacity-50"
                    placeholder="Descreva seu projeto ou oportunidade..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 border border-black 
                    ${loading 
                      ? 'bg-gray-400 border-gray-400 text-white cursor-not-allowed' 
                      : 'bg-black text-white hover:bg-gray-800'
                    }`}
                >
                  {loading ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-lg mx-auto md:mx-0"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-5 text-gray-900">Colabore Comigo</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-300">
                    <FaGithub className="text-gray-800 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">GitHub</h4>
                    <a 
                      href="https://github.com/Kevin-Pro-Codes" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black"
                    >
                      github.com/Kevin-Pro-Codes
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Veja meus projetos e contribuições</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-300">
                    <FaGitAlt className="text-gray-800 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Git Repositórios</h4>
                    <p className="text-sm text-gray-600 mt-1">Incluindo projetos open-source</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl shadow-xl p-6 text-white border border-gray-800">
              <h3 className="text-xl font-bold mb-3">Pronto para colaborar?</h3>
              <p className="mb-5 opacity-90 text-sm">
                Vamos criar algo incrível juntos usando as melhores práticas de desenvolvimento!
              </p>
              <a 
                href="https://github.com/Kevin-Pro-Codes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors border border-white"
              >
                Ver Projetos
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;