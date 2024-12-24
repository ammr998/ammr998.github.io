"use client";
import { useEffect, useState } from 'react';
import PageLayout from "@/components/layout/page-layout";
import { Card } from "@/components/ui/card";
import Loading from "@/components/ui/loading";
import { appleGaramond, liberationSans } from "@/lib/fonts";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Aymn-Mohd',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: 'Twitter',
    url: 'https://x.com/aymnmohdd',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aymn-mohd/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
      </svg>
    )
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@aymnmohd',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    )
  },
  {
    name: 'Email',
    url: 'mailto:aymanshsm+website@gmail.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <PageLayout>
              <motion.main 
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="px-4 sm:px-8 md:px-16 lg:px-24 py-16"
              >
                <section className="mb-20 w-full">
                  <div className="space-y-6 max-w-[90rem] mx-auto">
                    <div className="flex items-center gap-2 text-neutral-400">
                      <span>[1] Hello there</span>
                      <span className="text-neutral-600">/huːln yɪŋ/</span>
                    </div>
                    
                    <h2 className={` text-2xl md:text-3xl lg:text-4xl text-neutral-300 font-normal leading-relaxed justify-center `}>
                      Ayman is a programmer based in Dubai, building at the intersection of AI/ML, Cybersecurity, Engineering, Design. Studying Computer Engineering & Autonomous Systems at the University of Wollongong in Dubai.
                    </h2>

                    {/* Social Links */}
                    <AnimatePresence>
                      <div className="flex gap-6 pt-6">
                        {socialLinks.map((link, index) => (
                          <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors duration-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {link.icon}
                          </motion.a>
                        ))}
                      </div>
                    </AnimatePresence>
                  </div>
                </section>

                <div className="border-t border-neutral-800 my-8 max-w-[90rem] mx-auto" />

                <section className="mb-20 w-full">


                  <div className="flex items-center gap-1 text-neutral-400 mb-5">
                    <span>[2] Projects</span>
                    <span className="text-neutral-600">/prəˈdʒɛkts/</span>
                  </div>
                  <h2 className={`${appleGaramond.className} text-2xl md:text-4xl text-neutral-200 mb-6 max-w-[90rem] mx-auto`}>
                    Case Studies
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[90rem] mx-auto">
                    <Card 
                      title="BuildStage"
                      tagline="Discovery engine for builders and founders"
                      year="2024"
                      image="/projects/imgs/postspark_export_2024-12-21_10-10-45.png"
                      href="/projects/buildstage"
                    />
                    <Card 
                      title="TailorReach"
                      tagline="Conversational AI Agents for solopreneurs, sales, SMBs"
                      year="2024"
                      image="/projects/imgs/Image.png"
                      href="/projects/tailorreach"
                    />
                    <Card 
                      title="Spam NLP"
                      tagline="NLP for spam detection"
                      year="2024"
                      image="/projects/imgs/spam.png"
                      href="/projects/spamnlp"
                    />
                    <Card 
                      title="22 Day CTF Challenge"
                      tagline="22 Day of Penetration Testing"
                      year="2024"
                      image="/projects/imgs/ctf.png"
                      href="/projects/22dayctf"
                    />
                    <Card 
                      title="File Integrity Monitoring"
                      tagline="File Integrity Monitoring using Python"
                      year="2023"
                      image="/projects/imgs/fim.png"
                      href="/projects/fim"
                    />

                  </div>
                </section>
              </motion.main>
            </PageLayout>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
