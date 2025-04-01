'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  BoltIcon,
  WrenchIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const installationSteps = [
  {
    id: 1,
    title: 'Préparation',
    description: 'Assurez-vous que votre installation électrique est compatible',
    icon: WrenchIcon,
    details: [
      'Vérifiez que votre tableau électrique est aux normes',
      'Un différentiel 30mA Type A ou B est nécessaire',
      'La puissance disponible doit être suffisante (7.4kW minimum recommandé)',
    ],
    statusLights: {
      green: 'Installation électrique conforme',
      red: 'Installation non conforme - Contactez un électricien',
      orange: 'Vérification en cours',
    }
  },
  {
    id: 2,
    title: 'Installation Murale',
    description: 'Fixation sécurisée de votre borne',
    icon: BoltIcon,
    details: [
      'Hauteur recommandée : 1.20m du sol',
      'Utilisez les chevilles et vis fournies',
      'Vérifiez la solidité du support',
      'Assurez-vous que la borne est de niveau',
    ],
    statusLights: {
      green: 'Fixation correcte',
      red: 'Fixation instable',
      orange: 'Installation en cours',
    }
  },
  {
    id: 3,
    title: 'Raccordement Électrique',
    description: 'Connexion sécurisée au réseau électrique',
    icon: LightBulbIcon,
    details: [
      'Coupez l\'alimentation électrique',
      'Connectez les câbles selon le code couleur',
      'Vérifiez le serrage des connexions',
      'Testez l\'isolation électrique',
    ],
    statusLights: {
      green: 'Raccordement correct',
      red: 'Erreur de câblage',
      orange: 'Vérification nécessaire',
    }
  },
  {
    id: 4,
    title: 'Configuration',
    description: 'Paramétrage et test de votre borne',
    icon: ShieldCheckIcon,
    details: [
      'Activez le Wi-Fi de la borne',
      'Connectez-vous à l\'application',
      'Configurez vos préférences de charge',
      'Effectuez un test complet',
    ],
    statusLights: {
      green: 'Configuration réussie',
      red: 'Erreur de configuration',
      orange: 'Configuration en cours',
    }
  },
]

export default function InstallationPage() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Guide d'Installation
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Suivez ces étapes pour installer votre borne de recharge en toute sécurité
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {installationSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gray-800 rounded-lg p-6 ${
                  activeStep === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{step.description}</p>
                    
                    {/* Status Lights */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-green-400">{step.statusLights.green}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="text-sm text-red-400">{step.statusLights.red}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                        <span className="text-sm text-orange-400">{step.statusLights.orange}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 + detailIndex * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <ArrowRightIcon className="w-5 h-5 text-blue-400 mt-0.5" />
                          <span className="text-sm text-gray-300">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Besoin d'aide ?</h2>
          <p className="text-gray-400 mb-8">
            Notre équipe de support technique est disponible pour vous accompagner
            dans l'installation de votre borne de recharge.
          </p>
          <div className="inline-flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contacter le support
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
              Voir les tutoriels
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 