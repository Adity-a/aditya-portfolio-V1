"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
        className="text-center text-gray-500 py-8 mt-16 border-t border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
    >
      <p>
        Designed & Built by Aditya Balodi
      </p>
      <p className="text-sm mt-1">
        &copy; {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
}