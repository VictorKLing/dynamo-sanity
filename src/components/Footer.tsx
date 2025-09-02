import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/90" />

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
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
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
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              filter: 'blur(100px)',
              background: `radial-gradient(circle at center, rgba(74, 144, 255, ${0.1 - i * 0.03}) 0%, transparent 70%)`,
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

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Logo and Social Links */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">DynamoCode</span>
            </div>
            <p className="text-gray-400 text-base">
              Transformando ideias em experiências digitais memoráveis desde 2024.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Serviços
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Manutenção
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Empresa
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-5 lg:pl-8">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Newsletter
            </h3>
            <p className="text-base text-gray-300 mb-4">
              Receba as últimas novidades e atualizações.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                  placeholder="Seu email"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  Inscrever
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2025 DynamoCode. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;