// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import userImage from '../assets/login.png';

const Navbar = ({ menuOpen, toggleMenu, modoOscuro, setModoOscuro, setLoginOpen, setIsSignUp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Maneja el click en iniciar sesión
  const handleLoginClick = () => {
    setLoginOpen(true);
    setIsSignUp(false); // Abre el formulario de login
    setIsMenuOpen(false);
  };

  // Maneja el click en registrarse
  const handleSignUpClick = () => {
    setLoginOpen(true);
    setIsSignUp(true); // Abre el formulario de registro
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-gray-900 dark:text-white">
        <h1 className="text-xl font-bold">Visionary Insights</h1>

        <motion.button
          onClick={() => setModoOscuro(!modoOscuro)}
          className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full shadow mx-4 transition-colors duration-300"
          aria-label="Toggle Dark Mode"
          whileTap={{ rotate: 180 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {modoOscuro ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="w-5 h-5 text-yellow-400" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="w-5 h-5 text-gray-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Inicio</Link>
          <Link to="/tecnologia" className="hover:text-blue-600 dark:hover:text-blue-400">Tecnología</Link>
          <Link to="/equipo" className="hover:text-blue-600 dark:hover:text-blue-400">Equipo</Link>
          <Link to="/contacto" className="hover:text-blue-600 dark:hover:text-blue-400">Contacto</Link>

          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 border-gray-400 rounded-full overflow-hidden flex items-center justify-center hover:bg-blue-600 transition-all"
            >
              <img src={userImage} alt="User Avatar" className="w-full h-full object-cover" />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-20">
                {!isLoggedIn ? (
                  <>
                    <button
                      onClick={handleLoginClick} // Abre el formulario de login
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:text-blue-600 transition-all"
                    >
                      Iniciar sesión
                    </button>
                    <button
                      onClick={handleSignUpClick} // Abre el formulario de registrarse
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:text-blue-600 transition-all"
                    >
                      Registrarse
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/Editar_perfil" className="block px-4 py-2 text-gray-800 hover:text-blue-600 transition-all">
                      Editar perfil
                    </Link>
                    <Link to="/logout" className="block px-4 py-2 text-gray-800 hover:text-blue-600 transition-all">
                      Cerrar sesión
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2 shadow transition-colors duration-300">
          <Link to="/" onClick={toggleMenu} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">Inicio</Link>
          <Link to="/tecnologia" onClick={toggleMenu} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">Tecnología</Link>
          <Link to="/equipo" onClick={toggleMenu} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">Equipo</Link>
          <Link to="/contacto" onClick={toggleMenu} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">Contacto</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
