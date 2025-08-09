"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { useState, useRef, MouseEvent } from 'react';

// Animation variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Animation variants for individual items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    } as const,
  },
};

export default function ContactPage() {
  const socials = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Adity-a' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/aditya-balodi/' },
  ];

  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlightStyle, setSpotlightStyle] = useState({ left: '50%', top: '50%' });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    
    // Calculate position for the spotlight
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setSpotlightStyle({ left: `${x}px`, top: `${y}px` });

    // Calculate rotation for 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20; // Adjust divisor for more/less tilt
    const rotateY = (x - centerX) / -20; // Adjust divisor for more/less tilt
    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] p-4 bg-grid-pattern" style={{ perspective: '1000px' }}>
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transition: 'transform 0.1s ease-out'
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="group relative max-w-2xl w-full bg-gray-900/50 backdrop-blur-lg border border-blue-400/20 rounded-2xl shadow-2xl shadow-blue-500/10 p-8 md:p-12 text-center overflow-hidden"
      >
        {/* Interactive Spotlight Effect */}
        <div 
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ 
                background: `radial-gradient(400px circle at ${spotlightStyle.left} ${spotlightStyle.top}, rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
        />

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-blue-300"
        >
          Let&apos;s Build Together
        </motion.h1>
        
        <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-400">
          Have a project in mind or just want to connect? I&apos;m always open to discussing new ideas and opportunities.
        </motion.p>
        
        <motion.a
          variants={itemVariants}
          href="mailto:adityabalodi31@gmail.com"
          className="group/button mt-10 inline-flex items-center gap-3 bg-blue-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5, transition: { type: 'spring', stiffness: 300 } }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPaperPlane className="transition-transform duration-500 group-hover/button:rotate-45" />
          Say Hello
        </motion.a>
        
        <motion.div variants={itemVariants} className="mt-12">
          <p className="text-gray-500 mb-4">Or find me on</p>
          <div className="flex justify-center space-x-6">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300"
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0], transition: { duration: 0.5, repeat: Infinity } }}
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}