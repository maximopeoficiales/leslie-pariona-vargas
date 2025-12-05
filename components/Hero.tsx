'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullName = 'Leslie Pariona Vargas'
  
  useEffect(() => {
    let currentIndex = 0
    let isDeleting = false
    
    const animateText = () => {
      if (!isDeleting && currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex))
        currentIndex++
      } else if (!isDeleting && currentIndex > fullName.length) {
        setTimeout(() => {
          isDeleting = true
        }, 2000)
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--
        setDisplayText(fullName.slice(0, currentIndex))
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false
      }
    }
    
    const interval = setInterval(animateText, isDeleting ? 50 : 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5E6D3] via-[#E8D4BF] to-[#D4C4B0] pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9B89A] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E8D4BF] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6 animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-bold text-[#5D4E37] leading-tight min-h-[120px]">
              {displayText}
              <span className="animate-blink">|</span>
            </h1>
            <p className="text-2xl text-[#8B7355] font-medium animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Psicóloga Especialista en Psicoeducación Emocional
            </p>
            <p className="text-lg text-[#6B5D4F] leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
              Con años de experiencia acompañando a jóvenes y adultos en su proceso de crecimiento emocional. 
              Mi enfoque combina técnicas de psicoeducación con un espacio seguro y confortable donde puedas 
              explorar tus emociones y desarrollar herramientas para una vida más plena.
            </p>
            <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>
              <a 
                href="#contacto" 
                className="bg-[#8B7355] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6B5D4F] transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Agendar Cita
              </a>
              <a 
                href="#servicios" 
                className="border-2 border-[#8B7355] text-[#8B7355] px-8 py-4 rounded-full font-semibold hover:bg-[#8B7355] hover:text-white transition-all"
              >
                Conocer Más
              </a>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="w-full h-[500px] bg-gradient-to-br from-[#D4C4B0] to-[#C9B89A] rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
              <div className="text-center text-[#5D4E37] p-8">
                <svg className="w-32 h-32 mx-auto mb-4 animate-float" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                <p className="text-sm opacity-75">Imagen profesional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#FFFFFF" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}
