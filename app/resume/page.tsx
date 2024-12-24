"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { appleGaramond, liberationSans } from "@/lib/fonts";
import PageLayout from "@/components/layout/page-layout";
import Loading from "@/components/ui/loading";

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

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

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
              <div className="min-h-screen px-6 sm:px-12 md:px-24 lg:px-32 py-16">
                {/* Header Section */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-32"
                >


                  <div className="max-w-[90rem] mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                      <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`${appleGaramond.className} text-[6rem] md:text-[8rem] lg:text-[10rem] text-neutral-300 leading-[0.9] tracking-tight`}
                      >
                        Resume
                      </motion.h1>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 md:mt-0"
                      >
                        <a 
                          href="/resume/Ayman_Mohammed_Resume.pdf" 
                          download="Ayman_Mohammed_Resume.pdf"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-sm transition-all duration-300 hover:scale-105 relative group"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500" />
                          <FaDownload className="text-neutral-400 relative" />
                          <span className="relative">Download Resume</span>
                        </a>
                      </motion.div>
                    </div>

                    <div className="flex flex-wrap gap-6 text-neutral-300 mb-8">
                      <div className="flex items-center gap-2">
                        <HiLocationMarker className="text-neutral-400" />
                        <span>Dubai, UAE</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <HiMail className="text-neutral-400" />
                        <span>aymanshsm@gmail.com</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <AnimatePresence>
                      <div className="flex flex-wrap gap-6">
                        {socialLinks.map((link, index) => (
                          <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors duration-200 relative group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="absolute -inset-2 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-full blur opacity-0 group-hover:opacity-20 transition duration-500" />
                            <div className="relative">
                              {link.icon}
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Executive Summary */}
                <motion.section 
                  {...fadeInUp}
                  className="mb-32"
                >
                  <div className="max-w-[90rem] mx-auto">
                    <h2 className={`${liberationSans.className} text-neutral-400 tracking-widest text-sm mb-12`}>EXECUTIVE SUMMARY</h2>
                    <p className="text-neutral-300 text-xl leading-relaxed">
                      Aspiring engineer specializing in <span className="text-neutral-100">Computer and Autonomous Systems Engineering</span>, 
                      with a strong emphasis on <span className="text-neutral-100">cybersecurity</span>, 
                      <span className="text-neutral-100">blockchain</span>, and <span className="text-neutral-100">Web3 technologies</span>. 
                      Experienced in analyzing security vulnerabilities, implementing innovative solutions, and optimizing competitive strategies. 
                      Skilled in <span className="text-neutral-100">AI/ML</span>, <span className="text-neutral-100">full-stack development</span>, 
                      and <span className="text-neutral-100">pentesting</span>.
                    </p>
                  </div>
                </motion.section>

                {/* Education */}
                <motion.section 
                  {...fadeInUp}
                  className="mb-32"
                >
                  <div className="max-w-[90rem] mx-auto">
                    <h2 className={`${liberationSans.className} text-neutral-400 tracking-widest text-sm mb-12`}>EDUCATION</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
                      <div>
                        <h3 className={`${appleGaramond.className} text-5xl md:text-6xl text-neutral-300 mb-8`}>
                          University of Wollongong in Dubai
                        </h3>
                        <p className="text-neutral-400 text-2xl mb-4">2023 - 2027</p>
                        <p className="text-neutral-300 text-xl">
                          Bachelor of Engineering (Honours) - Computer and Autonomous Systems Engineering
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Work Experience */}
                <motion.section 
                  {...fadeInUp}
                  className="mb-32"
                >
                  <div className="max-w-[90rem] mx-auto">
                    <h2 className={`${liberationSans.className} text-neutral-400 tracking-widest text-sm mb-12`}>WORK EXPERIENCE</h2>
                    
                    <div className="space-y-24">
                      <div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                          <h3 className={`${appleGaramond.className} text-4xl md:text-5xl text-neutral-300`}>Extern - Webacy</h3>
                          <p className="text-neutral-400 text-xl">Jul 2024 – Aug 2024</p>
                        </div>
                        <p className="text-neutral-300 text-xl mb-6">Webacy - Blockchain and Web3 Security Research Extern (Remote)</p>
                        <ul className="space-y-4 text-neutral-300 text-xl">
                          <li>• Analyzed security vulnerabilities in emerging blockchain technologies, identifying critical areas for improvement</li>
                          <li>• Evaluated blockchain platforms and Web3 security competitors, leading to key market opportunities</li>
                          <li>• Crafted strategic recommendations to enhance competitive edge in the Web3 security space</li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                          <h3 className={`${appleGaramond.className} text-4xl md:text-5xl text-neutral-300`}>Mastercard</h3>
                          <p className="text-neutral-400 text-xl">Dec 2023 – Jan 2024</p>
                        </div>
                        <p className="text-neutral-300 text-xl mb-6">Cyber Awareness Intern (Remote)</p>
                        <ul className="space-y-4 text-neutral-300 text-xl">
                          <li>• Analyzed 100+ potential security threats in Security Awareness Team simulation, focusing on phishing attempts</li>
                          <li>• Evaluated security training effectiveness across business units, uncovering awareness gaps</li>
                          <li>• Designed and implemented 5 targeted security awareness programs, boosting threat detection by 40%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Projects */}
                <motion.section 
                  {...fadeInUp}
                  className="mb-32"
                >
                  <div className="max-w-[90rem] mx-auto">
                    <h2 className={`${liberationSans.className} text-neutral-400 tracking-widest text-sm mb-12`}>KEY PROJECTS</h2>
                    <div className="space-y-24">
                      <div>
                        <h3 className={`${appleGaramond.className} text-4xl md:text-5xl text-neutral-300 mb-8`}>
                          22 Days, 22 CTF Challenge
                        </h3>
                        <p className="text-neutral-300 text-xl mb-4">Intensive Cybersecurity Training and Challenge</p>
                        <p className="text-neutral-400 text-xl mb-6">
                          Dubai, United Arab Emirates • Apr 2024
                        </p>
                        <ul className="space-y-4 text-neutral-300 text-xl mb-6">
                          <li>• Mastered various Linux tools (nmap, binwalk, gobuster) for advanced system exploitation and security analysis</li>
                          <li>• Developed expertise in web application security, including SQL injection and Server-Side Template Injection</li>
                          <li>• Gained deep understanding of network protocols and services (FTP, SMB, Telnet, Rsync, RDP)</li>
                          <li>• Enhanced cybersecurity skills through platforms like PicoCTF and Hack The Box</li>
                        </ul>
                        <a href="https://medium.com/@aymnmohd/22-days-22-capture-the-flag-challenge-5674912f80fd" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-neutral-400 hover:text-neutral-300 transition-colors text-xl inline-flex items-center gap-2 group relative"
                        >
                          <div className="absolute -inset-2 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500" />
                          <span className="relative">Read Challenge Journey →</span>
                        </a>
                      </div>

                      <div>
                        <h3 className={`${appleGaramond.className} text-4xl md:text-5xl text-neutral-300 mb-8`}>
                          Buildstage
                        </h3>
                        <p className="text-neutral-300 text-xl mb-4">A Discovery Engine for Builders and Founders</p>
                        <p className="text-neutral-400 text-xl mb-6">
                          NextJS • Supabase • Shadcn/UI
                        </p>
                        <ul className="space-y-4 text-neutral-300 text-xl mb-6">
                          <li>• Increased website traffic by 50% through implementing SEO strategies and targeted marketing campaigns</li>
                          <li>• Analyzed user behavior data to optimize website layout and navigation</li>
                          <li>• Spearheaded the development of a direct project submission feature, resulting in 10+ new submissions</li>
                        </ul>
                        <a href="https://buildstage.co" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-neutral-400 hover:text-neutral-300 transition-colors text-xl inline-flex items-center gap-2 group relative"
                        >
                          <div className="absolute -inset-2 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500" />
                          <span className="relative">View Project →</span>
                        </a>
                      </div>

                      <div>
                        <h3 className={`${appleGaramond.className} text-4xl md:text-5xl text-neutral-300 mb-8`}>
                          File Integrity Manager
                        </h3>
                        <ul className="space-y-4 text-neutral-300 text-xl mb-6">
                          <li>• Designed and implemented a comprehensive File Integrity Monitoring (FIM) system</li>
                          <li>• Applied CIA triad principles for secure file management and data protection</li>
                          <li>• Enabled real-time monitoring of cryptographic hash values for immediate threat detection</li>
                          <li>• Strengthened organizational cybersecurity posture through proactive risk mitigation</li>
                        </ul>
                        <a href="http://bit.ly/fimedium" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-neutral-400 hover:text-neutral-300 transition-colors text-xl inline-flex items-center gap-2 group relative"
                        >
                          <div className="absolute -inset-2 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500" />
                          <span className="relative">View Project →</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Skills */}
                <motion.section
                  {...fadeInUp}
                >
                  <div className="max-w-[90rem] mx-auto">
                    <h2 className={`${liberationSans.className} text-neutral-400 tracking-widest text-sm mb-12`}>EXPERTISE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                      <div className="space-y-12">
                        <div>
                          <h3 className={`${appleGaramond.className} text-3xl text-neutral-300 mb-6`}>Development & Programming</h3>
                          <p className="text-neutral-300 text-xl leading-relaxed">
                            Python • MATLAB • Bash • PowerShell • SQL • Flutter  NextJS • JavaScript • TypeScript • Shadcn • Full-Stack Development
                          </p>
                        </div>
                        <div>
                          <h3 className={`${appleGaramond.className} text-3xl text-neutral-300 mb-6`}>AI & Data</h3>
                          <p className="text-neutral-300 text-xl leading-relaxed">
                            Artificial Intelligence • Machine Learning • Natural Language Processing • Data Analysis • Data Presentation
                          </p>
                        </div>
                        <div>
                          <h3 className={`${appleGaramond.className} text-3xl text-neutral-300 mb-6`}>Infrastructure & Tools</h3>
                          <p className="text-neutral-300 text-xl leading-relaxed">
                            Linux System Administration • Kali Linux • SMBClients • VPN • Redis • FTP • Supabase
                          </p>
                        </div>
                      </div>
                      <div className="space-y-12">
                        <div>
                          <h3 className={`${appleGaramond.className} text-3xl text-neutral-300 mb-6`}>Cybersecurity</h3>
                          <p className="text-neutral-300 text-xl leading-relaxed">
                            Pentesting • SIEM • Firewall • IDS/IPS • Antivirus • Vulnerability Assessment • Cybersecurity Awareness
                          </p>
                        </div>
                        <div>
                          <h3 className={`${appleGaramond.className} text-3xl text-neutral-300 mb-6`}>Frameworks & Standards</h3>
                          <p className="text-neutral-300 text-xl leading-relaxed">
                            MITRE ATT&CK • MITRE ATLAS • NIST 800-53 • ISO 27001 • CIS Controls • Cyber Policy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              </div>
            </PageLayout>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Resume;
