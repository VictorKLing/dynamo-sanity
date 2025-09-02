import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react'
import { sanity } from '../lib/sanityClient'
import { urlFor } from '../lib/sanityImage'

type AboutData = {
  aboutImage?: any
  aboutText?: string
  aboutLink?: string
}

const About = () => {

  const [data, setData] = useState<AboutData | null>(null)

  useEffect(() => {
    const query = `*[_type == "sobre"][0]{ aboutImage, aboutText, aboutLink }`
    sanity
      .fetch<AboutData>(query)
      .then((res) => setData(res))
      .catch(() => setData(null))
  }, [])

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with Parallax Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Main Image */}
              <div className="aspect-w-4 aspect-h-5">
                {data?.aboutImage && (
                  <img
                    src={urlFor(data.aboutImage).url()}
                    alt="Sobre nós"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary-light/10 rounded-xl"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-xl"
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent rounded-2xl" />
            </div>
          </motion.div>

          {/* Content Section */}
          <div ref={ref} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="inline-block text-primary-light font-semibold tracking-wide uppercase mb-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Nossa História
              </motion.span>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre a <span className="text-primary-light">DynamoCode</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {data?.aboutText ?? "Texto padrão da seção About"}
                </motion.p>
              </div>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 inline-block bg-primary-light text-white rounded-lg hover:bg-primary-light/90 transition-colors duration-300"
                href={data?.aboutLink ?? "#"}
              >
                Saiba mais
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;