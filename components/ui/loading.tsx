"use client";
import { motion } from "framer-motion";
import { liberationSans, appleGaramond } from "@/lib/fonts";
import { usePathname } from 'next/navigation';

interface LoadingProps {
  projectName?: string;
}

export default function Loading({ projectName }: LoadingProps) {
  const pathname = usePathname();
  let sectionName = "";

  if (projectName) {
    sectionName = projectName;
  } else {
    const path = pathname.split('/')[1];
    sectionName = path.charAt(0).toUpperCase() + path.slice(1);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="relative">
        {/* Gradient background */}
        <motion.div 
          className="absolute -inset-20 opacity-30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ 
            background: `
              radial-gradient(circle at 50% 50%, 
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.05) 25%,
                rgba(255, 255, 255, 0) 50%
              )
            `,
            filter: 'blur(40px)',
          }} 
        />

        {/* Logo and Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className={`${liberationSans.className} text-white font-normal text-4xl md:text-5xl lg:text-6xl leading-[0.9]`}>
              <div className="flex items-start gap-4">
                <div className="flex flex-col">
                  <span>ayman</span>
                  <span>mohammed.</span>
                </div>
                <div className="flex flex-col">
                  <span>(portfolio)</span>
                </div>
              </div>  
            </div>

            {/* Section Name */}
            {sectionName && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`${appleGaramond.className} text-5xl md:text-6xl lg:text-7xl text-neutral-400 italic`}
              >
                {sectionName}
              </motion.div>
            )}
          </div>
          
          {/* Animated line under everything */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="h-[3px] bg-neutral-400 mt-8"
          />
        </motion.div>
      </div>
    </motion.div>
  );
} 