"use client";
import Particulas from "./components/Particulas";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Particulas />
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
          Disponible para trabajar
        </p>
        <h1 className="text-5xl font-bold mb-4">
          Hola, soy <span className="text-blue-400">Benjamín Tagle</span>
        </h1>
        <h2 className="text-2xl text-gray-400 font-medium mb-6">
          Ingeniero en Informática · Desarrollador Fullstack
        </h2>
        <p className="text-gray-400 max-w-xl text-lg mb-10">
          Construyo aplicaciones web modernas con Next.js, React y Tailwind.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#proyectos" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Ver proyectos
          </a>
          <a href="#contacto" className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
            Contacto
          </a>
          <a href="/CV.pdf" download className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Descargar CV
          </a>
        </div>
      </section>


      {/* Skills */}
      <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Stack tecnológico</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "Node.js", "Git", "SQL"].map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 border border-gray-800 rounded-lg py-4 px-6 text-center text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-colors">
            <h3 className="text-xl font-bold mb-2">Portafolio personal</h3>
            <p className="text-gray-400 mb-4">
              Sitio web personal construido con Next.js y Tailwind CSS.
            </p>
            <div className="flex gap-2 mb-6">
              <span className="bg-gray-800 text-blue-400 text-xs px-3 py-1 rounded-full">Next.js</span>
              <span className="bg-gray-800 text-blue-400 text-xs px-3 py-1 rounded-full">Tailwind</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Benja4200/portafolio" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                GitHub →
              </a>
              <a href="https://portafolio-xewg.vercel.app/" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Demo →
              </a>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-colors">
            <h3 className="text-xl font-bold mb-2">Dashboard de Monitoreo Financiero & Arbitraje</h3>
            <p className="text-gray-400 mb-4">
              Aplicación web fullstack que consume APIs públicas en tiempo real (CoinGecko y Coinbase) para monitorear precios de criptoactivos. Incluye gráficos históricos interactivos con Recharts y calculadora de arbitraje entre exchanges.
            </p>
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className="bg-gray-800 text-blue-400 text-xs px-3 py-1 rounded-full">Next.js</span>
              <span className="bg-gray-800 text-blue-400 text-xs px-3 py-1 rounded-full">React</span>
              <span className="bg-gray-800 text-blue-400 text-xs px-3 py-1 rounded-full">TypeScript</span>
              <span className="bg-gray-800 text-blue-400 text-xs px-3 py-1 rounded-full">Tailwind</span>
              <span className="bg-gray-800 text-blue-400 text-xs px-3 py-1 rounded-full">Recharts</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Benja4200/dashboard-financiero" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                GitHub →
              </a>
              <a href="https://dashboard-financiero-7bwi.vercel.app/" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Demo →
              </a>
            </div>
          </div>

        </div>
      </section>

        {/* Contacto */}
      <section id="contacto" className="py-24 px-6 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">¿Hablamos?</h2>
        <p className="text-gray-400 mb-10">
          Estoy buscando mi primera oportunidad laboral. Si tienes un proyecto
          o una vacante, escríbeme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:benjamin.tagle311@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">benjamin.tagle311@gmail.com</a>
          <a href="https://linkedin.com/in/benjamin-tagle-4130291a3" className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-lg font-medium transition-colors">LinkedIn →</a>
          <a href="https://github.com/Benja4200" className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-lg font-medium transition-colors">GitHub →</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm py-8">
        Construido con Next.js y Tailwind · Benjamín {new Date().getFullYear()}
      </footer>
    
    </main>
  )
}