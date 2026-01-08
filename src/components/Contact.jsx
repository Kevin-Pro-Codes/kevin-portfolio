import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGitAlt } from 'react-icons/fa';
import axios from 'axios';
import Container from './Container';
import { useTranslation } from 'react-i18next'; // 1. Importar o hook

const Contact = () => {
  const { t } = useTranslation(); // 2. Inicializar t

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      const response = await axios.post('/api/contact', formData);

      if (response.status === 200) {
        // 3. Sucesso traduzido
        setStatus({ type: 'success', msg: t('contact.form.status_success') });
        setFormData({ name: '', email: '', message: '' }); 
      }
    } catch (error) {
      console.error('Submission Error:', error);
      // 4. Erro traduzido
      setStatus({ 
        type: 'error', 
        msg: t('contact.form.status_error') 
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
            <span className="text-gray-900">{t('contact.title_main')}</span>
            <span className="text-black">{t('contact.title_sub')}</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 max-w-lg mx-auto md:mx-0 border border-gray-200">
              
              {status.msg && (
                <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${
                  status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {status.msg}
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label className="block text-gray-800 font-medium mb-2">{t('contact.form.label_name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-gray-900 disabled:opacity-50"
                    placeholder={t('contact.form.placeholder_name')}
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2">{t('contact.form.label_email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-gray-900 disabled:opacity-50"
                    placeholder={t('contact.form.placeholder_email')}
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2">{t('contact.form.label_message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-gray-900 resize-none disabled:opacity-50"
                    placeholder={t('contact.form.placeholder_message')}
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
                  {loading ? t('contact.form.btn_sending') : t('contact.form.btn_send')}
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-lg mx-auto md:mx-0"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-5 text-gray-900">{t('contact.info.title')}</h3>
              
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
                    <p className="text-sm text-gray-600 mt-1">{t('contact.info.github_desc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-300">
                    <FaGitAlt className="text-gray-800 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t('contact.info.git_repo')}</h4>
                    <p className="text-sm text-gray-600 mt-1">{t('contact.info.git_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl shadow-xl p-6 text-white border border-gray-800">
              <h3 className="text-xl font-bold mb-3">{t('contact.info.card_cta_title')}</h3>
              <p className="mb-5 opacity-90 text-sm">
                {t('contact.info.card_cta_desc')}
              </p>
              <a 
                href="https://github.com/Kevin-Pro-Codes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors border border-white"
              >
                {t('contact.info.card_cta_btn')}
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;