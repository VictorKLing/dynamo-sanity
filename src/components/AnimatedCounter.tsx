import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  label: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from, to, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useSpring(count, { stiffness: 100, damping: 20 });
  const countRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [count, to, inView, duration]);

  useEffect(() => {
    rounded.on("change", latest => {
      if (countRef.current) {
        countRef.current.textContent = Math.round(latest).toString();
      }
    });
  }, [rounded]);

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span
        ref={countRef}
        className="text-5xl font-bold text-[#4A90FF]"
      >
        0
      </span>
      {to !== 0 && (
        <motion.span
          className="text-3xl font-bold text-[#4A90FF] ml-1"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: duration }}
        >
          +
        </motion.span>
      )}
    </motion.div>
  );
};

export default AnimatedCounter;