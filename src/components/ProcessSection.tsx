import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Code, Rocket, Settings, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Ideação',
    description: 'Transformamos suas ideias em conceitos sólidos e viáveis.',
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Code,
    title: 'Desenvolvimento',
    description: 'Codificação com as melhores práticas e tecnologias modernas.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Settings,
    title: 'Testes',
    description: 'Garantia de qualidade em cada etapa do processo.',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: Rocket,
    title: 'Lançamento',
    description: 'Deployment seguro e suporte contínuo pós-lançamento.',
    color: 'from-red-500 to-orange-500',
  },
];

const ProcessSection = () => {
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(74, 144, 255, 0.1) 0%, transparent 50%)`,
            y,
            opacity,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Nosso Processo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Uma abordagem sistemática e eficiente para transformar sua visão em realidade
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-light/20 to-transparent transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="relative bg-white shadow-lg rounded-xl p-8 border border-gray-100">
                    {/* Hover Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
                    />

                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      >
                        {index + 1}
                      </motion.div>
                    </div>

                    <div className="pt-8 text-center relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="inline-block p-3 rounded-lg bg-primary-light/10 mb-6"
                      >
                        <Icon className="w-8 h-8 text-primary-light" />
                      </motion.div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-6 h-[72px]">
                        {step.description}
                      </p>

                      <motion.button
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center text-primary-light text-sm font-medium"
                      >
                        Saiba mais
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full">
                      <motion.div
                        animate={{
                          x: [0, 10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="w-8 h-8 text-primary-light/30" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;