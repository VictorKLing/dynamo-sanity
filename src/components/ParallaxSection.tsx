import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Sparkles, Target, Activity, Zap, CalendarClock  } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Estratégia Digital',
    description: 'Planejamento personalizado para alcançar seus objetivos',
  },
  {
    icon: Sparkles,
    title: 'Inovação Constante',
    description: 'Sempre à frente das últimas tendências tecnológicas',
  },
  {
    icon: Rocket,
    title: 'Resultados Reais',
    description: 'Foco em métricas e crescimento mensurável',
  },
];

const ParallaxSection = () => {
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjY1NyAwIDMgMS4zNDMgMyAzcy0xLjM0MyAzLTMgMy0zLTEuMzQzLTMtMyAxLjM0My0zIDMtM3oiIGZpbGw9IiNEMUQ1REIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-light/10 text-primary-light text-sm font-medium">
                Inovação Digital
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Transforme seu negócio com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400">
                tecnologia de ponta
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12"
            >
              Desenvolvemos soluções inovadoras que impulsionam seu crescimento e destacam sua marca no mercado digital.
            </motion.p>

            {/* Features Grid */}
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary-light/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-light" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Image with Simple Cards */}
          <motion.div
            style={{ y }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Modern workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              {/* Status Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-8 -right-8 bg-white rounded-2xl shadow-lg p-6 z-20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                      <span className="font-medium text-gray-900">Servidores Online</span>
                    </div>
                    <p className="text-sm text-gray-500">Funcionando normalmente</p>
                  </div>
                </div>
              </motion.div>

              {/* Analytics Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-lg p-6 z-20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <CalendarClock  className="w-5 h-5 text-primary-light" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">Desenvolvimento Ágil</span>
                    </div>
                    <p className="text-sm text-gray-500">Soluções rápidas e eficientes para o seu negócio</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;