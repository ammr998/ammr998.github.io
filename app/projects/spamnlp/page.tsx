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

export default function SpamNLPPage() {
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
    { id: 'problem', label: 'Problem Statement' },
    { id: 'approach', label: 'The Approach' },
    { id: 'features', label: 'Key Features' },
    { id: 'technical', label: 'Technical Details' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'results', label: 'Results & Impact' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'future', label: 'Future Enhancements' },
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
          <Loading key="loading" projectName="Spam NLP" />
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
                  href="https://github.com/yourusername/spam-nlp"
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
                      Spam-Ham Classifier with NLP
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
          rgba(147, 51, 234, 0.4) 0%,
          rgba(126, 34, 206, 0.3) 25%,
          rgba(107, 33, 168, 0.2) 50%,
          rgba(0, 0, 0, 0) 70%
        )
      `,
      transform: 'translateY(-10%) scale(1.5)',
      filter: 'blur(60px)',
      animation: 'pulse 8s ease-in-out infinite',
    }} 
  />
  <div 
    className="relative w-full aspect-[16/9] overflow-hidden rounded-lg ring-1 ring-purple-500/20"
    style={{
      boxShadow: `
        0 0 50px rgba(147, 51, 234, 0.2),
        0 0 100px rgba(126, 34, 206, 0.1),
        0 0 150px rgba(107, 33, 168, 0.05)
      `
    }}
  >
    <Image
      src="/projects/imgs/spam.png"
      alt="Spam NLP Project Overview"
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
                          "Python",
                          "NLTK",
                          "Scikit-learn",
                          "Pandas",
                          "Streamlit",
                          "TF-IDF"
                        ].map(tool => (
                          <span key={tool} className="text-base text-neutral-300">{tool}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <h2 className="text-xl mb-2">Timeline</h2>
                        <p className="text-base text-neutral-300">3 Weeks, January 2024</p>
                      </div>

                      <div>
                        <h2 className="text-xl mb-2">Summary</h2>
                        <p className="text-base text-neutral-300 leading-relaxed">
                          A machine learning project combining NLP and web technologies to create an intuitive spam detection system with over 96% accuracy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content sections */}
                  <section id="overview" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Overview</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed">
                      <p>
                        In today's world, the ability to identify spam messages is critical for businesses and individuals. As part of a project, I designed and developed a Spam-Ham classifier using Natural Language Processing (NLP) and an intuitive WebUI. This project combined advanced machine learning techniques with practical front-end design to deliver a solution capable of distinguishing between spam and non-spam messages in real time.
                      </p>
                    </div>
                  </section>

                  {/* Problem Statement */}
                  <section id="problem" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Problem Statement</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed">
                      <p>
                        Spam messages often infiltrate our communication channels, leading to inefficiencies and potential security risks. Traditional filtering systems, though effective to an extent, lack adaptability and transparency. This project aimed to bridge the gap by creating a modern, user-friendly spam detection model with a clear web interface, empowering users to analyze and classify messages effortlessly.
                      </p>
                    </div>
                  </section>

                  {/* The Approach */}
                  <section id="approach" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">The Approach</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed">
                      <p>
                        The project utilized the SMS Spam Collection dataset, which contains labeled messages categorized as spam or ham. The data underwent preprocessing to clean, tokenize, and vectorize text. Techniques such as TF-IDF were employed to create meaningful representations of the text data for the machine learning model.
                      </p>
                      <p>
                        For classification, I chose logistic regression due to its balance of simplicity and performance. To enhance the user experience, I built a WebUI using Streamlit, which allows users to interact with the model directly by typing or pasting messages for classification.
                      </p>
                    </div>
                  </section>

                  {/* Key Features */}
                  <section id="features" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {[
                        {
                          title: "Real-time Predictions",
                          description: "Users can input messages directly into the WebUI and receive instant feedback on whether the message is spam or ham."
                        },
                        {
                          title: "Interactive Design",
                          description: "The WebUI was built to ensure non-technical users could easily classify messages."
                        },
                        {
                          title: "Transparency",
                          description: "The classifier not only categorizes messages but also provides confidence scores, adding a layer of transparency to the results."
                        },
                        {
                          title: "High Accuracy",
                          description: "Achieved over 96% accuracy on the test dataset, demonstrating reliable spam detection capabilities."
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

                  {/* Technical Details */}
                  <section id="technical" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Technical Details</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed">
                      <p>
                        The classifier was developed using Python, leveraging libraries such as Pandas, NLTK, and Scikit-learn for data preprocessing and model development. Streamlit was used for the WebUI, ensuring an efficient and lightweight interface for users.
                      </p>
                    </div>
                  </section>

                  {/* Challenges */}
                  <section id="challenges" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Challenges</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed">
                      <p>
                        One of the main challenges was ensuring the classifier handled edge cases effectively, such as messages with ambiguous or misleading content. Another hurdle was optimizing the preprocessing pipeline to ensure the model maintained a balance between speed and accuracy.
                      </p>
                    </div>
                  </section>

                  {/* Results & Impact */}
                  <section id="results" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Results & Impact</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed">
                      <p>
                        The Spam-Ham classifier achieved an accuracy of over 96% on the test dataset, demonstrating its capability to distinguish between spam and ham messages effectively. The intuitive WebUI made the solution accessible to users with no prior technical knowledge, paving the way for broader adoption.
                      </p>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Conclusion</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed">
                      <p>
                        This project showcased the potential of combining NLP with an interactive WebUI to solve real-world problems. By addressing the challenges of spam detection, this solution highlights how machine learning can empower users with tools to improve communication efficiency and security.
                      </p>
                    </div>
                  </section>

                  {/* Future Enhancements */}
                  <section id="future" className="max-w-[85rem] mx-auto mb-20 pt-12">
                    <h2 className="text-2xl mb-8">Future Enhancements</h2>
                    <div className="space-y-6 text-base text-neutral-300 leading-relaxed">
                      <p>
                        Looking ahead, the classifier could be further improved by:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Integrating additional datasets for better generalization</li>
                        <li>Deploying the model to cloud platforms for wider accessibility</li>
                        <li>Enhancing the UI/UX design of the WebUI</li>
                        <li>Adding support for multiple languages</li>
                      </ul>
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