'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with loading fallback
const Preloader = dynamic(() => import('@/components/Preloader'), {
  ssr: false,
});
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const Certifications = dynamic(() => import('@/components/Certifications'), { ssr: false });


const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false,
  loading: () => <div className="h-screen bg-[#0a0a0a]" />,
});

const About = dynamic(() => import('@/components/About'), {
  ssr: false,
  loading: () => <div className="h-screen bg-[#0a0a0a]" />,
});

const Projects = dynamic(() => import('@/components/Projects'), {
  ssr: false,
  loading: () => <div className="h-screen bg-[#0a0a0a]" />,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: false,
  loading: () => <div className="h-screen bg-[#0a0a0a]" />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
  loading: () => <div className="h-96 bg-[#0a0a0a]" />,
});

export default function Home() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }
  'use client';

if (typeof window !== 'undefined') {
  // Block unhandled errors
  window.addEventListener('error', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    return false;
  });

  window.addEventListener('unhandledrejection', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    return false;
  });
}

  return (
    <main className="relative bg-[#0a0a0a] overflow-x-hidden">
      <div className="smooth-scroll">
        <section id="hero" className="section">
          <Hero />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="certifications" className="section">
          <Certifications />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  );
}