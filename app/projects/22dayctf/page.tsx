"use client";
import { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { appleGaramond, liberationSans } from "@/lib/fonts";
import { ExternalLink } from 'lucide-react';
import PageLayout from "@/components/layout/page-layout";
import Loading from "@/components/ui/loading";
import { TOC_STYLES } from '@/lib/constants';

export default function CTFChallengePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: [0.4],
        rootMargin: '-15% 0px -35% 0px'
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const tableOfContents = [
    { id: 'overview', label: 'Overview' },
    { id: 'learning', label: 'Learning Platforms' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'results', label: 'Results & Impact' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'platforms', label: 'Platforms Used' },
    { id: 'resources', label: 'Resources' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight / 3);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" projectName="22 Day CTF Challenge" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <PageLayout>
              {/* Navigation */}
              <nav className="px-6 sm:px-12 md:px-24 lg:px-32 py-6 flex justify-between items-center">
                <Link 
                  href="/" 
                  className="text-neutral-400 hover:text-white transition-colors text-lg"
                >
                  ← Back
                </Link>
                <Link 
                  href="https://ctf.aymnmohd.tech"
                  target="_blank"
                  className="text-neutral-400 hover:text-white transition-colors text-lg flex items-center gap-2"
                >
                  Docs
                  <ExternalLink size={16} />
                </Link>
              </nav>

              <div className="relative">
                <div className="grid grid-cols-[1fr_min(65ch,90%)_1fr] gap-x-6 px-4">
                  <div className="col-start-2 py-16">
                    {/* Header */}
                    <div className="mb-8 text-center">
                      <h1 className={`${appleGaramond.className} text-2xl md:text-5xl lg:text-6xl mb-4 italic`}>
                        22 Days CTF Challenge
                      </h1>
                      <p className={`${liberationSans.className} text-neutral-400 text-lg`}>
                        Project, 2024
                      </p>
                    </div>

                    {/* Hero Image with Gradient */}
                    <div className="relative mt-12 mb-24">
                      <div 
                        className="absolute -inset-0 blur-[120px] opacity-70"
                        style={{ 
                          background: `
                            radial-gradient(circle at 50% 50%, 
                              rgba(220, 38, 38, 0.4) 0%,
                              rgba(185, 28, 28, 0.3) 25%,
                              rgba(153, 27, 27, 0.2) 50%,
                              rgba(0, 0, 0, 0) 70%
                            )
                          `,
                          transform: 'translateY(-10%) scale(1.5)',
                          filter: 'blur(60px)',
                          animation: 'pulse 8s ease-in-out infinite',
                        }} 
                      />
                      <div 
                        className="relative w-full aspect-[16/9] overflow-hidden rounded-lg ring-1 ring-red-500/20"
                        style={{
                          boxShadow: `
                            0 0 50px rgba(220, 38, 38, 0.2),
                            0 0 100px rgba(185, 28, 28, 0.1),
                            0 0 150px rgba(153, 27, 27, 0.05)
                          `
                        }}
                      >
                        <Image
                          src="/projects/imgs/22dayctf.png"
                          alt="22 Days CTF Challenge Overview"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>

                    {/* Add animation keyframes */}
                    <style jsx global>{`
                      @keyframes pulse {
                        0%, 100% {
                          opacity: 0.7;
                          transform: translateY(-10%) scale(1.5);
                        }
                        50% {
                          opacity: 0.9;
                          transform: translateY(-10%) scale(1.6);
                        }
                      }
                    `}</style>

                    <div className="grid grid-cols-2 gap-8 max-w-[90rem] mx-auto mt-8 mb-12">
                      {/* Tools Column */}
                      <div>
                        <h2 className="text-xl mb-2">Tools</h2>
                        <div className="flex flex-col gap-1">
                          {["Kali Linux", "Google", "YouTube", "Nmap", "Binwalk", "Smbclient", 
                            "Laptop", "Internet Connection", "PicoCTF", "Hack The Box", "Obsidian"]
                            .map(tool => (
                              <span key={tool} className="text-base text-neutral-300">{tool}</span>
                            ))
                          }
                        </div>
                      </div>

                      {/* Timeline & Summary Column */}
                      <div className="flex flex-col gap-4">
                        <div>
                          <h2 className="text-xl mb-2">Timeline</h2>
                          <p className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">22 Days, April 2024</p>
                        </div>

                        <div>
                          <h2 className="text-xl mb-2">Summary</h2>
                          <p className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                            A 22-day intensive cybersecurity challenge focusing on Capture The Flag exercises, 
                            covering web exploitation, cryptography, and system vulnerabilities. 
                          </p>
                          <br />
                          <p className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                          Each day presented a new challenge from platforms like PicoCTF and Hack The Box, building practical skills in penetration testing and security analysis.

                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Overview */}
                    <section id="overview" className="max-w-[85rem] mx-auto mb-20 pt-12">
                      <h2 className="text-2xl mb-8">Overview</h2>
                      <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                        <p>
                          Embarking on a 22-day journey, I tackled a Capture the Flag (CTF) challenge each day, immersing myself in various cybersecurity domains. This endeavor encompassed tasks in cryptography, web exploitation, SMB clients, and Windows exploitation, each designed to enhance my problem-solving skills and deepen my understanding of cybersecurity principles. The experience underscored the importance of perseverance, teamwork, and continuous learning in the cybersecurity field.
                        </p>
                      </div>
                    </section>

                    {/* Learning Platforms */}
                    <section id="learning" className="max-w-[85rem] mx-auto mb-20 pt-12">
                      <h2 className="text-2xl mb-8">Learning Platforms</h2>
                      <div className="grid grid-cols-1 gap-24">
                        <div className="space-y-6">
                          <h3 className="text-xl">PicoCTF 2023</h3>
                          <p className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                            Developed by Carnegie Mellon University, PicoCTF is a free computer security education program that employs a capture-the-flag framework. It offers original content across six cybersecurity categories, including forensics, web exploitation, cryptography, and general skills. The labs are concise and accessible, utilizing a web shell interface. General skills labs cater to Linux novices, while areas like cryptography and forensics introduce tools such as Binwalk, Steghide, and basic Open Source Intelligence (OSINT) utilities.
                          </p>
                        </div>

                        <div className="space-y-6">
                          <h3 className="text-xl">Hack The Box Starting Point</h3>
                          <p className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                            Hack The Box is a premier platform for gamified cybersecurity upskilling, certification, and talent assessment. The "Starting Point" series is tailored for beginners, featuring straightforward exploit paths that introduce users to penetration testing.
                          </p>
                          <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                            <p><strong>Tier 1:</strong> Focuses on the fundamentals of cybersecurity pen-testing, including anonymous connections to services like FTP, SMB, Telnet, Rsync, and RDP, and utilizing Nmap for identifying open ports.</p>
                            <p><strong>Tier 2:</strong> Dives deeper into beginner-friendly web exploitation techniques, such as SQL injection, Server Side Template Injection, and Remote File Inclusion, applying these methods to exploit various services.</p>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Methodology */}
                    <section id="methodology" className="max-w-[85rem] mx-auto mb-20 pt-12">
                      <h2 className="text-2xl mb-8">Methodology</h2>
                      <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                        <p>Throughout the challenge, I adhered to a structured approach:</p>
                        <ol className="list-decimal list-inside space-y-6 text-base text-neutral-300 leading-relaxed text-justify ">
                          <li><strong>Resource Utilization:</strong> Leveraged platforms like Google and YouTube for research and guidance.</li>
                          <li><strong>Tool Application:</strong> Employed various Linux tools, including Nmap for network scanning, Binwalk for analyzing binary files, and Smbclient for SMB protocol interactions.</li>
                          <li><strong>Note-Taking:</strong> Maintained detailed documentation of tools, methods, and methodologies using Obsidian, facilitating efficient recall and application in future challenges.</li>
                        </ol>
                      </div>
                    </section>

                    {/* Challenges and Solutions */}
                    <section id="challenges" className="max-w-[85rem] mx-auto mb-20 pt-12">
                      <h2 className="text-2xl mb-8">Challenges and Solutions</h2>
                      <div className="grid grid-cols-1 gap-8">
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Web Exploitation Labs</h3>
                          <p className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                            Encountered difficulties in web exploitation tasks, which required a deeper understanding of web development tools and frameworks. Overcame these challenges through persistent learning and application of new techniques.
                          </p>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Advanced Machines on Hack The Box</h3>
                          <p className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                            Faced complex machines that demanded a solid grasp of network protocols and exploitation methods. Addressed these by studying relevant materials and applying learned concepts methodically.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* Results and Impact */}
                    <section id="results" className="max-w-[85rem] mx-auto mb-20 pt-12">
                      <h2 className="text-2xl mb-8">Results and Impact</h2>
                      <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                        <p>Completing the 22-day CTF challenge yielded significant outcomes:</p>
                        <ul className="list-disc list-inside space-y-4 pl-4">
                          <li><strong>Enhanced Skills:</strong> Developed a robust understanding of various cybersecurity domains, including cryptography, web exploitation, and network protocols.</li>
                          <li><strong>Problem-Solving Abilities:</strong> Improved analytical and critical thinking skills through daily problem-solving exercises.</li>
                          <li><strong>Professional Growth:</strong> Gained practical experience and confidence, contributing to my development as a cybersecurity professional.</li>
                        </ul>
                      </div>
                    </section>

                    {/* Conclusion */}
                    <section id="conclusion" className="max-w-[85rem] mx-auto mb-20 pt-12">
                      <h2 className="text-2xl mb-8">Conclusion</h2>
                      <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                        <p>
                          The "22 Days, 22 Capture the Flag Challenge" was a transformative experience that deepened my cybersecurity expertise and reinforced the value of continuous learning and perseverance. The challenges encountered and overcome during this period have equipped me with the skills and confidence to tackle complex cybersecurity issues in the future.
                        </p>
                      </div>
                    </section>

                    {/* Platform Images */}
                    <section id="platforms" className="max-w-[85rem] mx-auto mb-20 pt-12">
                      <h2 className="text-2xl mb-8">Platforms Used</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* PicoCTF Image */}
                        <div className="relative aspect-video">
                          <Image
                            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*s1I6KIzJDNBLU5w6iWkEgA.png"
                            alt="PicoCTF Platform"
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>

                        {/* Hack The Box Image */}
                        <div className="relative aspect-video">
                          <Image
                            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*yz8MG2gH63sywwpiKYoTrQ.png"
                            alt="Hack The Box Platform"
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </section>

                    {/* Update Resources section with all links */}
                    <section id="resources" className="max-w-[85rem] mx-auto mb-20 pt-12">
                      <h2 className="text-2xl mb-8">Resources</h2>
                      <div className="flex flex-col space-y-4">
                        {[
                          { name: "PicoCTF 2023", url: "https://picoctf.org" },
                          { name: "Hack The Box", url: "https://hackthebox.com" },
                          { name: "Obsidian", url: "https://obsidian.md" },
                          { name: "CTF Guide", url: "https://trailofbits.github.io/ctf/" }
                        ].map((resource) => (
                          <Link 
                            key={resource.name}
                            href={resource.url}
                            target="_blank"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {resource.name} →
                          </Link>
                        ))}
                      </div>
                    </section>

                    
                  </div>

                  {/* Table of Contents */}
                  <div className={TOC_STYLES.container}>
                    <div ref={tocRef} className={TOC_STYLES.title}>
                      Contents
                    </div>
                    <nav className={TOC_STYLES.nav}>
                      {tableOfContents.map(({ id, label }) => (
                        <a
                          key={id}
                          href={`#${id}`}
                          onClick={(e) => scrollToSection(e, id)}
                          className={TOC_STYLES.link(activeSection === id)}
                        >
                          {label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </PageLayout>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
