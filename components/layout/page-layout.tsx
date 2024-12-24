'use client';
import { motion } from "framer-motion";
import Nav from "@/components/ui/navbar";
import Cursor from "@/components/ui/cursor";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black relative"
    >
      <Cursor />
      <Nav />
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 text-center text-neutral-400 text-sm">
        <p>© {new Date().getFullYear()} Ayman Mohammed. All rights reserved.</p>
      </footer>
    </motion.div>
  );
} 