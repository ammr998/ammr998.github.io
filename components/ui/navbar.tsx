"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { liberationSans } from "@/lib/fonts";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        hasScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black"
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/" 
              className={`${liberationSans.className} text-white font-normal text-lg leading-[0.9] hover:opacity-80 transition-opacity`}
            >
              <div className="flex items-start gap-2">
                <div className="flex flex-col">
                  <span>ayman</span>
                  <span>mohammed.</span>
                </div>
                <div className="flex flex-col">
                  <span>(portfolio)</span>
                </div>
              </div>  
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`${liberationSans.className} ${
                    pathname === link.href 
                      ? "text-white" 
                      : "text-gray-400 hover:text-white"
                  } transition-colors relative group py-1`}
                >
                  {link.label}
                  <motion.span
                    className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "group-hover:w-full"
                    }`}
                    layoutId="underline"
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-[2px] bg-white block transition-transform origin-center"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-[2px] bg-white block transition-opacity"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-[2px] bg-white block transition-transform origin-center"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-neutral-800"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        className={`${liberationSans.className} text-2xl ${
                          pathname === link.href 
                            ? "text-white" 
                            : "text-gray-400 hover:text-white"
                        } transition-colors block py-2`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer to prevent content from going under navbar */}
      <div className="h-[72px]" />
    </>
  );
}

