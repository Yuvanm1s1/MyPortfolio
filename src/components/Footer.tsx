'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GithubLogo, LinkedinLogo, EnvelopeSimple, Phone } from 'phosphor-react';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const footer = footerRef.current;
  //   const content = contentRef.current;

  //   if (!footer || !content) return;

  //   // Animate footer content
  //   gsap.from(content, {
  //     y: 40,
  //     opacity: 0,
  //     duration: 0.8,
  //     delay: 0.2
  //   });

  //   // Animate floating particles
  //   const particles = footer.querySelectorAll('.particle');
  //   particles.forEach((particle) => {
  //     gsap.to(particle, {
  //       y: -20,
  //       duration: 'random(2, 4)',
  //       repeat: -1,
  //       yoyo: true,
  //       ease: 'power1.inOut',
  //       delay: 'random(0, 2)',
  //     });
  //   });
  // }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#0a0a0a] py-16">
      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="particle absolute h-2 w-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div
        ref={contentRef}
        className="container relative z-10 mx-auto px-8 lg:px-20">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-white">YUVAN M</h3>
            <p className="text-gray-400">
              Building innovative web solutions with modern technologies and best
              practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition-colors hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a
                  href="tel:+917358280754"
                  className="transition-colors hover:text-blue-400">
                  +91 7358280754
                </a>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeSimple size={18} />
                <a
                  href="mailto:yuvanm1s1@gmail.com"
                  className="transition-colors hover:text-blue-400">
                  yuvanm1s1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LinkedinLogo size={18} />
                <a
                  href="https://linkedin.com/in/yuvan-m-504569305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-400">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <GithubLogo size={18} />
                <a
                  href="https://github.com/Yuvanm1s1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-400">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} YUVAN M. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;