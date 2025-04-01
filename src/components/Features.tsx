'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  BoltIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ArrowsUpDownIcon,
  CircleStackIcon,
  SignalIcon,
  SunIcon,
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Économies d\'Énergie',
    description: 'Optimisez votre consommation énergétique grâce à des algorithmes intelligents qui adaptent l\'utilisation en fonction de vos habitudes.',
    icon: BoltIcon,
    specs: 'Réduction jusqu\'à 30% • Suivi en temps réel',
  },
  {
    name: 'Confort Intelligent',
    description: 'Automatisez votre environnement pour un confort optimal. Température, éclairage et ventilation s\'ajustent automatiquement.',
    icon: SunIcon,
    specs: 'Zones personnalisables • Programmation intuitive',
  },
  {
    name: 'Sécurité Renforcée',
    description: 'Système de surveillance avancé avec détection de présence, contrôle d\'accès et notifications en temps réel.',
    icon: ShieldCheckIcon,
    specs: 'Surveillance 24/7 • Alertes instantanées',
  },
  {
    name: 'Connectivité Totale',
    description: 'Pilotez tous vos appareils depuis une seule interface. Compatible avec les principaux assistants vocaux.',
    icon: SignalIcon,
    specs: 'Multi-protocoles • Contrôle vocal',
  },
  {
    name: 'Scénarios Personnalisés',
    description: 'Créez des ambiances sur mesure en combinant différentes actions. Du réveil au coucher, tout s\'automatise.',
    icon: AdjustmentsHorizontalIcon,
    specs: 'Scénarios illimités • Déclenchement automatique',
  },
  {
    name: 'Évolutivité Garantie',
    description: 'Système modulaire permettant d\'ajouter de nouvelles fonctionnalités et de s\'adapter à vos besoins futurs.',
    icon: ArrowPathIcon,
    specs: 'Mises à jour régulières • Extensions faciles',
  },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Fonctionnalités</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Une Maison Plus Intelligente
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Découvrez comment notre système de domotique transforme votre maison en un espace intelligent, confortable et économe en énergie.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-10"
        >
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                      <p className="text-sm font-mono text-gray-600">{feature.specs}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 