"use client";

import { motion } from 'framer-motion';
import { FaBook, FaBrain, FaTrophy } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function ResearchPage() {
  const publications = [
        { title: "An IoT-based Heavy Vehicle Parking and Accident Avoidence System for Smart Cities using CNN", journal: "2023 International Conference on Communication, Security and Artificial Intelligence (ICCSAI)", doi: "10.1109/ICCSAI58273.2023.10264027" },
    { title: "Optical Character Recognition of Bhrami Script using Tesseract", journal: "2024 Asian Conference on Intelligent Technologies (ACOIT)", doi: "10.1109/ACOIT62457.2024.10939818" }
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <h1 className="text-4xl font-bold text-gray-100 mb-12">Research & Profile</h1>
      
      <motion.section className="mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center"><FaBrain className="mr-3"/>Research Interests</h2>
        <div className="flex flex-wrap gap-3">
          {["Applied Machine Learning", "Computer Vision", "Human-Computer Interaction", "Optical Character Recognition", "Mobile AI", "IoT Systems"].map((interest, i) => (
             <motion.span key={i} variants={fadeIn} className="bg-[#112240] text-blue-200 px-4 py-2 rounded-lg border border-gray-700">{interest}</motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section className="mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center"><FaBook className="mr-3"/>Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.div key={i} variants={fadeIn} className="bg-[#112240] p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-gray-200">{pub.title}</h3>
              <p className="text-gray-400 italic mt-1">{pub.journal}</p>
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-2 inline-block">View Publication &rarr;</a>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
       <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center"><FaTrophy className="mr-3"/>Key Achievements</h2>
        <div className="space-y-6">
             <motion.div variants={fadeIn} className="bg-[#112240] p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-gray-200">Smart India Hackathon 2022 Grand Finals</h3>
                <p className="text-gray-400 mt-1">Achieved **Top 2** placement for problem statement SK794.</p>
             </motion.div>
             <motion.div variants={fadeIn} className="bg-[#112240] p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-gray-200">Yamaha AI 2.0 Hackathon</h3>
                <p className="text-gray-400 mt-1">Placed in the **Top 12** out of 105 teams from across India.</p>
             </motion.div>
        </div>
       </motion.section>
    </motion.div>
  );
}