'use client'

import { Fragment, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Popover, Transition, Menu } from '@headlessui/react'
import {
  ChevronDownIcon,
  GlobeAltIcon,
  Bars3Icon,
  XMarkIcon,
  BoltIcon,
  WrenchIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  PhoneIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  {
    name: 'Bornes Résidentielles',
    description: 'Solutions de recharge pour particuliers',
    href: '/products/residential',
    icon: HomeIcon,
  },
  {
    name: 'Smart Home',
    description: 'Gestion intelligente de l\'énergie',
    href: '/products/smart-home',
    icon: BoltIcon,
    featured: true,
    special: true,
  },
  {
    name: 'Accessoires',
    description: 'Câbles et adaptateurs',
    href: '/products/accessories',
    icon: WrenchIcon,
  },
]

const applications = [
  { name: 'Maison Individuelle', href: '/applications/residential' },
  { name: 'Copropriétés', href: '/applications/buildings' },
  { name: 'Entreprises', href: '/applications/business' },
  { name: 'Stations-Service', href: '/applications/stations' },
  { name: 'Parkings Publics', href: '/applications/public' },
]

const technical = [
  { name: 'Spécifications', href: '/technical/specs' },
  { name: 'Installation', href: '/installation' },
  { name: 'Documentation', href: '/technical/docs' },
  { name: 'Certifications', href: '/technical/certifications' },
]

