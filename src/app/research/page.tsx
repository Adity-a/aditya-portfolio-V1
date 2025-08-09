"use client";

import { motion } from 'framer-motion';
import { FaBook, FaBrain, FaFlask, FaTrophy } from 'react-icons/fa';

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
    { 
      title: "Optical Character Recognition of Bhrami Script using Tesseract", 
      journal: "2024 Asian Conference on Intelligent Technologies (ACOIT)", 
      doi: "10.1109/ACOIT62457.2024.10939818",
      contribution: "My primary contribution was the development and training of the custom Tesseract language model, which involved data collection, image pre-processing, and model fine-tuning, leading to a significant improvement in character recognition accuracy."
    },
    { 
      title: "An IoT-based Heavy Vehicle Parking and Accident Avoidence System for Smart Cities using CNN", 
      journal: "2023 International Conference on Communication, Security and Artificial Intelligence (ICCSAI)", 
      doi: "10.1109/ICCSAI59793.2023.10421475",
      contribution: "I designed and implemented the Convolutional Neural Network (CNN) for vehicle detection and classification, and integrated the model with the IoT hardware for real-time processing."
    },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <h1 className="text-4xl font-bold text-gray-100 mb-12">Research & Scholarship</h1>
      
      {/* --- Research Interests --- */}
      <motion.section className="mb-16" variants={fadeIn}>
        <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center"><FaBrain className="mr-3"/>Research Interests</h2>
        <p className="text-gray-400 text-lg max-w-3xl">
          I am passionate about solving real-world problems through Applied Machine Learning and Computer Vision. My primary interests lie in developing robust algorithms for Human-Computer Interaction (HCI), exploring novel applications of Optical Character Recognition (OCR) for historical scripts, and building efficient AI systems for mobile and IoT devices. I am actively seeking to pursue a Ph.D. to delve deeper into these areas.
        </p>
      </motion.section>

      {/* --- M.Tech Thesis --- */}
       <motion.section className="mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center"><FaFlask className="mr-3"/>Ongoing M.Tech Thesis</h2>
        <div className="bg-[#112240] p-6 rounded-lg border border-gray-700">
            <motion.div variants={fadeIn}>
                <h3 className="text-lg font-semibold text-gray-200">Working Title: Real-time, Human Activity/Action and Anomaly Recognition</h3>
                <p className="text-gray-400 mt-2">
                    This research focuses on creating a highly efficient deep learning model that can detect and recognise human actions and anomalies simultaneously. The primary challenge is to achieve high accuracy while maintaining a small model footprint suitable for deployment on microcontrollers. The proposed methodology involves using knowledge distillation and quantization-aware training to compress a larger model.
                </p>
            </motion.div>
        </div>
       </motion.section>

      {/* --- Publications --- */}
      <motion.section className="mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
        <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center"><FaBook className="mr-3"/>Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.div key={i} variants={fadeIn} className="bg-[#112240] p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-gray-200">{pub.title}</h3>
              <p className="text-gray-400 italic mt-1">{pub.journal}</p>
              <p className="text-gray-300 mt-3 border-l-2 border-blue-400 pl-4"><b>My Contribution:</b> {pub.contribution}</p>
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-4 inline-block">View Publication &rarr;</a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- Achievements --- */}
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