'use client'

import { useState } from 'react'

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  const experiences = [
    {
      company: "Wawamama",
      role: "Facilitadora de Talleres Psicoeducativos",
      description: "Diseñé e impartí talleres virtuales de psicoeducación emocional, alcanzando a cientos de familias y promoviendo el bienestar integral.",
      icon: "💻",
      color: "from-[#E8D4BF] to-[#D4C4B0]"
    },
    {
      company: "DEMUNA Chorrillos",
      role: "Especialista en Casos de Vida Pública",
      description: "Atendí casos de vulneración de derechos, brindando acompañamiento psicológico y asesoría especializada a familias en situación de riesgo.",
      icon: "⚖️",
      color: "from-[#D4C4B0] to-[#C9B89A]"
    },
    {
      company: "CIAM",
      role: "Psicóloga en Centro del Adulto Mayor",
      description: "Proporcioné apoyo psicológico a adultos mayores, renovando su perspectiva de vida y promoviendo una vejez activa y feliz.",
      icon: "❤️",
      color: "from-[#C9B89A] to-[#B8A88A]"
    }
  ]

  return (
    <section id="experiencia" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5D4E37] mb-4 animate-fade-in">
              Experiencia Profesional
            </h2>
            <p className="text-xl text-[#8B7355] max-w-2xl mx-auto">
              Más de 3 años transformando vidas a través de la psicología
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative group cursor-pointer transition-all duration-500 transform hover:-translate-y-4 ${
                  activeIndex === index ? 'scale-105' : 'scale-100'
                }`}
              >
                <div className={`bg-gradient-to-br ${exp.color} rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all`}>
                  <div className="text-6xl mb-6 animate-bounce-slow">{exp.icon}</div>
                  <h3 className="text-2xl font-bold text-[#5D4E37] mb-3">
                    {exp.company}
                  </h3>
                  <p className="text-[#8B7355] font-semibold mb-4">
                    {exp.role}
                  </p>
                  <p className="text-[#6B5D4F] leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