const languages = [
  { name: 'Français', code: 'fr', flag: '🇫🇷' },
  { name: 'English', code: 'en', flag: '🇬🇧' },
  { name: 'Deutsch', code: 'de', flag: '🇩🇪' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <a href="/" className="flex items-center">
              <div className="relative group">
                {/* Animated background glow effect */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.25, 0.5, 0.25],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative flex items-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-2">
                  {/* Logo container with rotating gradient */}
                  <motion.div
                    className="w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden relative"
                    style={{
                      background: "linear-gradient(45deg, #1d4ed8, #3b82f6, #1d4ed8)",
                      backgroundSize: "200% 200%"
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {/* Animated circles in background */}
                    <motion.div
                      className="absolute w-full h-full"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 bg-blue-400 rounded-full"
                          style={{
                            top: `${30 + (i * 20)}%`,
                            left: `${30 + (i * 20)}%`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </motion.div>
                    {/* Main logo text */}
                    <motion.span 
                      className="text-2xl font-black text-white relative z-10"
                      animate={{
                        textShadow: [
                          "0 0 8px rgba(59, 130, 246, 0.5)",
                          "0 0 16px rgba(59, 130, 246, 0.8)",
                          "0 0 8px rgba(59, 130, 246, 0.5)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      IV
                    </motion.span>
                  </motion.div>
                  {/* Brand text with enhanced animations */}
                  <div className="ml-3">
                    <motion.div className="relative flex items-center space-x-2">
                      <motion.span 
                        className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        INEEZ
                      </motion.span>
                      <motion.span
                        className="w-0.5 h-6 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400"
                        animate={{
                          scaleY: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <motion.span 
                        className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                        animate={{
                          backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        VALEO
                      </motion.span>
                      {/* Animated underline */}
                      <motion.div 
                        className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"
                        animate={{
                          scaleX: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="group inline-flex items-center text-gray-300 hover:text-white">
                    <span>Produits</span>
                    <ChevronDownIcon className={`ml-2 h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item, index) => (
                            <motion.a
                              key={item.name}
                              href={item.href}
                              initial={item.special ? { scale: 1.05 } : { scale: 1 }}
                              whileHover={{ 
                                scale: item.special ? 1.1 : 1.02,
                                y: item.special ? -8 : 0,
                                zIndex: item.special ? 1 : 0
                              }}
                              className={`group -m-3 flex items-center rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-800 relative ${
                                item.special ? 'my-6 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-blue-900/50 transform scale-105 border-l-4 border-blue-500' : ''
                              }`}
                            >
                              {item.special && (
                                <motion.div
                                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"
                                  animate={{
                                    opacity: [0.5, 0.8, 0.5],
                                    scale: [1, 1.05, 1],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />
                              )}
                              <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                                item.special 
                                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 shadow-lg shadow-blue-500/50'
                                  : 'bg-blue-600 group-hover:bg-blue-700'
                              }`}>
                                <item.icon className={`${item.special ? 'h-8 w-8' : 'h-6 w-6'} text-white`} />
                              </div>
                              <div className="ml-4">
                                <p className={`text-base font-medium ${
                                  item.special 
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 text-lg'
                                    : 'text-white'
                                }`}>{item.name}</p>
                                <p className={`mt-1 text-sm ${
                                  item.special ? 'text-gray-300' : 'text-gray-400'
                                }`}>{item.description}</p>
                                {item.special && (
                                  <motion.div
                                    className="mt-2 inline-flex items-center text-sm font-medium text-blue-400"
                                    animate={{
                                      x: [0, 5, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    Découvrir nos solutions
                                    <ChevronDownIcon className="ml-1 h-4 w-4 rotate-[-90deg]" />
                                  </motion.div>
                                )}
                              </div>
                              {item.special && (
                                <motion.div
                                  className="absolute -inset-1 rounded-lg"
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: [0, 0.15, 0],
                                    scale: [0.95, 1.05, 0.95],
                                  }}
                                  transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                  style={{
                                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5), transparent 70%)',
                                    filter: 'blur(8px)',
                                  }}
                                />
                              )}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* Applications Dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="group inline-flex items-center text-gray-300 hover:text-white">
                    <span>Applications</span>
                    <ChevronDownIcon className={`ml-2 h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative bg-gray-900 px-3 py-3">
                          {applications.map((item) => (
                            <motion.a
                              key={item.name}
                              href={item.href}
                              whileHover={{ scale: 1.02 }}
                              className="block rounded-lg px-3 py-2 text-base text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                              {item.name}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* Technical Dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="group inline-flex items-center text-gray-300 hover:text-white">
                    <span>Technique</span>
                    <ChevronDownIcon className={`ml-2 h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative bg-gray-900 px-3 py-3">
                          {technical.map((item) => (
                            <motion.a
                              key={item.name}
                              href={item.href}
                              whileHover={{ scale: 1.02 }}
                              className="block rounded-lg px-3 py-2 text-base text-gray-300 hover:bg-gray-800 hover:text-white"
                            >
                              {item.name}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="/about" className="text-gray-300 hover:text-white">
              À propos
            </a>

            <a href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </a>

            {/* Language Selector */}
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex items-center text-gray-300 hover:text-white">
                <GlobeAltIcon className="h-5 w-5" />
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-lg bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {languages.map((language) => (
                      <Menu.Item key={language.code}>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-gray-800 text-white' : 'text-gray-300'
                            } group flex w-full items-center px-4 py-2 text-sm`}
                          >
                            <span className="mr-2">{language.flag}</span>
                            {language.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Mobile menu button */}
          <Popover className="md:hidden">
            {({ open }) => (
              <>
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden">
                    <div className="rounded-lg bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="px-5 pt-5 pb-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                              <BoltIcon className="h-5 w-5 text-white" />
                            </div>
                            <span className="ml-2 text-lg font-bold text-white">EV Charge</span>
                          </div>
                          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none">
                            <XMarkIcon className="h-6 w-6" />
                          </Popover.Button>
                        </div>
                        <div className="mt-6">
                          <nav className="grid gap-y-4">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center rounded-lg p-3 hover:bg-gray-800"
                              >
                                <item.icon className="h-6 w-6 text-blue-500" />
                                <span className="ml-3 text-base font-medium text-white">{item.name}</span>
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>
                      <div className="px-5 py-6">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                          <a href="/about" className="text-base font-medium text-gray-300 hover:text-white">
                            À propos
                          </a>
                          <a href="/contact" className="text-base font-medium text-gray-300 hover:text-white">
                            Contact
                          </a>
                          {applications.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="text-base font-medium text-gray-300 hover:text-white"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="mt-6">
                          <div className="flex items-center justify-center gap-3">
                            {languages.map((language) => (
                              <button
                                key={language.code}
                                className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                              >
                                <span className="mr-2">{language.flag}</span>
                                {language.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </nav>
    </motion.header>
  )
} 