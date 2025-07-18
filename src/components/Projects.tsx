// 'use client';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ArrowUpRight } from 'phosphor-react';

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     title: 'NeatChat – AI Moderated Real-Time Chat App',
//     description:
//       'Developed a chat platform with real-time messaging and AI-powered content moderation for safe communication. Integrated deep learning models for text and image filtering.',
//     tech: ['React', 'Socket.IO', 'FastAPI', 'Transformers'],
//     image: '/project-1.png',
//   },
//   {
//     title: 'Twitter Clone – Full Stack Social App',
//     description:
//       'Built a Twitter-like social app with user authentication, post interactions, and dynamic UI. MERN stack with notifications and optimized fetch using React Query.',
//     tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
//     image: '/project-2.png',
//   },
//   {
//     title: 'DataShield – GDPR Compliance Checker',
//     description:
//       'Created an ML-based compliance checker integrated with a Flutter app via FastAPI. Used TF-IDF, XGBoost for violation detection, LIME explanations and Gemini API summaries.',
//     tech: ['Machine Learning', 'Flutter', 'FastAPI', 'XGBoost'],
//     image: '/project-3.png',
//   },
// ];

// const Projects = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const cards = cardsRef.current;
//     if (!section || !cards) return;

//     gsap.fromTo(
//       section,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: section,
//           start: 'top 80%',
//         },
//       }
//     );

//     gsap.fromTo(
//       Array.from(cards.children),
//       { scale: 0.9, opacity: 0, y: 30 },
//       {
//         scale: 1,
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: cards,
//           start: 'top 85%',
//         },
//       }
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-20"
//     >
//       <div className="container mx-auto px-8 lg:px-20">
//         <h2 className="mb-12 text-3xl font-bold text-white lg:text-4xl">
//           Featured Projects
//         </h2>

//         <div
//           ref={cardsRef}
//           className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group overflow-hidden rounded-2xl bg-gray-800/30 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-gray-800/50"
//             >
//               <div className="aspect-video w-full overflow-hidden">
//                 <div
//                   className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//                   style={{ backgroundImage: `url(${project.image})` }}
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="mb-2 text-xl font-bold text-white">
//                   {project.title}
//                 </h3>
//                 <p className="mb-4 text-gray-400">{project.description}</p>

//                 <div className="mb-6 flex flex-wrap gap-2">
//                   {project.tech.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <button className="flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors group-hover:text-blue-300">
//                   View Project
//                   <ArrowUpRight
//                     className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                     size={20}
//                   />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'NeatChat – AI Moderated Real-Time Chat App',
    description:
      'Developed a chat platform with real-time messaging and AI-powered content moderation for safe communication. Integrated deep learning models for text and image filtering.',
    tech: ['React', 'Socket.IO', 'FastAPI', 'Transformers'],
    image: '/project-1.png',
    link: 'https://github.com/Yuvanm1s1/NeatChat',
  },
  {
    title: 'Twitter Clone – Full Stack Social App',
    description:
      'Built a Twitter-like social app with user authentication, post interactions, and dynamic UI. MERN stack with notifications and optimized fetch using React Query.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    image: '/project-2.png',
    link: 'https://github.com/Yuvanm1s1/X-Social',
  },
  {
    title: 'DataShield – GDPR Compliance Checker',
    description:
      'Created an ML-based compliance checker integrated with a Flutter app via FastAPI. Used TF-IDF, XGBoost for violation detection, LIME explanations and Gemini API summaries.',
    tech: ['Machine Learning', 'Flutter', 'FastAPI', 'XGBoost'],
    image: '/project-3.png',
    link: 'https://github.com/Yuvanm1s1/navigating_digital_rights',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      Array.from(cards.children),
      { scale: 0.9, opacity: 0, y: 30 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cards,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] py-20"
    >
      <div className="container mx-auto px-8 lg:px-20">
        <h2 className="mb-12 text-3xl font-bold text-white lg:text-4xl">
          Featured Projects
        </h2>

        <div
          ref={cardsRef}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-gray-800/30 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-gray-800/50"
            >
              <div className="aspect-video w-full overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-400">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors group-hover:text-blue-300"
                >
                  View Project
                  <ArrowUpRight
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={20}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
