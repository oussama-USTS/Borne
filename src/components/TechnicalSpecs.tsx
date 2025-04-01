'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BoltIcon, CpuChipIcon, WrenchScrewdriverIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

type ColorVariant = 'blue' | 'purple' | 'green' | 'red';

interface TechnicalFeature {
  title: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  icon: React.ComponentType<any>;
  color: ColorVariant;
}

const technicalFeatures: TechnicalFeature[] = [
  {
    title: "Puissance de Charge",
    description: "Des solutions adaptées à tous les besoins, de la charge lente à la charge ultra-rapide",
    specs: [
      { label: "AC Monophasé", value: "jusqu'à 7.4 kW" },
      { label: "AC Triphasé", value: "jusqu'à 22 kW" },
      { label: "DC Rapide", value: "jusqu'à 50 kW" },
      { label: "DC Ultra-rapide", value: "jusqu'à 350 kW" }
    ],
    icon: BoltIcon,
    color: "blue"
  },
  {
    title: "Connectivité",
    description: "Une gamme complète de protocoles et standards de communication",
    specs: [
      { label: "Protocoles", value: "OCPP 1.6J, 2.0" },
      { label: "Communication", value: "4G, Wifi, Ethernet" },
      { label: "Authentification", value: "RFID, QR Code, NFC" },
      { label: "Backend", value: "Cloud ou Local" }
    ],
    icon: CpuChipIcon,
    color: "purple"
  },
  {
    title: "Standards Supportés",
    description: "Compatibilité maximale avec tous les véhicules électriques",
    specs: [
      { label: "AC", value: "Type 2, Type 1" },
      { label: "DC", value: "CCS2, CHAdeMO" },
      { label: "Protocoles", value: "ISO 15118" },
      { label: "V2G Ready", value: "Bidirectionnel" }
    ],
    icon: WrenchScrewdriverIcon,
    color: "green"
  },
  {
    title: "Certifications",
    description: "Conformité aux normes internationales de sécurité et de qualité",
    specs: [
      { label: "Sécurité", value: "IEC 61851-1" },
      { label: "EMC", value: "IEC 61000-6-2/3" },
      { label: "Protection", value: "IP54, IK10" },
      { label: "CE", value: "2014/35/EU" }
    ],
    icon: ShieldCheckIcon,
    color: "red"
  }
]

const colorVariants: Record<ColorVariant, string> = {
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  green: "from-green-500 to-green-600",
  red: "from-red-500 to-red-600"
}

export default function TechnicalSpecs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-white">
            Spécifications Techniques
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Une technologie de pointe au service de la recharge électrique
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {technicalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gray-800 rounded-lg p-6">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 rounded-lg p-3 bg-gradient-to-br ${colorVariants[feature.color]}`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {feature.specs.map((spec, specIndex) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + specIndex * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm text-gray-400">{spec.label}</span>
                      </div>
                      <span className="text-sm font-medium text-white">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full bg-gradient-to-r ${colorVariants[feature.color]}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="/technical-specs"
            className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-200 group"
          >
            Documentation technique complète
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
      </div>
    </section>
  )
} 