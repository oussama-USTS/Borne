'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChartBarIcon, LightBulbIcon, CogIcon, ShieldCheckIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

const overviewItems = [
  {
    title: "N°1 en France",
    description: "Leader français des solutions de recharge avec plus de 50 000 bornes installées sur le territoire national.",
    icon: ChartBarIcon,
  },
  {
    title: "Expertise Technique",
    description: "Une gamme complète de solutions de 3.7kW à 350kW, compatible avec tous les véhicules électriques du marché.",
    icon: CogIcon,
  },
  {
    title: "Innovation Continue",
    description: "R&D française, développement de technologies de pointe pour la recharge intelligente et la gestion d'énergie.",
    icon: LightBulbIcon,
  },
  {
    title: "Certification & Sécurité",
    description: "Produits certifiés conformes aux normes européennes, garantissant sécurité et fiabilité maximales.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Support National",
    description: "Réseau de techniciens qualifiés sur toute la France pour installation et maintenance rapide.",
    icon: BuildingOfficeIcon,
  }
]

export default function Overview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Leader Français de la Recharge
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Depuis plus de 15 ans, nous concevons et fabriquons en France des solutions de recharge innovantes pour tous types de véhicules électriques
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {overviewItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div>
                    <div className="absolute h-16 w-16 flex items-center justify-center rounded-lg bg-blue-600 text-white">
                      <item.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <div className="ml-20">
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-3 text-base text-gray-500 leading-relaxed">{item.description}</p>
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