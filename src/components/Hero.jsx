import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const Hero = () => {
  const textRef = useRef(null)
  const cursorRef = useRef(null)
  const phrases = [
    'Web Developer',
    'Web Designer'
  ]

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    })

    phrases.forEach(phrase => {
      tl.to(textRef.current, {
        duration: 0,
        text: '',
      })
      // Animazione di scrittura carattere per carattere
      .to(textRef.current, {
        duration: 1.5,
        text: {
          value: phrase,
          delimiter: '',
        },
        ease: 'none',
        onUpdate: function() {
          // Spostiamo il cursore alla fine del testo corrente
          if (cursorRef.current) {
            const textWidth = textRef.current.getBoundingClientRect().width
            cursorRef.current.style.transform = `translateX(${textWidth}px)`
          }
        }
      })
      .to({}, { duration: 1.5 }) // Pausa
      // Animazione di cancellazione carattere per carattere
      .to(textRef.current, {
        duration: 0.8,
        text: {
          value: '',
          delimiter: '',
        },
        ease: 'none',
        onUpdate: function() {
          // Aggiorniamo la posizione del cursore durante la cancellazione
          if (cursorRef.current) {
            const textWidth = textRef.current.getBoundingClientRect().width
            cursorRef.current.style.transform = `translateX(${textWidth}px)`
          }
        }
      })
    })

    // Animazione del lampeggio del cursore
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power2.inOut"
    })

    return () => {
      tl.kill()
      gsap.killTweensOf(cursorRef.current)
    }
  }, [])

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      const offset = 80 // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = portfolioSection.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-hero-accent animate-gradient"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Testo a sinistra */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <motion.div className="inline-block">
              <span className="px-4 py-1 bg-primary/10 rounded-full text-primary text-sm mb-4 border border-primary/20">
                Disponibile per nuovi progetti
              </span>
            </motion.div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-teal-400 mb-4 block"
            >
              Hi there! I'm
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gabriele Fasano
              </span>
            </h1>
            <div className="h-12">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-3xl text-gray-400 relative inline-flex items-center"
              >
                <strong ref={textRef} className="text-white"></strong>
                <span 
                  ref={cursorRef}
                  className="absolute w-[3px] h-8 bg-primary"
                  style={{ left: 0 }}
                ></span>
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button
                onClick={scrollToPortfolio}
                className="cta-button"
              >
                Scopri i miei progetti
              </button>
              <a 
                href="#contact"
                className="px-8 py-3 rounded-full border-2 border-teal-500/30 text-teal-400 
                hover:bg-teal-500/10 transition-all duration-300 text-center"
              >
                Contattami
              </a>
            </motion.div>
          </motion.div>

          {/* Illustrazione a destra */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full hidden md:block"
          >
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="Web Developer Illustration"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
