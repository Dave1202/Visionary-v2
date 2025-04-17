import React from 'react';

const Contacto = () => (
  <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
    <div className="max-w-xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Contáctanos</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        ¿Tienes un proyecto en mente? Escríbenos y nos pondremos en contacto contigo lo antes posible.
      </p>
      <form className="space-y-4 text-left">
        <input
          type="text"
          placeholder="Nombre completo"
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded transition-colors duration-300"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded transition-colors duration-300"
        />
        <textarea
          placeholder="Mensaje"
          rows="5"
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded transition-colors duration-300"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  </section>
);

export default Contacto;
