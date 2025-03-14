import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'gabrielefasano13@gmail.com',
      link: 'mailto:gabrielefasano13@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Telefono',
      content: '+39 391 388 2209',
      link: 'tel:+393913882209',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Località',
      content: 'Bari, Italia',
      link: 'https://goo.gl/maps/Bari',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-teal-500/10 rounded-full text-teal-400 text-sm mb-4">
            Parliamo del tuo progetto
          </span>
          <h2 className="section-title">Iniziamo a collaborare</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hai un progetto interessante? Parliamone insieme. Sono sempre alla ricerca
            di nuove sfide e opportunità di collaborazione.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl 
              hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/30
              hover:shadow-lg hover:shadow-teal-500/10 transform hover:-translate-y-1"
            >
              <div className="text-teal-400 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-400">{info.content}</p>
            </motion.a>
          ))}
        </div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6 bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm
          border border-slate-700/30 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300"
        >
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Il tuo nome"
              className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="La tua email"
              className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Il tuo messaggio"
              rows={6}
              className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cta-button w-full"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Invio in corso...
              </span>
            ) : 'Invia messaggio'}
          </motion.button>
          {success && (
            <p className="text-green-400 text-center">
              Messaggio inviato con successo!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
