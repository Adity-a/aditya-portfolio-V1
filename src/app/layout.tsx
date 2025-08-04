import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aditya Balodi | ML & CV Engineer',
  description: 'The portfolio of Aditya Balodi, a developer and researcher specializing in Machine Learning and Computer Vision.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a192f] text-gray-300`}>
        <Navbar />
        <main className="max-w-6xl mx-auto p-5 md:px-10 pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}