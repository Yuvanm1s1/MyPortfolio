'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'Tech Mahindra',
    role: 'Software Development Intern',
    date: 'May 2024 – Jul 2024',
    description: [
  'Built a cloud-ready CPQ (Configure Price Quote) platform using React.js, Node.js, and Docker for scalable enterprise quoting workflows.',
  'Developed a Spring Boot-based microservice API to support modular e-commerce logic and dynamic quote generation.',
  'Integrated Clerk for secure, role-based authentication and session management across the platform.',
  'Implemented real-time monitoring dashboards using Prometheus and Grafana for observability and performance tracking.',
  'Designed reusable UI components and collaborated with backend teams to ensure seamless full-stack integration.',
  'Containerized all services using Docker and configured Docker Compose for efficient local and staging environments.'
],

    image: '/techm-logo.png'
  },
  {
    company: 'Bahwan CyberTek',
    role: 'Information Security Intern',
    date: 'Jul 2024 – Aug 2024',
    description: [
      'Worked with SIEM (Wazuh), EDR (CrowdStrike), and vulnerability scanners (Qualys VMDR).',
      'Assisted in internal risk assessments, ISO 27001 audits, and cryptography compliance.',
      'Participated in internal asset audits, training compliance tracking, and pentesting coordination.',
      'Helped document ISMS reports, updated risk registers, and contributed to scorecard management.'
    ],
    image: '/bahwan-logo.png'
  },
  
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    (gsap.utils.toArray('.exp-card') as HTMLElement[]).forEach((card, i) => {
      gsap.fromTo(
        card as HTMLElement,
        { opacity: 0, x: i % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-20 lg:py-32 overflow-hidden px-8 lg:px-24"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
        Experience
      </h2>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="exp-card relative flex flex-col lg:flex-row items-center lg:items-start gap-10 bg-gray-900/40 border border-gray-700 rounded-3xl p-6 lg:p-10 shadow-xl backdrop-blur-xl"
          >
            <img
              src={exp.image}
              alt={`${exp.company} logo`}
              className="w-28 h-28 object-contain rounded-xl shadow-lg"
            />

            <div className="text-white space-y-3">
              <h3 className="text-2xl font-semibold text-purple-400">
                {exp.role} — <span className="text-white">{exp.company}</span>
              </h3>
              <p className="text-sm text-gray-400 italic">{exp.date}</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
