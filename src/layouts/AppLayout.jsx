import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ChatWidget from '../components/ChatWidget';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from '../pages/Login'; // ← Importa Login

const AppLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false); // ← NUEVO
  const [isSignUp, setIsSignUp] = useState(false); // ← NUEVO


  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', modoOscuro);
  }, [modoOscuro]);

  return (
    <div className="relative">
      <Navbar
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        modoOscuro={modoOscuro}
        setModoOscuro={setModoOscuro}
        setLoginOpen={setLoginOpen} // ← Para abrir desde el avatar
        setIsSignUp={setIsSignUp}
      />

      {/* Modo difuminado cuando el modal está abierto */}
      <main
        className={`transition-all duration-300 pt-0 ${
          loginOpen ? 'blur-sm pointer-events-none select-none' : ''
        }`}
      >
        <Outlet />
      </main>

      {/* Login modal (cuando esté activo) */}
      {loginOpen && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <Login onClose={() => setLoginOpen(false)} isSignUp={isSignUp} setIsSignUp={setIsSignUp} /> {/* ← NUEVO */}
      </div>
        )}

      <ChatWidget />
    </div>
  );
};

export default AppLayout;
