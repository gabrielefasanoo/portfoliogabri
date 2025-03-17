import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: "Veterinario Sito",
      description: "Sito web per la prenotazione di visite veterinarie",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3",
      tags: ["React", "Next.js", "Tailwind CSS"],
      github: "https://github.com/gabrielefasanoo/veterinariosito",
      demo: "https://ecommerce-demo.com",
    },
    {
      title: "Fitness Sito",
      description: "Landing page per il sito web di una palestra",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3",
      tags: ["Typescript", "Tailwind CSS", "Vite" ],
      github: "https://github.com/gabrielefasanoo/fitnesslanding",
      demo: "https://taskmanager-demo.com",
    },
    {
      title: "Caffè App",
      description: "Un'applicazione web moderna per la gestione degli ordini di un bar/caffetteria, sviluppata con React, TypeScript e Vite.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3",
      tags: ["React", "Typescript","Tailwind CSS", "Vite", "Firebase"],
      github: "https://github.com/gabrielefasanoo/gestionesistemabar-main",
      demo: "https://weatherapp-demo.com",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-solid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Una selezione dei miei progetti più recenti e significativi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-section backdrop-blur-sm bg-opacity-50 rounded-xl overflow-hidden group border border-slate-700/30"
            >
              {/* Immagine Progetto */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay con links */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 rounded-full hover:bg-slate-700 transition-colors"
                  >
                    <FaGithub className="text-white text-xl" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 rounded-full hover:bg-slate-700 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-white text-xl" />
                  </a>
                </div>
              </div>

              {/* Contenuto Progetto */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700 text-sm text-teal-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
