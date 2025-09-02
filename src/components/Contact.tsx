import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Clock, Send, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'contato@dynamocode.com',
    link: 'mailto:contato@dynamocode.com'
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '+55 (11) 99999-9999',
    link: 'tel:+5511999999999'
  },
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'São Paulo, SP - Brasil',
    link: '#'
  },
  {
    icon: Clock,
    title: 'Horário',
    content: 'Seg-Sex: 9h às 18h',
    link: '#'
  }
];

const socialLinks = [
  { icon: Twitter, name: 'Twitter', link: '#' },
  { icon: Linkedin, name: 'LinkedIn', link: '#' },
  { icon: Instagram, name: 'Instagram', link: '#' },
  { icon: Github, name: 'GitHub', link: '#' }
];

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Vamos criar algo incrível juntos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Conte-nos sobre seu projeto e descubra como podemos ajudar
          </motion.p>
        </div>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Form Section */}
              <div className="p-8 lg:p-12">
                <form className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#142D55] focus:ring-2 focus:ring-[#142D55]/20 transition-all duration-200"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#142D55] focus:ring-2 focus:ring-[#142D55]/20 transition-all duration-200"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#142D55] focus:ring-2 focus:ring-[#142D55]/20 transition-all duration-200"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#142D55] focus:ring-2 focus:ring-[#142D55]/20 transition-all duration-200 resize-none"
                      placeholder="Descreva seu projeto..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#142D55] via-[#1E3D6B] to-[#142D55] text-white rounded-xl font-medium shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all duration-300 flex items-center justify-center group"
                  >
                    <span>Enviar Mensagem</span>
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>

              {/* Info Section */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#142D55] via-[#1E3D6B] to-[#284B7E]" />
                <div className="relative h-full p-8 lg:p-12">
                  <div className="h-full flex flex-col">
                    <div className="flex-grow space-y-8">
                      {contactInfo.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <motion.a
                            key={index}
                            href={item.link}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start space-x-4 text-white group"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-1">
                                {item.title}
                              </h3>
                              <p className="text-white/80">
                                {item.content}
                              </p>
                            </div>
                          </motion.a>
                        );
                      })}
                    </div>

                    <div className="mt-12">
                      <h4 className="text-white text-lg font-semibold mb-4">Nos siga</h4>
                      <div className="flex space-x-4">
                        {socialLinks.map((social, index) => {
                          const Icon = social.icon;
                          return (
                            <motion.a
                              key={social.name}
                              href={social.link}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;