export default function Services() {
  const services = [
    {
      title: "Regulación Emocional",
      description: "Aprende a identificar, comprender y gestionar tus emociones de manera saludable. Desarrolla habilidades para responder en lugar de reaccionar ante situaciones desafiantes.",
      icon: "🧠"
    },
    {
      title: "Acompañamiento Psicológico",
      description: "Un espacio seguro y confidencial donde puedes explorar tus pensamientos, sentimientos y experiencias. Te acompaño en tu proceso de autoconocimiento y crecimiento personal.",
      icon: "💚"
    },
    {
      title: "Psicoeducación",
      description: "Comprende el funcionamiento de tu mente y emociones. Te brindo herramientas prácticas basadas en evidencia científica para mejorar tu bienestar emocional.",
      icon: "📚"
    }
  ]

  return (
    <section id="servicios" className="py-24 bg-[#FEFAF5]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5D4E37] mb-4">
              Servicios
            </h2>
            <p className="text-xl text-[#8B7355] max-w-2xl mx-auto">
              Ofrezco un acompañamiento integral adaptado a tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[#E8D4BF]"
              >
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#5D4E37] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#6B5D4F] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-[#E8D4BF] to-[#D4C4B0] rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-[#5D4E37] mb-4">
              ¿Listo para comenzar tu proceso?
            </h3>
            <p className="text-[#6B5D4F] mb-8 text-lg">
              El primer paso hacia el bienestar emocional comienza con una conversación
            </p>
            <a 
              href="#contacto" 
              className="inline-block bg-[#8B7355] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#6B5D4F] transition-all transform hover:scale-105 shadow-lg"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
