'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BoltIcon, HomeIcon, WrenchIcon } from '@heroicons/react/24/outline'

const newProducts = [
  {
    name: "Borne DC Ultra-Rapide",
    category: "Recharge Rapide",
    description: "Solution de recharge ultra-rapide pour stations-service et aires d'autoroute.",
    specs: [
      "Puissance jusqu'à 350 kW",
      "Double connecteur CCS/CHAdeMO",
      "Temps de charge : 15-30 min",
      "Écran tactile 15 pouces",
      "Paiement sans contact",
      "Compatible tous VE"
    ],
    gradient: "from-blue-600 to-blue-800",
    icon: BoltIcon,
    link: "/products/ultra-fast-pro",
  },
  {
    name: "Smart Home Pro",
    category: "Recharge Résidentielle",
    description: "Borne intelligente pour maison individuelle avec gestion de la charge.",
    specs: [
      "Puissance 3.7 à 22 kW",
      "Connecteur Type 2",
      "Wifi & Bluetooth",
      "Équilibrage dynamique",
      "Programmation horaire",
      "Installation simple"
    ],
    gradient: "from-green-600 to-green-800",
    icon: HomeIcon,
    link: "/products/smart-home",
  },
  {
    name: "Pack Pro Entreprise",
    category: "Solutions Professionnelles",
    description: "Solution complète pour flottes d'entreprise et parkings professionnels.",
    specs: [
      "Bornes 22 kW évolutives",
      "Gestion de charge intelligente",
      "Supervision à distance",
      "Facturation automatique",
      "Maintenance prédictive",
      "Support dédié 24/7"
    ],
    gradient: "from-purple-600 to-purple-800",
    icon: WrenchIcon,
    link: "/products/fleet-pro",
  },
]

export default function NewProducts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-extrabold text-white"
            >
              Solutions de Recharge
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Des solutions adaptées à tous vos besoins, de la recharge résidentielle aux stations ultra-rapides
            </motion.p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {newProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    translateZ: 20,
                  }}
                  className="group relative bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform perspective-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/0 z-10"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-75`}></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_rgba(255,255,255,0.1),_rgba(0,0,0,0))]"></div>
                  
                  <div className="relative z-20 p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-300">
                          {product.category}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                          {product.name}
                        </h3>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all">
                        <product.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <p className="mt-4 text-gray-300 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Caractéristiques :</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {product.specs.map((spec) => (
                          <li key={spec} className="flex items-start text-sm text-gray-300">
                            <svg className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 transform translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <a
                        href={product.link}
                        className="group/button inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                      >
                        Découvrir
                        <svg 
                          className="ml-2 h-5 w-5 transform transition-transform duration-200 group-hover/button:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Animated gradient border */}
                  <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <a
              href="/products"
              className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 group"
            >
              Voir tous nos produits
              <svg 
                className="ml-2 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 