import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      name: 'React',
      icon: <FaReact className="text-[#61DAFB]" />,
      level: 90,
      description: 'Sviluppo di applicazioni moderne e reattive'
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 className="text-[#E34F26]" />,
      level: 95,
      description: 'Markup semantico e accessibile'
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt className="text-[#1572B6]" />,
      level: 85,
      description: 'Design responsive e animazioni'
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="text-[#F7DF1E]" />,
      level: 88,
      description: 'ES6+, TypeScript, e funzionalità moderne'
    },
    {
      name: 'MySQL',
      icon: <FaDatabase className="text-[#4479A1]" />,
      level: 75,
      description: 'Gestione database e queries'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Competenze Tecniche</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Le mie principali competenze tecniche e tecnologie che utilizzo quotidianamente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-main backdrop-blur-sm bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition-all duration-300 border border-slate-700/30"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <div className="mt-2 bg-slate-800 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-teal-500 to-blue-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
