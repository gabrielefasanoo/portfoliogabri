import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/GabrieleFasano', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/gabriele-fasano', label: 'LinkedIn' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com/GabrieleFasano', label: 'Twitter' },
    { icon: <FaEnvelope size={20} />, url: 'mailto:gabrielefasano13@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    { title: 'Home', url: '#home' },
    { title: 'Progetti', url: '#projects' },
    { title: 'Skills', url: '#skills' },
    { title: 'Contatti', url: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonna 1 - Info */}
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-4"
            >
              Gabriele Fasano
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Frontend Developer specializzato in React e Next.js. 
              Creo esperienze web moderne e performanti.
            </p>
          </div>

          {/* Colonna 2 - Links rapidi */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rapidi</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.url}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 3 - Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Seguimi</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Gabriele Fasano. Tutti i diritti riservati.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Realizzato con <span className="text-red-500">❤</span> usando React & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
