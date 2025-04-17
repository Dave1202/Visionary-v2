import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Servicios = () => (
  <section className="bg-gray-50 py-20">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
      <p className="text-gray-600 mb-12">
        Conoce las soluciones que ofrecemos para ayudarte a crecer digitalmente.
      </p>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {[1, 2, 3, 4].map(num => (
          <SwiperSlide key={num}>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src={`https://via.placeholder.com/300x200?text=Servicio+${num}`}
                alt={`Servicio ${num}`}
                className="rounded mb-4 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Servicio {num}</h3>
              <p className="text-gray-600">
                Descripción detallada del servicio {num}, enfocado en resultados y experiencia del usuario.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Servicios;
