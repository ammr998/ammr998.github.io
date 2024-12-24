"use client";
import { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { appleGaramond, liberationSans, inter } from "@/lib/fonts";
import { ExternalLink } from 'lucide-react';
import Cursor from '@/components/ui/cursor';
import PageLayout from "@/components/layout/page-layout";
import { TOC_STYLES } from '@/lib/constants';
import Loading from "@/components/ui/loading";

export default function FIMPage() {
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

  useEffect(() => {
    const updateScrollLimits = () => {
      const headerElement = document.querySelector('h1');  // Start from title
      const resourcesElement = document.querySelector('#resources');  // End at resources
      
      if (headerElement && resourcesElement && tocRef.current) {
        const startPos = headerElement.getBoundingClientRect().top + window.scrollY;
        const endPos = resourcesElement.getBoundingClientRect().top + window.scrollY - tocRef.current.offsetHeight;
        
        document.documentElement.style.setProperty('--scroll-start', `${startPos}px`);
        document.documentElement.style.setProperty('--scroll-end', `${endPos}px`);
      }
    };

    updateScrollLimits();
    window.addEventListener('scroll', updateScrollLimits);
    window.addEventListener('resize', updateScrollLimits);
    
    return () => {
      window.removeEventListener('scroll', updateScrollLimits);
      window.removeEventListener('resize', updateScrollLimits);
    };
  }, []);

  const tableOfContents = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'technical', label: 'Technical Implementation' },
    { id: 'functions', label: 'Key Functions' },
    { id: 'results', label: 'Results & Impact' },
    { id: 'design', label: 'Design & Future' },
    { id: 'implementation', label: 'Implementation' },
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
          <Loading key="loading" projectName="File Integrity Manager" />
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
                  href="https://github.com/Aymn-Mohd/File_integrity_manager"
                  target="_blank"
                  className="text-neutral-400 hover:text-white transition-colors text-lg flex items-center gap-2"
                >
                  Github
                  
                  <ExternalLink size={16} />
                </Link>
              </nav>

              <div className="grid grid-cols-[1fr_min(65ch,90%)_1fr] gap-x-6 px-4">
                <div className="col-start-2 py-16">
                  {/* Header */}
                  <div className="mb-6 text-center">
                    <h1 className={`${appleGaramond.className} text-2xl md:text-4xl lg:text-5xl mb-3 italic`}>
                      File Integrity Manager
                    </h1>
                    <p className={`${liberationSans.className} text-neutral-400 text-lg`}>
                      Project, 2023
                    </p>
                  </div>

                  {/* Hero Image with Gradient */}
<div className="relative mt-12 mb-24">
  <div 
    className="absolute -inset-0 blur-[120px] opacity-70"
    style={{ 
      background: `
        radial-gradient(circle at 50% 50%, 
          rgba(217, 119, 6, 0.4) 0%,
          rgba(180, 83, 9, 0.3) 25%,
          rgba(146, 64, 14, 0.2) 50%,
          rgba(0, 0, 0, 0) 70%
        )
      `,
      transform: 'translateY(-10%) scale(1.5)',
      filter: 'blur(60px)',
      animation: 'pulse 8s ease-in-out infinite',
    }} 
  />
  <div 
    className="relative w-full aspect-[16/9] overflow-hidden rounded-lg ring-1 ring-amber-600/20"
    style={{
      boxShadow: `
        0 0 50px rgba(217, 119, 6, 0.2),
        0 0 100px rgba(180, 83, 9, 0.1),
        0 0 150px rgba(146, 64, 14, 0.05)
      `
    }}
  >
    <Image
      src="/projects/imgs/fim.png"
      alt="FIM Project Overview"
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

                  {/* Info Grid with Tools, Timeline & Summary */}
                  <div className="grid grid-cols-2 gap-8 max-w-[90rem] mx-auto mt-8 mb-12">
                    {/* Tools Column */}
                    <div>
                      <h2 className="text-xl mb-2">Tools</h2>
                      <div className="flex flex-col gap-1">
                        {["Python", "Hashlib", "OS Module", "Time Module"].map(tool => (
                          <span key={tool} className="text-base text-neutral-300">{tool}</span>
                        ))}
                      </div>
                    </div>

                    {/* Timeline & Summary Column */}
                    <div className="flex flex-col gap-4">
                      <div>
                        <h2 className="text-xl mb-2">Timeline</h2>
                        <p className="text-base text-neutral-300">2 Weeks, December 2023</p>
                      </div>

                      <div>
                        <h2 className="text-xl mb-2">Summary</h2>
                        <p className="text-base text-neutral-300 leading-relaxed text-justify">
                          A cybersecurity tool designed to monitor and protect the integrity of critical text files through real-time cryptographic hash comparisons, ensuring file authenticity and detecting unauthorized changes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Overview */}
                  <section id="overview" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Overview</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        The File Integrity Manager (FIM) is a cybersecurity project designed to monitor and protect the integrity of critical text files...
                      </p>
                    </div>
                  </section>

                  {/* Key Features */}
                  <section id="features" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {[
                        {
                          title: "Baseline Creation",
                          description: "Create and store cryptographic hash values for files, establishing secure reference points for integrity monitoring."
                        },
                        {
                          title: "Real-Time Monitoring",
                          description: "Continuous file monitoring with instant alerts for unauthorized modifications, ensuring immediate threat response."
                        },
                        {
                          title: "User Interface",
                          description: "Clear prompts for creating baselines, updating hashes, and monitoring files, making it accessible for beginners."
                        },
                        {
                          title: "Security",
                          description: "SHA-256 hashing ensures reliable detection of unauthorized modifications with high confidence in file integrity."
                        }
                      ].map((feature) => (
                        <div key={feature.title} className="space-y-4">
                          <h3 className="text-xl text-neutral-200">{feature.title}</h3>
                          <p className="text-base text-neutral-300 leading-relaxed text-justify">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Technical Implementation */}
                  <section id="technical" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Technical Implementation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h3 className="text-xl text-neutral-200 mb-4">Cryptographic Hashing</h3>
                        <p className="text-base text-neutral-300 leading-relaxed text-justify">
                          The FIM uses SHA-256 hashing for its reliability and resistance to collision attacks. This ensures high confidence in detecting unauthorized file modifications.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl text-neutral-200 mb-4">Directory Structure</h3>
                        <ul className="list-disc list-inside text-base text-neutral-300 space-y-2">
                          <li>A root directory for project files</li>
                          <li>A dedicated "hash" folder to securely store baseline hashes</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Key Functions */}
                  <section id="functions" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Key Functions</h2>
                    <div className="grid grid-cols-1 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-xl text-neutral-200">Baseline Creation and Updating</h3>
                        <p className="text-base text-neutral-300 leading-relaxed text-justify">
                          The baseline() function allows users to check if a hash exists, update existing hashes after authorized changes, and create baselines for new files.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl text-neutral-200">Monitoring</h3>
                        <p className="text-base text-neutral-300 leading-relaxed text-justify">
                          The monitor() function runs in a loop, comparing current file hashes with baselines and logging any detected changes.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl text-neutral-200">New File Creation</h3>
                        <p className="text-base text-neutral-300 leading-relaxed text-justify">
                          The newtext() function facilitates creating and initializing files directly within the tool, ensuring all files have associated baseline hashes.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Results & Impact */}
                  <section 
                    id="results" 
                    className="max-w-[85rem] mx-auto mb-20 pt-12"
                  >
                    <h2 className="text-2xl mb-8">Results & Impact</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        The File Integrity Manager delivers robust functionality, demonstrating effective file monitoring using hash-based integrity checks and practical application of cybersecurity principles, particularly the CIA triad.
                      </p>
                      <p>
                        Building the FIM honed skills in Python, hashing algorithms, and systems design. It provided hands-on experience in implementing cryptographic methods, designing user-centric tools, and addressing challenges like secure storage and dynamic monitoring.
                      </p>
                    </div>
                  </section>

                  {/* Design & Future Enhancements */}
                  <section id="design" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Design & Future Enhancements</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        The FIM employs a command-line interface to keep the focus on functionality while providing an intuitive user experience. The modular design ensures maintainability and extensibility.
                      </p>
                      <ul className="list-disc list-inside space-y-2 mt-4">
                        <li>Monitoring additional file types</li>
                        <li>Adding encryption for the hash storage directory</li>
                        <li>Implementing a graphical user interface (GUI)</li>
                      </ul>
                    </div>
                  </section>

                  {/* Implementation Images */}
                  <section id="implementation" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Implementation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative aspect-video">
                        <Image
                          src="https://miro.medium.com/v2/resize:fit:1330/format:webp/1*y3JbJRy-9R3GtLBM4YQ7RA.png"
                          alt="FIM Interface"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="relative aspect-video">
                        <Image
                          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9v87CUe2tZ0tathq725i7A.png"
                          alt="FIM Monitoring"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Resources */}
                  <section id="resources" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Resources</h2>
                    <div className="flex flex-col space-y-4">
                      <Link 
                        href="https://github.com/Aymn-Mohd/File_integrity_manager"
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                      >
                        View on GitHub
                        <ExternalLink size={16} />
                      </Link>
                    </div>
                  </section>
                </div>

                {/* Clean TOC without debug styles */}
                <div 
                  ref={tocRef}
                  className={TOC_STYLES.container}
                >
                  <div className={TOC_STYLES.wrapper}>
                    <div className={TOC_STYLES.title}>
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