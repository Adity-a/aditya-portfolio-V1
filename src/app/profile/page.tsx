"use client";

import { motion } from 'framer-motion';
import { FaDownload, FaBookReader, FaUniversity } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function ProfilePage() {
  const courses = [
    "Advanced Algorithms", "Statistical Machine Learning", "Advanced Computer Vision",
    "Natural Language Processing", "Research Methodology", "Deep Learning Architectures",
    "Android Development", "Cyber Security"
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <h1 className="text-4xl font-bold text-gray-100 mb-12">Academic Profile</h1>
      
      {/* --- Academic CV --- */}
      <motion.section className="mb-16" variants={fadeIn}>
        <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center"><FaDownload className="mr-3"/>Academic CV</h2>
        <p className="text-gray-400 mb-4">For a detailed overview of my academic background, publications, and experience, please download my CV.</p>
        <a 
          href="src/app/resume.pdf" // IMPORTANT: Place your CV file in the `public` folder
          download
          className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          Download CV
        </a>
      </motion.section>

      {/* --- Key Coursework --- */}
      <motion.section className="mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center"><FaBookReader className="mr-3"/>Relevant Graduate Coursework</h2>
        <div className="flex flex-wrap gap-3">
          {courses.map((course, i) => (
             <motion.span key={i} variants={fadeIn} className="bg-[#112240] text-blue-200 px-4 py-2 rounded-lg border border-gray-700">{course}</motion.span>
          ))}
        </div>
      </motion.section>

      {/* --- Education Section (Replaces Teaching) --- */}
      <motion.section className="mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center"><FaUniversity className="mr-3"/>Education</h2>
        <div className="space-y-6">
            <motion.div variants={fadeIn} className="bg-[#112240] p-6 rounded-lg border border-gray-700">
                <p className="text-blue-300 text-sm font-semibold">2024 – Present</p>
                <h3 className="text-xl font-bold text-gray-100 mt-1">Master of Technology, Computer Science & Engineering</h3>
                <p className="text-gray-400">Graphic Era University, Dehradun</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[#112240] p-6 rounded-lg border border-gray-700">
                <p className="text-blue-300 text-sm font-semibold">2020 – 2024</p>
                <h3 className="text-xl font-bold text-gray-100 mt-1">Bachelor of Technology, Computer Science & Engineering</h3>
                <p className="text-gray-400">Graphic Era Hill University, Dehradun</p>
            </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}