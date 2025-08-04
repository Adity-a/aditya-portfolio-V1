"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { GiArchiveResearch } from "react-icons/gi";

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a192f]/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-5 md:px-10 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-300 hover:text-blue-200 transition-colors">
          <GiArchiveResearch />
        </Link>
        <ul className="flex items-center space-x-6 md:space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-300 hover:text-blue-300 relative transition-colors">
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    className="absolute bottom-[-4px] left-0 h-[2px] w-full bg-blue-300"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}