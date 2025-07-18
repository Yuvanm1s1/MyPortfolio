"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    credential: "ea5f06ff9056465f9079f1aa463cb885",
  },
  {
    title: "Google Cybersecurity Specialization",
    issuer: "Coursera",
  },
  {
    title: "Cyber Security and Privacy",
    issuer: "NPTEL (IIT Madras)",
  },
  {
    title: "Deep Learning",
    issuer: "NPTEL (IIT Ropar)",
  },
  {
    title: "Flutter Development Bootcamp",
    issuer: "Udemy",
  },
  {
    title: "Introduction to Industry 4.0 and IoT",
    issuer: "NPTEL",
  },
  {
    title: "Fuzzy Sets, Logic and Systems Applications",
    issuer: "NPTEL",
  },
];

export default function Certifications() {
  const sectionRef = useRef(null);
  const listRef = useRef<HTMLUListElement>(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    const video = videoRef.current;

    if (!section || !list || !video) return;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      video,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: video,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      list.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: list,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-24 px-6 lg:px-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Left: Video and animated icons */}
        <div
          ref={videoRef}
          className="relative rounded-3xl overflow-hidden border border-blue-500/20 backdrop-blur-lg p-3 shadow-[0_0_60px_rgba(59,130,246,0.25)] hover:scale-105 transition duration-500"
        >
          <video
            src="/certs-showcase.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Floating icons could be added here later with animation */}
        </div>

        {/* Right: Certificate List */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            Certifications & <span className="text-purple-400">Achievements</span>
          </h2>

          <ul ref={listRef} className="space-y-6">
            {certifications.map((cert, i) => (
              <li
                key={i}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-5 rounded-xl shadow-lg backdrop-blur-md hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-blue-400">
                  {cert.title}
                </h3>
                <p className="text-gray-300 text-sm">{cert.issuer}</p>
                {cert.credential && (
                  <p className="text-xs text-gray-500">
                    Credential ID: {cert.credential}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
