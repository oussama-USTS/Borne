'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StarIcon } from '@heroicons/react/24/outline'

const highlightProducts = [
  {
    name: "Borne DC-50",
    category: "Bornes commerciales",
    description: "La référence en matière de recharge rapide pour les espaces commerciaux.",
    features: [
      "Puissance de 50kW",
      "Double connecteur CCS/CHAdeMO",
      "Écran tactile 15 pouces",
      "Paiement sans contact",
    ],
    link: "/products/dc-50",
  },
  {
    name: "Home One",
    category: "Bornes résidentielles",
    description: "La solution idéale pour la recharge à domicile, alliant simplicité et performance.",
    features: [
      "Puissance jusqu'à 22kW",
      "Connecteur Type 2",
      "Contrôle via smartphone",
      "Installation facile",
    ],
    link: "/products/home-one",
  },
  {
    name: "Fleet Manager",
    category: "Solutions entreprise",
    description: "Système complet de gestion de flotte pour les entreprises.",
    features: [
      "Gestion multi-sites",
      "Rapports détaillés",
      "Facturation automatique",
      "Support 24/7",
    ],
    link: "/products/fleet-manager",
  },
]

export default function ProductHighlights() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center">
              <StarIcon className="h-8 w-8 text-blue-500 mr-2" />
              <h2 className="text-3xl font-extrabold text-gray-900">
                Produits Phares
              </h2>
            </div>
            <p className="mt-4 text-lg text-gray-500">
              Découvrez nos solutions les plus populaires
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {highlightProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 bg-blue-500 rounded-md flex items-center justify-center">
                          <StarIcon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-blue-500">{product.category}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-500">{product.description}</p>
                    <ul className="mt-4 space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-500">
                          <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <a
                        href={product.link}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      >
                        En savoir plus
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 