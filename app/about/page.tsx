"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { appleGaramond, liberationSans } from "@/lib/fonts";
import PageLayout from "@/components/layout/page-layout";
import Loading from "@/components/ui/loading";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AboutPage() {
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
              <div className="min-h-screen px-6 sm:px-12 md:px-24 lg:px-32 py-16">
                {/* Hero Section */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-32"
                >
                  <div className="max-w-[90rem] mx-auto">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-12 items-center">
                      <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`${appleGaramond.className} text-[6rem] md:text-[8rem] lg:text-[10rem] text-neutral-300 leading-[0.9] tracking-tight`}
                      >
                        Ayman
                        <br />
                        Mohammed
                      </motion.h1>

                      <div className="relative w-full lg:w-[40rem] space-y-8">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="relative aspect-[3/2] overflow-hidden rounded-sm group"
                        >
                          <Image
                            src="/about/imgs/main_1.jpg"
                            alt="Ayman Mohammed"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-4 text-sm text-neutral-300">
                            <p className="opacity-60">Me :)</p>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="relative aspect-[3/2] overflow-hidden rounded-sm group"
                        >
                          <Image
                            src="/about/imgs/main_2.jpeg"
                            alt="Ayman Mohammed"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Info Section */}
                <motion.section 
                  {...fadeInUp}
                  className="mb-32"
                >
                  <div className="max-w-[90rem] mx-auto">
                    <h2 className={`${liberationSans.className} text-neutral-400 tracking-widest text-sm mb-12`}>INFO</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
                      <div className="space-y-12 text-neutral-300 text-xl leading-relaxed">
                        <p>I'm an undergraduate student at the University of Wollongong in Dubai Studying Computer Engineering & Autonums Systems, graduating in July of 2027.</p>
                        <p>My passion for coding ignited at the age of 10 when I joined my school's robotics team. A simple introduction to LEGO EV3 bricks sparked a fascination with programming and engineering that has only grown stronger over the years. As Innovation Captain during my school years, I had the privilege of sharing this passion with younger generations, inspiring them to explore the endless possibilities of technology.</p>
                        <p>This journey has deepened my curiosity about the global scale of networks, machine learning, and the critical importance of securing the systems that power them.</p>
                      </div>
                      <div className="space-y-12 sticky top-8">
                        <motion.div className="relative aspect-[3/2] overflow-hidden rounded-sm group">
                          <Image
                            src="/about/imgs/info_1.jpeg"
                            alt="Info image 1"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                        </motion.div>
                        <motion.div className="relative aspect-[3/2] overflow-hidden rounded-sm group">
                          <Image
                            src="/about/imgs/info_2.jpeg"
                            alt="Info image 2"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Education Section */}
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
                        <p className="text-neutral-400 text-2xl mb-8">2023 - 2027</p>
                        <p className="text-neutral-300 text-xl leading-relaxed">
                          Bachelor of Engineering (Honors) in Computer Engineering and Autonomus Systems.
                        </p>
                      </div>
                      <motion.div className="relative aspect-[3/2] overflow-hidden rounded-sm group">
                        <Image
                          src="/about/imgs/uni.jpeg"
                          alt="University campus"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 text-sm text-neutral-300">
                          <p className="opacity-60">Sunset in Uni.</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.section>

                {/* Things I Love Section */}
                <motion.section 
                  {...fadeInUp}
                >
                  <div className="max-w-[90rem] mx-auto">
                    <h2 className={`${liberationSans.className} text-neutral-400 tracking-widest text-sm mb-12`}>THINGS I LOVE TO DO</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                      <div className="space-y-12">
                        <motion.div className="relative aspect-[3/2] overflow-hidden rounded-sm group">
                          <Image
                            src="/about/imgs/things_1.jpeg"
                            alt="Car passion"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-4 text-sm text-neutral-300">
                            <p className="opacity-60">Love Porsche</p>
                          </div>
                        </motion.div>
                      </div>
                      <div className="flex flex-col justify-center space-y-12">
                        <p className="text-xl text-neutral-300 leading-relaxed">
                          Find inspiration in beautifully designed spaces and the perfect cup of coffee.
                        </p>
                        <p className="text-xl text-neutral-300 leading-relaxed">
                          Transforming ideas into reality through code, design, and engineering.
                        </p>
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
}