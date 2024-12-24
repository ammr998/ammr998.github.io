"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { appleGaramond, liberationSans } from "@/lib/fonts";
import PageLayout from "@/components/layout/page-layout";
import { Card } from "@/components/ui/card";
import Loading from "@/components/ui/loading";

const projects = [
  {
    id: 'buildstage',
    title: 'BuildStage',
    tagline: 'Discovery engine for builders and founders',
    year: '2024',
    image: '/projects/imgs/buildstage.png',
    href: '/projects/buildstage',
  },
  {
    id: 'tailorreach',
    title: 'TailorReach',
    tagline: 'Conversational AI Agents for solopreneurs, sales, SMBs',
    year: '2024',
    image: '/projects/imgs/tailorreach.png',
    href: '/projects/tailorreach',
  },
  {
    id: 'spamnlp',
    title: 'Spam NLP',
    tagline: 'NLP for spam detection',
    year: '2024',
    image: '/projects/imgs/spam.png',
    href: '/projects/spamnlp',
  },
  {
    id: '22dayctf',
    title: '22 Day CTF Challenge',
    tagline: '22 Day of Penetration Testing',
    year: '2024',
    image: '/projects/imgs/ctf.png',
    href: '/projects/22dayctf',
  },
  {
    id: 'fim',
    title: 'File Integrity Manager',
    tagline: 'File Integrity Monitoring using Python',
    year: '2023',
    image: '/projects/imgs/fim.png',
    href: '/projects/fim',
  },
];

const years = Array.from(new Set(projects.map(project => project.year))).sort((a, b) => b.localeCompare(a));

export default function ProjectsPage() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = selectedYear 
    ? projects.filter(project => project.year === selectedYear)
    : projects;

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
                {/* Header */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-16"
                >
                  <h1 className={`${appleGaramond.className} text-3xl md:text-5xl lg:text-6xl mb-6 italic`}>
                    Case Studies
                  </h1>
                  <p className={`${liberationSans.className} text-neutral-400 text-lg max-w-2xl mx-auto`}>
                    A collection of projects exploring various domains in software development, from AI and cybersecurity to web applications.
                  </p>
                </motion.div>

                {/* Year Filter */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex justify-center gap-4 mb-16"
                >
                  <button
                    onClick={() => setSelectedYear(null)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedYear === null 
                        ? 'bg-white text-black' 
                        : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                    }`}
                  >
                    All
                  </button>
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-6 py-2 rounded-full transition-all duration-300 ${
                        selectedYear === year 
                          ? 'bg-white text-black' 
                          : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card
                          title={project.title}
                          tagline={project.tagline}
                          year={project.year}
                          image={project.image}
                          href={project.href}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </PageLayout>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
