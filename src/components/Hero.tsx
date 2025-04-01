'use client'

import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-500 rounded-full opacity-10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
          >
            <span className="block">La Recharge</span>
            <span className="block text-blue-400">Réinventée</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 max-w-lg mx-auto text-xl md:text-2xl text-gray-300"
          >
            Des solutions de recharge innovantes pour tous vos besoins en mobilité électrique
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#solutions"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800"></span>
              <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_60%)]"></span>
              <span className="relative">Découvrir nos solutions</span>
              <ChevronRightIcon className="relative ml-2 -mr-1 w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-300 border-2 border-blue-500/50 rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-600/50 to-blue-800/50"></span>
              <span className="relative">Nous contacter</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Découvrir</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
              <motion.div
                className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 