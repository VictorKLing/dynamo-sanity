import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Code2, Zap, Shield, Users } from 'lucide-react';
import {useEffect, useState} from 'react'
import {sanity} from '../lib/sanityClient'

type HomeData = {
  heroTitle?: string
  heroSubtitle?: string
  heroTagline?: string
}

const Hero = () => {
  const features = [
    { icon: Code2, text: 'Desenvolvimento Web' },
    { icon: Zap, text: 'Alta Performance' },
    { icon: Shield, text: 'Segurança Avançada' },
    { icon: Users, text: 'Foco no Usuário' },
  ];

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const [data, setData] = useState<HomeData | null>(null)

  useEffect(() => {
    const query = `*[_type == "hero"][0]{ heroTitle, heroSubtitle, heroTagline  }`
    sanity
      .fetch<HomeData>(query)
      .then((res) => setData(res))
      .catch(() => setData(null))
  }, [])


  return (
    <div className="relative min-h-screen overflow-hidden bg-primary-dark">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-dark/90" />

        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(74, 144, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(74, 144, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated light beams */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute w-[2px] h-[500px] bg-gradient-to-b from-primary-light/30 via-primary-light/10 to-transparent"
            style={{
              left: `${20 * (i + 1)}%`,
              top: '-250px',
              transform: `rotate(${45 + i * 15}deg)`,
              filter: 'blur(3px)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary-light/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-20, 20, -20],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing orbs with blur effect */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              filter: 'blur(80px)',
              background: `radial-gradient(circle at center, rgba(74, 144, 255, ${0.15 - i * 0.03}) 0%, transparent 70%)`,
            }}
            animate={{
              x: [
                `${Math.random() * 40}%`,
                `${Math.random() * 40 + 20}%`,
                `${Math.random() * 40}%`,
              ],
              y: [
                `${Math.random() * 40}%`,
                `${Math.random() * 40 + 20}%`,
                `${Math.random() * 40}%`,
              ],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Overlay gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 via-transparent to-primary-dark/50" />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="text-center md:text-left max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-light/10 border border-primary-light/20 backdrop-blur-sm"
          >
            <span className="animate-pulse mr-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary-light"></span>
            <span className="text-primary-light text-sm sm:text-base">{data?.heroTagline ?? "Frase impacto padrão"} </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 sm:mb-8"
          >
            {data?.heroTitle ?? "Título padrão"}  
            <motion.span 
              className="block mt-2 bg-gradient-to-r from-primary-light to-blue-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              {data?.heroSubtitle ?? "Subtítulo padrão"}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl"
          >
            {data?.heroTagline ?? "Transformando ideias em realidade digital"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg text-white overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-blue-600 transition-all duration-300 group-hover:scale-105" />
              <span className="relative flex items-center">
                Iniciar Projeto
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg text-primary-light bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Ver Portfólio
            </motion.a>
          </motion.div>

          <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <Icon className="h-5 w-5 text-primary-light" />
                  <span>{feature.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-400 mb-2"></span>
          <ChevronDown className="h-6 w-6 text-primary-light" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;