


"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Cloud,
  Database,
  Lightning,
  Cpu,
  ShieldCheck,
} from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

// const Spline = dynamic(() => import("@splinetool/react-spline/lib/components/Spline"), {
//   ssr: false,
// });
import Spline from '@splinetool/react-spline';


const skills = [
  { icon: Code, label: "MERN Stack", color: "from-blue-500 to-cyan-500" },
  { icon: Cloud, label: "AWS Cloud", color: "from-orange-500 to-yellow-500" },
  { icon: Database, label: "MongoDB", color: "from-green-500 to-emerald-500" },
  { icon: Lightning, label: "Express.js", color: "from-red-500 to-pink-500" },
  { icon: Cpu, label: "React.js", color: "from-blue-400 to-indigo-500" },
  { icon: ShieldCheck, label: "Cybersecurity", color: "from-purple-500 to-pink-500" },
];

const About = () => {
  const sectionRef = useRef(null);
const textRef = useRef<HTMLDivElement>(null);
const skillsRef = useRef<HTMLDivElement>(null);


  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
  if (!splineLoaded) return;

  const section = sectionRef.current;
  const text = textRef.current;
  const skills = skillsRef.current;

  if (!section || !text || !skills) return;

  gsap.fromTo(
    section,
    { opacity: 0, y: 100, skewY: 4 },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    Array.from(text.children),
    { opacity: 0, y: 60, skewY: 5 },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: text,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    Array.from(skills.children),
    { opacity: 0, y: 40, skewY: 6 },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: skills,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    }
  );
}, [splineLoaded]);


  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a0a0a] py-20 lg:py-32"
    >
      <div className="container mx-auto px-8 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Spline Robot */}
          <div className="h-[400px] w-full sm:h-[500px] lg:h-[600px]">
            <Spline
              scene="https://prod.spline.design/vo8faOwKVPnVA0bU/scene.splinecode"
              onLoad={() => setSplineLoaded(true)}
            />
          </div>

          {/* Content */}
          <div ref={textRef} className="flex flex-col justify-center">
            <h2 className="mb-4 text-4xl font-bold text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="mb-6 text-gray-400">
              Final year Electronics and Communication Engineering student at SSN College of Engineering, Chennai, with a strong focus on full-stack development, cloud computing, and cybersecurity.

I’ve built production-grade applications using modern web stacks (React, Node.js, MongoDB, Docker) and gained deep practical exposure to cybersecurity during my internship at Bahwan CyberTek, working with SIEM (Wazuh), EDR (CrowdStrike), vulnerability scanners (Qualys VMDR), and ISO 27001 compliance workflows.

With a passion for building secure, scalable systems, I bridge software engineering with information security. I'm always looking to innovate, collaborate, and deliver impactful tech solutions.
            </p>

            <h3 className="mb-3 font-semibold text-purple-400">Tech Stack</h3>
            <div className="overflow-hidden whitespace-nowrap">
              <div
                ref={skillsRef}
                className="inline-block animate-marquee space-x-6"
              >
                {skills.map(({ icon: Icon, label, color }, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center space-x-2 rounded-xl bg-gray-800 px-4 py-2 text-sm text-white shadow-md"
                  >
                    <Icon size={20} weight="duotone" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <span className="rounded-full bg-purple-700 px-4 py-1 text-white">
                2+ Years Experience
              </span>
              <span className="rounded-full bg-blue-700 px-4 py-1 text-white">
                20+ Projects
              </span>
              <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-white">
                Full Stack Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
