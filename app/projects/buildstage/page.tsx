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

export default function BuildStagePage() {
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
    { id: 'challenge', label: 'Challenge' },
    { id: 'solution', label: 'Solution' },
    { id: 'features', label: 'Key Features' },
    { id: 'impact', label: 'Impact' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'future', label: 'Future Vision' },
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
          <Loading key="loading" projectName="Buildstage" />
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
                  href="https://github.com/yourusername/buildstage"
                  target="_blank"
                  className="text-neutral-400 hover:text-white transition-colors text-lg flex items-center gap-2"
                >
                  View Project
                  <ExternalLink size={16} />
                </Link>
              </nav>

              <div className="grid grid-cols-[1fr_min(65ch,90%)_1fr] gap-x-6 px-4">
                <div className="col-start-2 py-16">
                  {/* Header */}
                  <div className="mb-6 text-center">
                    <h1 className={`${appleGaramond.className} text-2xl md:text-4xl lg:text-5xl mb-3 italic`}>
                      BuildStage
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
                            rgba(29, 78, 216, 0.4) 0%,
                            rgba(67, 56, 202, 0.3) 25%,
                            rgba(88, 28, 135, 0.2) 50%,
                            rgba(0, 0, 0, 0) 70%
                          )
                        `,
                        transform: 'translateY(-10%) scale(1.5)',
                        filter: 'blur(60px)',
                        animation: 'pulse 8s ease-in-out infinite',
                      }} 
                    />
                    <div 
                      className="relative w-full aspect-[16/9] overflow-hidden rounded-lg ring-1 ring-blue-500/20"
                      style={{
                        boxShadow: `
                          0 0 50px rgba(29, 78, 216, 0.2),
                          0 0 100px rgba(67, 56, 202, 0.1),
                          0 0 150px rgba(88, 28, 135, 0.05)
                        `
                      }}
                    >
                      <Image
                        src="/projects/imgs/buildstage.png"
                        alt="BuildStage Project Overview"
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

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-8 max-w-[90rem] mx-auto mt-8 mb-12">
                    <div>
                      <h2 className="text-xl mb-2">Tools</h2>
                      <div className="flex flex-col gap-1">
                        {[
                          "Next.js",
                          "TypeScript",
                          "Tailwind CSS",
                          "PostgreSQL",
                          "Vercel",
                          "Supabase"

                        ].map(tool => (
                          <span key={tool} className="text-base text-neutral-300">{tool}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <h2 className="text-xl mb-2">Timeline</h2>
                        <p className="text-base text-neutral-300">4 Months, 2024</p>
                      </div>

                      <div>
                        <h2 className="text-xl mb-2">Summary</h2>
                        <p className="text-base text-neutral-300 leading-relaxed text-justify">
                          A platform celebrating creators and their groundbreaking ideas, fostering a community dedicated to innovation and collaboration.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content sections */}
                  <section id="overview" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Overview</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        In an era where innovation and creativity drive progress, finding a platform that celebrates creators and their groundbreaking ideas is crucial. BuildStage fills this gap by offering a space where creators and enthusiasts converge to share, discover, and celebrate innovative projects. This platform serves as a bridge between visionaries and their audience, fostering a community dedicated to progress.
                      </p>
                    </div>
                  </section>

                  <section id="challenge" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Challenge</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        The creative world is filled with incredible projects that often struggle to find an audience. Creators face hurdles in showcasing their work to a wider community, while enthusiasts and collaborators lack a streamlined way to discover and connect with these innovations.
                      </p>
                      <p>
                        The challenge lay in creating a platform that not only bridges this gap but also builds a culture of creativity, collaboration, and recognition. We needed to ensure that great ideas could find their audience while maintaining a high standard of quality and engagement.
                      </p>
                    </div>
                  </section>

                  <section id="solution" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Solution</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        BuildStage emerged as a transformative solution, designed with the manifesto of empowering creators and their projects. The platform combines robust features with an intuitive interface:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="space-y-4">
                          <h3 className="text-xl text-neutral-200">Core Components</h3>
                          <ul className="list-disc list-inside space-y-2">
                            <li>Showcasing Projects with rich media support</li>
                            <li>Discovery Engine for exploring innovations</li>
                            <li>Community-Centric Design for collaboration</li>
                            <li>Engagement Tools for meaningful interaction</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl text-neutral-200">Platform Values</h3>
                          <ul className="list-disc list-inside space-y-2">
                            <li>Transparency in project presentation</li>
                            <li>Creativity in problem-solving</li>
                            <li>Collective growth through collaboration</li>
                            <li>Recognition of innovative ideas</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="features" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {[
                        {
                          title: "Dynamic Profiles",
                          description: "Rich project presentations with multimedia support, allowing creators to showcase their work comprehensively."
                        },
                        {
                          title: "Discovery Engine",
                          description: "Advanced search and recommendation system helping users find projects aligned with their interests."
                        },
                        {
                          title: "Community Tools",
                          description: "Interactive features for voting, commenting, and sharing, fostering meaningful engagement and discussion."
                        },
                        {
                          title: "Cross-Domain Exploration",
                          description: "Platform design encouraging exploration across different fields, from technology to art and beyond."
                        }
                      ].map((feature) => (
                        <div key={feature.title} className="space-y-4">
                          <h3 className="text-xl text-neutral-200">{feature.title}</h3>
                          <p className="text-base text-neutral-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="impact" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Impact</h2>
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-800/50 rounded-lg">
                          <h3 className="text-xl text-neutral-200 mb-2">Creator Growth</h3>
                          <p className="text-base text-neutral-300">
                            Thousands of creators have found new audiences and collaborators through the platform
                          </p>
                        </div>
                        <div className="p-6 bg-gray-800/50 rounded-lg">
                          <h3 className="text-xl text-neutral-200 mb-2">Community Engagement</h3>
                          <p className="text-base text-neutral-300">
                            Active community driving meaningful discussions and collaborations across projects
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4 text-base text-neutral-300 leading-relaxed text-justify">
                        <p>
                          BuildStage has become more than just a platform—it's a movement driving innovation and discovery in the modern world. The platform's success in fostering cross-domain collaboration and meaningful engagement demonstrates the power of bringing creators and enthusiasts together in a purposeful way.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="tech-stack" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Tech Stack</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        BuildStage leverages modern technologies to ensure scalability, performance, and an excellent user experience:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Next.js and TypeScript for a robust frontend</li>
                        <li>PostgreSQL and Supabase for data management</li>
                        <li>Vercel for seamless hosting and CI/CD</li>
                      </ul>
                    </div>
                  </section>

                  <section id="future" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Future Vision</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        As BuildStage continues to evolve, several exciting developments are on the horizon:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Enhanced collaboration tools for team projects</li>
                        <li>AI-powered project recommendations</li>
                        <li>Expanded multimedia support for diverse project types</li>
                        <li>Integration with more development and creative platforms</li>
                      </ul>
                      <p className="mt-6">
                        BuildStage stands as a testament to the power of a shared vision. By combining robust tools with a manifesto-driven approach, it has created a thriving ecosystem for creators and enthusiasts alike, continuing to drive innovation and discovery in the modern world.
                      </p>
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
            </PageLayout>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

