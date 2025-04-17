import React from "react";
import issacphoto from '../assets/issac.png';
import diegophoto from '../assets/diego.png';
import juanphoto from '../assets/juan.jpeg';
import ioryPhoto from '../assets/iory.jpg';

const team = [
  {
    name: "Diego Andres Velasco",
    role: "Frontend Developer",
    photo: diegophoto,
    bio: "Junior en interfaces modernas con React y diseño responsivo.",
    aos: "fade-right",
    side: "left",
  },
  {
    name: "Issac Adrian Pardo",
    role: "Backend Developer",
    photo: issacphoto,
    bio: "Encargado de APIs, seguridad y arquitectura en react.",
    aos: "fade-left",
    side: "right",
  },
  {
    name: "Juan Camilo Ferro",
    role: "UX/UI Designer",
    photo: juanphoto,
    bio: "Diseño de experiencias de usuario eficientes y fluidos.",
    aos: "fade-right",
    side: "left",
  },
  {
    name: "Iory Torres",
    role: "Documentador técnico",
    photo: ioryPhoto,
    bio: "Documentador especializado en proyectos",
    aos: "fade-left",
    side: "right",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-16">
        Nuestro Equipo
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col space-y-12 px-4">
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex ${
              member.side === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              data-aos={member.aos || "fade-up"}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-6 text-center transition-colors duration-500 w-full max-w-2xl"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {member.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
