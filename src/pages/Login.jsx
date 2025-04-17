// src/pages/Login.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
  visible: { opacity: 1, backdropFilter: 'blur(5px)' },
};

const modalVariants = {
  hidden: { opacity: 0, y: "-30%" },
  visible: { opacity: 1, y: "0" },
  exit: { opacity: 0, y: "-20%" },
};

const Login = ({ onClose, isSignUp, setIsSignUp }) => {
  const navigate = useNavigate();

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp); // Usamos el estado global desde props
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate('/');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative bg-white p-6 rounded-xl shadow-xl w-80 z-10"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {/* Botón de cierre (X) */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            aria-label="Close"
          >
            ×
          </button>

          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
            {isSignUp ? 'Sign Up' : 'Login'}
          </h2>

          {/* Formulario de Login o Sign Up */}
          <form className="space-y-5">
            {isSignUp && (
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                  placeholder="Enter your company name"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Corporate Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                placeholder="Enter your corporate email"
              />
            </div>

            {!isSignUp && (
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                  placeholder="Enter your username"
                />
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                placeholder="Enter your password"
              />
            </div>

            {isSignUp && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 mt-5 bg-blue-600 text-white font-semibold rounded-lg"
            >
              {isSignUp ? 'Create Account' : 'Login'}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={toggleSignUp}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
