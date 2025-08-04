"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaProjectDiagram, FaTrophy, FaTools, FaBrain, FaCode } from 'react-icons/fa';

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      description: "A secure attendance app using Facial Recognition (99.82% accuracy) and Geo-fencing. Top 2 in Smart India Hackathon 2022.",
      link: "https://github.com/Adity-a/Presence",
      tags: ["Kotlin", "TensorFlow", "Android"]
    },
    {
      title: "Brahmi Script OCR",
      description: "Android app using Tesseract OCR and a custom model to recognize ancient Brahmi script and convert it to Devnagari Hindi.",
      link: "https://github.com/Adity-a/Brahmi_Recognition",
      tags: ["OCR", "Tesseract", "Research"]
    },
    {
      title: "AI Virtual Mouse",
      description: "A virtual mouse controlled by right-hand gestures, using OpenCV for hand tracking and consistent cursor control.",
      link: "https://github.com/Adity-a/AI_Virtual_Mouse",
      tags: ["Python", "OpenCV", "HCI"]
    },
    {
      title: "Parking Tracker App",
      description: "The Parking Tracker App is an Android application designed to simplify the process of booking parking slots in a parking facility and providing real-time vehicle tracking using Google Maps integration.",
      link: "https://github.com/Adity-a/Parking_Tracker",
      tags: ["Android", "Google Maps", "Real-time Tracking", "Booking System", "IoT"]
    },
    {
      title: "Virtual Reality Tour Android App",
      description: "The Virtual Reality Tour Android App is a mobile application built in Unity Engine, allowing users to experience immersive virtual reality tours using panoramic images. The app utilizes a 3D sphere for displaying panoramic images and leverages the gyroscope of mobile devices for intuitive camera movement within the virtual environment.",
      link: "https://github.com/Adity-a/Virtual-Reality-Tour",
      tags: ["Android", "Unity", "Virtual Reality", "Panoramic Images"]
    },
    {
      title: "Network Analysis",
      description: "An android app developed in java which can scan wifi network around the device with signal strength, distance from device, network type(2.4/5.0 Ghz), mac address, etc., the ap can also scan the port and ip addresses connected to the same network and identify open ports of the device connected to same network.",
      link: "https://github.com/Adity-a/Network-Analysis",
      tags: ["Network Analysis", "Android", "Java", "Security", "Encryption", "WiFi"]
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
          I'm a researcher and engineer specializing in Machine Learning and Computer Vision, passionate about creating software that solves real-world challenges.
        </motion.p>
        <motion.div variants={fadeInItem} className="flex space-x-6 mt-8">
            <a href="https://github.com/Adity-a" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-transform duration-300 hover:scale-110"><FaGithub size={28} /></a>
            <a href="https://www.linkedin.com/in/aditya-balodi/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-transform duration-300 hover:scale-110"><FaLinkedin size={28} /></a>
            <a href="mailto:adityabalodi31@gmail.com" aria-label="Email" className="text-gray-400 hover:text-blue-300 transition-transform duration-300 hover:scale-110"><FaEnvelope size={28} /></a>
        </motion.div>
      </motion.section>

      {/* --- PROJECTS --- */}
       <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <h2 className="text-3xl font-bold text-gray-100 mt-20 mb-8 flex items-center"><FaProjectDiagram className="text-blue-300 mr-4" />Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div key={i} variants={fadeInItem}>
                <Link href={p.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="bg-[#112240] p-6 rounded-lg shadow-xl border border-gray-700 hover:border-blue-400 flex flex-col h-full transition-all duration-300 hover:-translate-y-2">
                    <h3 className="text-xl font-semibold text-blue-300">{p.title}</h3>
                    <p className="mt-2 text-gray-400 flex-grow">{p.description}</p>
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