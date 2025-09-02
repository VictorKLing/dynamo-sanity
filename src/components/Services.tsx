import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Monitor,
  Search,
  Smartphone,
  ShoppingBag,
  Shield,
  Zap,
  MessageSquare,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Desenvolvimento Web',
    description: 'Sites profissionais, sistemas web e aplicações personalizadas.',
  },
  {
    icon: Monitor,
    title: 'Design Responsivo',
    description: 'Interfaces adaptativas que funcionam em qualquer dispositivo.',
  },
  {
    icon: Search,
    title: 'Otimização SEO',
    description: 'Melhore seu posicionamento nos mecanismos de busca.',
  },
  {
    icon: Smartphone,
    title: 'Apps Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Lojas virtuais completas com gestão integrada.',
  },
  {
    icon: Shield,
    title: 'Segurança Digital',
    description: 'Proteção de dados e conformidade com LGPD.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Otimização de velocidade e experiência do usuário.',
  },
  {
    icon: MessageSquare,
    title: 'Suporte Personalizado',
    description: 'Oferecemos assistência sob medida para atender às suas necessidades, sempre que você precisar.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="services" className="relative py-32 bg-primary-dark overflow-hidden">
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
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
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

        {/* Glowing orbs */}
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
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-20"
          >
            Soluções completas para sua presença digital, combinando tecnologia
            de ponta com design inovador
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-primary-light/20 flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary-light" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;