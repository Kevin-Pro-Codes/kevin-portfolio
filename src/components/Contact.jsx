import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MdEmail
} from 'react-icons/md';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegramPlane
} from 'react-icons/fa';
import Footer from './Footer';
import '../styles/Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('kevinprofessionalman@outlook.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const contactMethods = [
    {
      name: 'Email',
      icon: <MdEmail size={24} />,      
      action: handleEmailCopy,
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      link: 'https://www.linkedin.com/in/kevin-programmer/'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp size={24} />,
      link: 'https://wa.me/5511966317832'
    },
    /*{
      name: 'Telegram',
      icon: <FaTelegramPlane size={24} />,
      link: 'https://t.me/yourhandle'
    },*/
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      link: 'https://github.com/Kevin-Pro-Codes'
    }
  ];

  return (
    <div className="container">
      <div className="inner-content">
        <main className="main-content">
          <section className="division">
            <div className="contact-content">
              <h1 className="home-title">Contato</h1>

              <div className="contact-icons-container">
                {contactMethods.map((method, index) => (
                  method.action ? (
                    <motion.div
                      key={index}
                      onClick={method.action}
                      className="contact-icon"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="icon-circle">
                        <span className="icon">{method.icon}</span>
                      </div>
                     <span className="icon-label">
  {method.name}
  {copied && method.name === 'Email' && (
    <div className="copied-message">✔ Copied</div>
  )}
</span>
                    </motion.div>
                  ) : (
                    <motion.a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-icon"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="icon-circle">
                        <span className="icon">{method.icon}</span>
                      </div>
                      <span className="icon-label">{method.name}</span>
                    </motion.a>
                  )
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
