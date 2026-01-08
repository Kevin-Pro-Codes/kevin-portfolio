import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaVideo, FaEye, FaCode, FaLock, FaTimes, FaSpinner } from 'react-icons/fa';
import axios from 'axios'; // Importar axios
import Container from './Container';
import { useTranslation } from 'react-i18next';

const ClosedSourceProjects = () => {
  const { t } = useTranslation();
  
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false); // Novo estado
  const [status, setStatus] = useState({ type: '', msg: '' }); // Novo estado

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

  const handleSubmitDemoRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      // Aplicando a mesma lógica do seu Mailer
      const response = await axios.post('/api/contact', {
        ...demoRequest,
        subject: "Closed Source Demo Request" // Identificador para o seu backend
      });

      if (response.status === 200) {
        // Feedback de sucesso
        setStatus({ type: 'success', msg: t('closed_source.form.alert_success') });
        
        // Limpa o formulário após breve delay e fecha
        setTimeout(() => {
          setShowForm(false);
          setDemoRequest({
            name: '',
            email: '',
            projectInterest: '',
            preferredDate: '',
            preferredTime: ''
          });
          setStatus({ type: '', msg: '' });
        }, 2500);
      }
    } catch (error) {
      console.error('Demo Request Error:', error);
      setStatus({ 
        type: 'error', 
        msg: t('contact.form.status_error') // Reutilizando sua chave de erro global
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (loading) return; // Bloqueia fechar enquanto envia
    setShowForm(false);
    setStatus({ type: '', msg: '' });
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center border border-gray-400">
                <FaLock className="text-gray-800 text-2xl" />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-gray-900">{t('closed_source.title_part1')}</span>
              <span className="text-gray-700">
                {t('closed_source.title_part2')}
              </span>
            </h2>
            
            <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-6">
              {t('closed_source.main_description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-400">
                <FaVideo className="text-gray-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('closed_source.cards.demo.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('closed_source.cards.demo.desc')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  {t('closed_source.cards.demo.item1')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  {t('closed_source.cards.demo.item2')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  {t('closed_source.cards.demo.item3')}
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-400">
                <FaEye className="text-gray-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('closed_source.cards.use_cases.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('closed_source.cards.use_cases.desc')}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-400">
                  {t('closed_source.cards.use_cases.tag1')}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-400">
                  {t('closed_source.cards.use_cases.tag2')}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-400">
                  {t('closed_source.cards.use_cases.tag3')}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-400">
                  {t('closed_source.cards.use_cases.tag4')}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-400">
                <FaCode className="text-gray-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('closed_source.cards.architecture.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('closed_source.cards.architecture.desc')}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  {t('closed_source.cards.architecture.item1')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  {t('closed_source.cards.architecture.item2')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                  {t('closed_source.cards.architecture.item3')}
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <AnimatePresence mode="wait">
              {!showForm ? (
                <motion.div
                  key="trigger"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center"
                >
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white font-semibold rounded-xl hover:bg-black transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto border border-gray-700"
                  >
                    <FaVideo />
                    {t('closed_source.trigger_btn')}
                  </button>
                  <p className="text-gray-600 mt-4 text-sm">
                    {t('closed_source.trigger_hint')}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-300 max-w-2xl mx-auto shadow-lg"
                >
                  {/* Status Alerts do seu Mailer padrão */}
                  {status.msg && (
                    <div className={`mb-6 p-4 rounded-lg text-sm font-medium border ${
                      status.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      {status.msg}
                    </div>
                  )}

                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{t('closed_source.form.title')}</h3>
                    <button
                      onClick={handleCancel}
                      disabled={loading}
                      className="text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-30"
                      aria-label="Fechar formulário"
                    >
                      <FaTimes size={20} />
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmitDemoRequest} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-800 mb-2 text-sm">{t('closed_source.form.label_name')}</label>
                        <input
                          type="text"
                          name="name"
                          value={demoRequest.name}
                          onChange={handleInputChange}
                          required
                          disabled={loading}
                          className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm disabled:opacity-50"
                          placeholder={t('closed_source.form.placeholder_name')}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-800 mb-2 text-sm">{t('closed_source.form.label_email')}</label>
                        <input
                          type="email"
                          name="email"
                          value={demoRequest.email}
                          onChange={handleInputChange}
                          required
                          disabled={loading}
                          className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm disabled:opacity-50"
                          placeholder={t('closed_source.form.placeholder_email')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-800 mb-2 text-sm">{t('closed_source.form.label_interest')}</label>
                      <select
                        name="projectInterest"
                        value={demoRequest.projectInterest}
                        onChange={handleInputChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm disabled:opacity-50"
                      >
                        <option value="">{t('closed_source.form.interest_default')}</option>
                        <option value="backend">{t('closed_source.form.interest_opt1')}</option>
                        <option value="frontend">{t('closed_source.form.interest_opt2')}</option>
                        <option value="projetos">{t('closed_source.form.interest_opt3')}</option>
                        <option value="automation">{t('closed_source.form.interest_opt4')}</option>
                        <option value="dashboard">{t('closed_source.form.interest_opt5')}</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-800 mb-2 text-sm">{t('closed_source.form.label_date')}</label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={demoRequest.preferredDate}
                          onChange={handleInputChange}
                          disabled={loading}
                          className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-800 mb-2 text-sm">{t('closed_source.form.label_time')}</label>
                        <select
                          name="preferredTime"
                          value={demoRequest.preferredTime}
                          onChange={handleInputChange}
                          disabled={loading}
                          className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm disabled:opacity-50"
                        >
                          <option value="">{t('closed_source.form.time_default')}</option>
                          <option value="morning">{t('closed_source.form.time_morning')}</option>
                          <option value="afternoon">{t('closed_source.form.time_afternoon')}</option>
                          <option value="evening">{t('closed_source.form.time_evening')}</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`flex-1 px-5 py-2.5 font-semibold rounded-lg transition-all duration-300 text-sm border flex items-center justify-center gap-2
                          ${loading 
                            ? 'bg-gray-400 border-gray-400 text-white cursor-not-allowed' 
                            : 'bg-gradient-to-r from-gray-800 to-black text-white border-gray-700 hover:bg-black'}`}
                      >
                        {loading ? (
                          <>
                            <FaSpinner className="animate-spin" />
                            {t('contact.form.btn_sending')}
                          </>
                        ) : (
                          t('closed_source.form.submit')
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={handleCancel}
                        disabled={loading}
                        className="px-5 py-2.5 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition-all duration-300 text-sm border border-gray-400 disabled:opacity-50"
                      >
                        {t('closed_source.form.cancel')}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="py-8 border-t border-gray-300 text-center">
            <p className="text-gray-600 text-sm">
              <FaLock className="inline mr-2 text-gray-500" />
              {t('closed_source.footer_lock')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClosedSourceProjects;