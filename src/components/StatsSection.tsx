import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';
import { Trophy, Users, Clock, Award } from 'lucide-react';

const stats = [
  { 
    icon: Trophy,
    from: 0, 
    to: 150, 
    label: 'Projetos Entregues',
    description: 'Soluções digitais de sucesso'
  },
  { 
    icon: Users,
    from: 0, 
    to: 98, 
    label: 'Clientes Satisfeitos',
    description: 'Avaliações 5 estrelas'
  },
  { 
    icon: Clock,
    from: 0, 
    to: 12, 
    label: 'Anos de Experiência',
    description: 'No mercado digital'
  },
  { 
    icon: Award,
    from: 0, 
    to: 24, 
    label: 'Prêmios Recebidos',
    description: 'Reconhecimento do mercado'
  },
];

const StatsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative py-24 bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary-light font-medium text-sm tracking-wider uppercase"
          >
            Nossa Trajetória
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-4xl font-bold text-gray-900"
          >
            Números que Contam Nossa História
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 bg-white border border-gray-100 rounded-2xl transition-all duration-300 hover:shadow-lg shadow-sm">
                  {/* Solid gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-light to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center justify-center mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 rounded-2xl bg-primary-light/10 flex items-center justify-center"
                      >
                        <Icon className="w-8 h-8 text-primary-light" />
                      </motion.div>
                    </div>

                    <div className="text-center">
                      <div className="mb-2 text-5xl font-bold text-[#4A90FF]">
                        <AnimatedCounter
                          from={stat.from}
                          to={stat.to}
                          duration={2}
                          label={stat.label}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {stat.label}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {stat.description}
                      </p>
                    </div>
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

export default StatsSection;