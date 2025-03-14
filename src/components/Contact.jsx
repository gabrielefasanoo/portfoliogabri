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
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contattami</h2>
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
              className="group p-6 bg-gradient-main backdrop-blur-sm bg-opacity-50 rounded-xl hover:bg-opacity-70 transition-all duration-300 border border-slate-700/30"
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
          className="max-w-2xl mx-auto space-y-6"
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
            className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            disabled={loading}
          >
            {loading ? 'Invio in corso...' : 'Invia messaggio'}
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
