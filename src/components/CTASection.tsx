import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 geometric-background relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="geometric-shape" />
      <div className="geometric-shape" />
      <div className="geometric-shape" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Pronto para transformar sua presença digital?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            Vamos criar algo incrível juntos. Entre em contato e descubra como podemos ajudar seu negócio a crescer.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#142D55] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group"
          >
            <span>Iniciar Projeto</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}