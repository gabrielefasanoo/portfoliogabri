import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

const AboutMe = () => {
  return (
    <div id="about" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Image */}
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3"
              alt="Developer Setup"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            
            {/* Personal Info */}
            <div className="space-y-2 text-gray-300">
              <p><span className="font-bold">Nome:</span> Gabriele Fasano</p>
              <p><span className="font-bold">Data di nascita:</span> 13/10/2003</p>
              <p><span className="font-bold">Luogo:</span> Bari, Italia</p>
              <p><span className="font-bold">Email:</span> gabrielefasano13@gmail.com</p>
              <p><span className="font-bold">Telefono:</span> +39 391 388 2209</p>
              <p>
                <span className="font-bold">GitHub:</span>
                <a href="https://github.com/GabrieleFasano" className="text-blue-400 hover:text-blue-300 ml-2">
                  github.com/GabrieleFasano
                </a>
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg">
              Mi occupo di sviluppo web con particolare attenzione al frontend. La mia passione per il codice e il design mi permette di creare esperienze web uniche e coinvolgenti. Sono sempre alla ricerca di nuove sfide e opportunità per crescere professionalmente.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 pt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
