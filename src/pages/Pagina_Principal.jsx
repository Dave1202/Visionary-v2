import React from 'react';
import logo from '../assets/logo.png';

const Pagina_Principal = () => {
  return (
    <section className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-500">

      {/* Banner principal */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left md:max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Bienvenidos a <span className="text-blue-600 dark:text-blue-400">Visionary Insights</span>
            </h1>
            <p className="text-lg mb-6">
              Impulsando el futuro con inteligencia artificial y análisis de datos avanzados.
            </p>
            <a
              href="#info"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition"
            >
              Conócenos
            </a>
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img
              src={logo}
              alt="Logo Visionary Insights"
              className="w-48 sm:w-56 md:w-64 lg:w-72 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Información del proyecto */}
      <div id="info" className="bg-gray-100 dark:bg-gray-800 py-20 transition-colors">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-700 dark:text-blue-400">Visionary Insights</h2>
          <p className="text-lg mb-6">
            Desarrollar un sistema inteligente basado en aprendizaje automático y análisis de datos que mejore la competitividad y el rendimiento de una empresa mediante el procesamiento en tiempo real de grandes volúmenes de información.
          </p>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 inline-block">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">D.A.T.A.</h3>
            <ul className="text-left space-y-1">
              <li><strong>D</strong>esarrollo de</li>
              <li><strong>A</strong>lgoritmos para</li>
              <li><strong>T</strong>oma de decisiones y</li>
              <li><strong>A</strong>utomatización empresarial</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección de beneficios */}
      <div className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Diseño moderno',
              'Arquitectura escalable',
              'Tecnologías modernas'
            ].map((titulo, i) => (
              <div
                key={titulo}
                className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {i === 0 && 'Creamos interfaces visuales atractivas, limpias y centradas en la experiencia del usuario.'}
                  {i === 1 && 'Utilizamos principios sólidos de arquitectura limpia para proyectos sostenibles y mantenibles.'}
                  {i === 2 && 'React, Vite, Tailwind y más. Aplicamos lo último en herramientas para maximizar rendimiento y calidad.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Llamado a la acción final */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
        <p className="text-lg mb-6">Trabajemos juntos en tu próximo proyecto.</p>
        <a
          href="/contacto"
          className="bg-white text-blue-600 hover:text-blue-800 font-semibold py-3 px-6 rounded-lg shadow transition duration-300"
        >
          Hablemos
        </a>
      </div>
    </section>
  );
};

export default Pagina_Principal;
