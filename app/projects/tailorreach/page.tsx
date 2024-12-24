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

export default function TailorReachPage() {
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
    { id: 'impact', label: 'Impact' },
    { id: 'features', label: 'Key Features' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'learnings', label: 'Learnings' },
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
          <Loading key="loading" projectName="TailorReach" />
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
                  href="https://github.com/aymn-mohd/tailorreach-demo"
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
                      TailorReach
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
                            rgba(255, 165, 0, 0.4) 0%,
                            rgba(255, 140, 0, 0.3) 25%,
                            rgba(255, 69, 0, 0.2) 50%,
                            rgba(0, 0, 0, 0) 70%
                          )
                        `,
                        transform: 'translateY(-10%) scale(1.5)',
                        filter: 'blur(60px)',
                        animation: 'pulse 8s ease-in-out infinite',
                      }} 
                    />
                    <div 
                      className="relative w-full aspect-[16/9] overflow-hidden rounded-lg ring-1 ring-orange-500/20"
                      style={{
                        boxShadow: `
                          0 0 50px rgba(255, 165, 0, 0.2),
                          0 0 100px rgba(255, 140, 0, 0.1),
                          0 0 150px rgba(255, 69, 0, 0.05)
                        `
                      }}
                    >
                      <Image
                        src="/projects/imgs/tailorreach.png"
                        alt="TailorReach Project Overview"
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
                          "Supabase",
                          "PostgreSQL",
                          "Redis",
                          "Vercel",
                          "Open AI API",

                        ].map(tool => (
                          <span key={tool} className="text-base text-neutral-300">{tool}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <h2 className="text-xl mb-2">Timeline</h2>
                        <p className="text-base text-neutral-300">September - November, 2024</p>
                      </div>

                      <div>
                        <h2 className="text-xl mb-2">Summary</h2>
                        <p className="text-base text-neutral-300 leading-relaxed">
                          An AI-powered recruitment platform that revolutionizes hiring by matching candidates with opportunities using advanced algorithms and comprehensive skill analysis.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content sections */}
                  <section id="overview" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Overview</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        TailorReach was developed to address a critical challenge in modern marketing: delivering meaningful, personalized customer engagement at scale. By combining advanced AI tools, seamless integrations, and an intuitive interface, TailorReach empowers businesses to connect with their audience across multiple channels without sacrificing personalization.
                      </p>
                    </div>
                  </section>

                  <section id="challenge" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Challenge</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        In an increasingly crowded digital landscape, businesses often struggle to create campaigns that resonate on a personal level. Generic outreach efforts lead to poor engagement rates, wasted marketing budgets, and missed opportunities to build strong customer relationships.
                      </p>
                      <p>
                        TailorReach aimed to bridge this gap by enabling businesses to create targeted campaigns that reflect customer needs, behaviors, and preferences, all while minimizing the operational burden of manual personalization.
                      </p>
                    </div>
                  </section>

                  <section id="solution" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Solution</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        TailorReach integrates advanced AI capabilities with a focus on ease of use to provide businesses with comprehensive marketing solutions. The platform's implementation involves a streamlined onboarding process that ensures minimal disruption to business operations:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="space-y-4">
                          <h3 className="text-xl text-neutral-200">Key Benefits</h3>
                          <ul className="list-disc list-inside space-y-2">
                            <li>Dynamic Personalization through behavioral and demographic data analysis</li>
                            <li>Omnichannel Outreach across email, SMS, WhatsApp, and social media</li>
                            <li>Seamless Integration with existing CRM tools and business software</li>
                            <li>Real-Time Analytics for actionable campaign insights</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-xl text-neutral-200">Implementation Steps</h3>
                          <ul className="list-disc list-inside space-y-2">
                            <li>Integration with existing customer databases</li>
                            <li>Campaign Design using pre-built templates</li>
                            <li>Automation setup for triggered communications</li>
                            <li>Analytics and Optimization configuration</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="impact" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Impact</h2>
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-800/50 rounded-lg">
                          <h3 className="text-xl text-neutral-200 mb-2">Scalability</h3>
                          <p className="text-base text-neutral-300">
                            Enabled small and medium-sized businesses to operate with enterprise-level sophistication in their outreach capabilities
                          </p>
                        </div>
                        <div className="p-6 bg-gray-800/50 rounded-lg">
                          <h3 className="text-xl text-neutral-200 mb-2">Efficiency</h3>
                          <p className="text-base text-neutral-300">
                            Significantly improved lead conversion rates through automated, personalized follow-ups
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4 text-base text-neutral-300 leading-relaxed text-justify">
                        <p>
                          The platform has been successfully deployed across diverse industries, from retail to real estate. For instance, a real estate business leveraged TailorReach to streamline communication with potential buyers, delivering personalized follow-ups that significantly improved lead conversion rates. By automating updates on property listings and providing tailored suggestions, the business saved time and strengthened customer trust.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="features" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {[
                        {
                          title: "Dynamic Personalization",
                          description: "Advanced AI-driven customization of communication for various customer segments based on behavioral and demographic data analysis."
                        },
                        {
                          title: "Omnichannel Integration",
                          description: "Seamless engagement across multiple channels including email, SMS, WhatsApp, and social media platforms."
                        },
                        {
                          title: "Real-Time Analytics",
                          description: "Comprehensive dashboards providing actionable insights into campaign performance and customer engagement metrics."
                        },
                        {
                          title: "Automated Workflows",
                          description: "Intelligent automation of communication triggered by specific customer actions and behaviors."
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

                  <section id="tech-stack" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Tech Stack</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        TailorReach was built using a modern tech stack that ensures scalability, performance, and maintainability:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Next.js and TypeScript for the responsive frontend interface</li>
                        <li>Supabase backend services</li>
                        <li>PostgreSQL and Redis for efficient data management</li>
                        <li>Open AI API for advanced AI personalization</li>
                        <li>Vercel for scalable deployment</li>
                      </ul>
                    </div>
                  </section>

                  <section id="learnings" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Future Developments</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed text-justify">
                      <p>
                        The TailorReach team is dedicated to continuous improvement, with several exciting developments on the horizon:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Enhanced predictive analytics capabilities</li>
                        <li>AI-driven content recommendations</li>
                        <li>Expanded integration with new marketing platforms</li>
                        <li>Advanced data privacy and compliance features</li>
                      </ul>
                      <p className="mt-6">
                        TailorReach exemplifies how technology can transform customer engagement. By automating personalization, simplifying omnichannel outreach, and delivering actionable insights, it empowers businesses to forge deeper connections with their customers.
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
