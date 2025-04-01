'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PowerIcon, ShieldCheckIcon, BoltIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const accessories = [
  {
    name: "Câbles de Recharge Premium",
    category: "Câbles",
    features: [
      "Type 2 vers Type 2",
      "CCS Combo 2",
      "CHAdeMO",
      "Adaptateur Tesla"
    ],
    specs: [
      "Longueur : 5m ou 7.5m",
      "Puissance max : 22kW-350kW",
      "Certification TÜV",
      "Garantie 5 ans"
    ],
    icon: PowerIcon,
  },
  {
    name: "Supports et Protections",
    category: "Accessoires",
    features: [
      "Support mural",
      "Borne sur pied",
      "Protection intempéries",
      "Système anti-vandalisme"
    ],
    specs: [
      "Acier inoxydable",
      "Installation facile",
      "Verrouillage sécurisé",
      "Design compact"
    ],
    icon: ShieldCheckIcon,
  },
  {
    name: "Adaptateurs Intelligents",
    category: "Connectique",
    features: [
      "Multi-standards",
      "Détection automatique",
      "LED de statut",
      "Compatible V2G"
    ],
    specs: [
      "Jusqu'à 22kW",
      "IP54",
      "Compact et léger",
      "Plug & Charge"
    ],
    icon: BoltIcon,
  },
  {
    name: "Solutions de Gestion",
    category: "Smart Charging",
    features: [
      "Load balancing",
      "Contrôle à distance",
      "Historique de charge",
      "Mise à jour OTA"
    ],
    specs: [
      "App mobile dédiée",
      "API ouverte",
      "Multi-utilisateurs",
      "Rapports détaillés"
    ],
    icon: ArrowPathIcon,
  },
]

export default function Accessories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Câbles et Accessoires
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète d'accessoires haute qualité pour optimiser votre installation de recharge
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {accessories.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600">{item.category}</p>
                        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-900">Caractéristiques :</h4>
                      <ul className="mt-2 space-y-1">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-900">Spécifications :</h4>
                      <ul className="mt-2 space-y-1">
                        {item.specs.map((spec) => (
                          <li key={spec} className="flex items-center text-sm text-gray-600">
                            <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                            </svg>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/accessories"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Découvrir tous nos accessoires
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 