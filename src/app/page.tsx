"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.04,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function HomePage() {
  const name = "Aditya Balodi.";
  const projects = [
    {
      title: "Presence: Smart Attendance App",
      objective: "To investigate the viability of facial recognition and geo-fencing as a secure, dual-factor authentication method for attendance systems in academic institutions.",
      description: "Developed a secure attendance app using a TensorFlow Lite Face-net model (99.82% accuracy) and Google Maps API. This work was a Top 2 finisher in the Smart India Hackathon 2022.",
      link: "https://github.com/Adity-a/Presence",
      tags: ["Kotlin", "TensorFlow", "Android", "Biometrics"]
    },
    {
      title: "Brahmi Script OCR",
      objective: "To explore the application of modern OCR engines for the digitization and preservation of ancient, low-resource scripts like Brahmi.",
      description: "Built an Android app using the Tesseract OCR engine with a custom-trained language model to recognize Brahmi script from images and transliterate it to Devnagari Hindi.",
      link: "https://github.com/Adity-a/Brahmi_Recognition",
      tags: ["OCR", "Tesseract", "Digital Humanities"]
    },
    {
      title: "AI Virtual Mouse",
      objective: "A research project into novel Human-Computer Interaction (HCI) techniques, aiming to create a touchless pointing system using only a standard webcam.",
      description: "This system is controlled by right-hand gestures, using OpenCV for real-time hand-landmark detection and a state-machine for robust gesture classification.",
      link: "https://github.com/Adity-a/AI_Virtual_Mouse",
      tags: ["Python", "OpenCV", "HCI"]
    },
    {
      title: "Parking Tracker App",
      description: "An Android application designed to simplify booking parking slots and providing real-time vehicle tracking using Google Maps integration.",
      link: "https://github.com/Adity-a/Parking_Tracker",
      tags: ["Android", "Google Maps", "IoT"]
    },
    {
      title: "Virtual Reality Tour",
      description: "A mobile application built in Unity Engine, allowing users to experience immersive virtual reality tours using panoramic images.",
      link: "https://github.com/Adity-a/Virtual-Reality-Tour",
      tags: ["Unity", "C#", "Android", "VR"]
    },
    {
      title: "Network Analysis Tool",
      description: "An Android app developed in Java which can scan WiFi networks, displaying signal strength, distance, network type, MAC address, and other key metrics.",
      link: "https://github.com/Adity-a/Network-Analysis",
      tags: ["Java", "Android", "Networking"]
    },
    {
      title: "Password Manager",
      description: "A secure password manager for Android built with robust AES-256 encryption, biometric authentication, and secure backup options.",
      link: "https://github.com/Adity-a/PasswordManager",
      tags: ["Java", "Android", "Security", "Encryption"]
    }
  ];

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="min-h-[80vh] flex flex-col justify-center"
      >
        <motion.p variants={fadeInItem} className="text-blue-300 text-lg">Hi, my name is</motion.p>
        <motion.h1
            className="text-4xl md:text-7xl font-bold text-gray-100 mt-2"
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
            {name.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                </motion.span>
            ))}
        </motion.h1>
        <motion.h2 variants={fadeInItem} className="text-3xl md:text-5xl font-bold text-gray-400 mt-2">I build intelligent systems.</motion.h2>
        <motion.p variants={fadeInItem} className="mt-6 max-w-xl text-lg">
          I&apos;m a research-focused engineer specializing in Machine Learning and Computer Vision, passionate about creating software that solves real-world challenges.
        </motion.p>
        <motion.div variants={fadeInItem} className="flex space-x-6 mt-8">
            <a href="https://github.com/Adity-a" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-transform duration-300 hover:scale-110"><FaGithub size={28} /></a>
            <a href="https://www.linkedin.com/in/aditya-balodi/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-transform duration-300 hover:scale-110"><FaLinkedin size={28} /></a>
            <a href="mailto:adityabalodi31@gmail.com" aria-label="Email" className="text-gray-400 hover:text-blue-300 transition-transform duration-300 hover:scale-110"><FaEnvelope size={28} /></a>
        </motion.div>
      </motion.section>

      {/* --- PROJECTS --- */}
       <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
          <h2 className="text-3xl font-bold text-gray-100 mt-20 mb-8 flex items-center"><FaProjectDiagram className="text-blue-300 mr-4" />Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div key={i} variants={fadeInItem}>
                <Link href={p.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="bg-[#112240] p-6 rounded-lg shadow-xl border border-gray-700 hover:border-blue-400 flex flex-col h-full transition-all duration-300 hover:-translate-y-2">
                    <h3 className="text-xl font-semibold text-blue-300">{p.title}</h3>
                    {p.objective && (
                       <p className="mt-3 text-sm text-gray-400 italic border-l-2 border-blue-400 pl-3"><b>Research Objective:</b> {p.objective}</p>
                    )}
                    <p className="mt-3 text-gray-300 flex-grow">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {p.tags.map(tag => <span key={tag} className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">{tag}</span>)}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
    </div>
  );
}