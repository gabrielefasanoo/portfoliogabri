import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaUser, FaCode, FaFolder, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Determina la sezione attiva
      const sections = ['home', 'about', 'skills', 'portfolio', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome className="mr-2" /> },
    { id: 'about', label: 'About', icon: <FaUser className="mr-2" /> },
    { id: 'skills', label: 'Skills', icon: <FaCode className="mr-2" /> },
    { id: 'portfolio', label: 'Portfolio', icon: <FaFolder className="mr-2" /> },
    { id: 'contact', label: 'Contatti', icon: <FaEnvelope className="mr-2" /> },
  ]

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
          >
            GF
          </span>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${
                  activeSection === item.id
                    ? 'text-teal-400'
                    : 'text-gray-300 hover:text-teal-400'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Call to action button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-4 py-2 rounded-md bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Contattami
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
