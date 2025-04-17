import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import reactLogo from '../assets/React.png';
import nodeLogo from '../assets/node.png';
import tailwindLogo from '../assets/Tailwind.png';

const Tecnologias = () => (
  <section className="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-500">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Tecnologías que Utilizamos</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-12">
        Estas son algunas de las tecnologías que usamos para crear soluciones innovadoras y eficientes.
      </p>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {[
          {
            name: 'React',
            image: reactLogo,
            desc: 'Biblioteca JavaScript para construir interfaces de usuario.',
          },
          {
            name: 'Node.js',
            image: nodeLogo,
            desc: 'Entorno de ejecución para JavaScript del lado del servidor.',
          },
          {
            name: 'Tailwind CSS',
            image: tailwindLogo,
            desc: 'Framework de CSS para diseño rápido y personalizable.',
          }
        ].map((tech, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition-colors duration-500">
              <img
                src={tech.image}
                alt={tech.name}
                className="h-40 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{tech.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Tecnologias;
