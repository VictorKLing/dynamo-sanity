import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Laptop, BarChart, Users, Globe, Palette, Clock } from 'lucide-react';

const features = [
  {
    icon: Laptop,
    title: 'Tecnologia Moderna',
    description: 'Utilizamos as mais recentes tecnologias do mercado para criar soluções inovadoras.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart,
    title: 'Resultados Comprovados',
    description: 'Acompanhamento detalhado de métricas e resultados do seu projeto.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Foco no Usuário',
    description: 'Design centrado no usuário para melhor experiência e engajamento.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Globe,
    title: 'Alcance Global',
    description: 'Soluções preparadas para alcançar clientes em qualquer lugar do mundo.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'Design Único',
    description: 'Criações exclusivas que destacam sua marca no mercado digital.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Clock,
    title: 'Entregas Pontuais',
    description: 'Compromisso com prazos e planejamento eficiente de projetos.',
    color: 'from-indigo-500 to-purple-500',
  },
];

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:40px_40px]" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-primary-light/10 ring-1 ring-primary-light/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary-light font-semibold tracking-wide uppercase"
          >
            Por que nos escolher?
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Excelência em cada detalhe
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Nossa equipe combina expertise técnica com criatividade para entregar 
            projetos excepcionais que superam expectativas
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-light/20">
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-xl bg-primary-light/10 flex items-center justify-center mb-6 group-hover:bg-primary-light/20 transition-colors duration-300"
                    >
                      <Icon className="w-7 h-7 text-primary-light" />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>

                    <div className="mt-6 flex items-center text-primary-light">
                      <motion.span
                        className="text-sm font-medium cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Saiba mais
                      </motion.span>
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
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

export default Features;