
// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from 'phosphor-react';

// gsap.registerPlugin(ScrollTrigger);

// const Contact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);
//   const formRef = useRef<HTMLFormElement>(null);
//   const videoRef = useRef<HTMLDivElement>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setIsSubmitting(false);
//   };

//   useEffect(() => {
//     const section = sectionRef.current;
//     const form = formRef.current;
//     const video = videoRef.current;

//     if (!section || !form || !video) return;

//     gsap.fromTo(
//       section,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: section,
//           start: 'top 80%',
//         },
//       }
//     );

//     gsap.fromTo(
//       video,
//       { x: -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: video,
//           start: 'top 90%',
//         },
//       }
//     );

//     gsap.fromTo(
//       form,
//       { x: 100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: form,
//           start: 'top 90%',
//         },
//       }
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#0a0a0a] py-20 lg:py-32 overflow-hidden"
//     >
//       <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         {/* Bot Video Box */}
//         <div
//           ref={videoRef}
//           className="relative rounded-3xl overflow-hidden backdrop-blur-md shadow-[0_0_60px_rgba(168,85,247,0.35)] border border-purple-500/30 p-3 transform transition-transform duration-500 hover:scale-105"
//         >
//           <video
//             src="/bot.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover rounded-2xl shadow-lg"
//           />
//         </div>

//         {/* Contact Form */}
//         <div>
//           <h2 className="text-4xl font-bold text-white mb-4">
//             Let's <span className="text-purple-400">Connect</span>
//           </h2>
//           <p className="text-gray-400 mb-6">
//             I'm always open to new opportunities and collaborations. Feel free to get in touch!
//           </p>

//           <div className="flex gap-4 mb-6">
//             <a
//               href="https://linkedin.com/in/yuvan-m-504569305"
//               target="_blank"
//               className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
//             >
//               <LinkedinLogo size={24} color="#94a3b8" />
//             </a>
//             <a
//               href="https://github.com/Yuvanm1s1"
//               target="_blank"
//               className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition"
//             >
//               <GithubLogo size={24} color="#94a3b8" />
//             </a>
//           </div>

//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 lg:p-8 shadow-2xl backdrop-blur-md"
//           >
//             <div className="space-y-5">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 required
//                 className="w-full px-4 py-3 bg-black/30 text-white border border-gray-600 rounded-lg focus:border-blue-500 outline-none"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 required
//                 className="w-full px-4 py-3 bg-black/30 text-white border border-gray-600 rounded-lg focus:border-blue-500 outline-none"
//               />
//               <textarea
//                 rows={4}
//                 placeholder="Message"
//                 required
//                 className="w-full px-4 py-3 bg-black/30 text-white border border-gray-600 rounded-lg focus:border-blue-500 outline-none"
//               />
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-all"
//               >
//                 {isSubmitting ? 'Sending...' : (
//                   <span className="flex items-center justify-center gap-2">
//                     Send Message <PaperPlaneTilt size={18} />
//                   </span>
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from 'phosphor-react';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_zznqkt9',
        'template_btbroo9',
        formRef.current!,
        'GytEnNZOOWhbFSLqT'
      );
      alert('Message sent successfully!');
      formRef.current?.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const video = videoRef.current;

    if (!section || !form || !video) return;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
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
        ease: 'power3.out',
        scrollTrigger: {
          trigger: video,
          start: 'top 90%',
        },
      }
    );

    gsap.fromTo(
      form,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Bot Video Box */}
        <div
          ref={videoRef}
          className="relative rounded-3xl overflow-hidden backdrop-blur-md shadow-[0_0_60px_rgba(168,85,247,0.35)] border border-purple-500/30 p-3 transform transition-transform duration-500 hover:scale-105"
        >
          <video
            src="/bot.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <p className="text-gray-400 mb-6">
            I'm always open to new opportunities and collaborations. Feel free to get in touch!
          </p>

          <div className="flex gap-4 mb-6">
            <a
              href="https://linkedin.com/in/yuvan-m-504569305"
              target="_blank"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
            >
              <LinkedinLogo size={24} color="#94a3b8" />
            </a>
            <a
              href="https://github.com/Yuvanm1s1"
              target="_blank"
              className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition"
            >
              <GithubLogo size={24} color="#94a3b8" />
            </a>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 lg:p-8 shadow-2xl backdrop-blur-md"
          >
            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 bg-black/30 text-white border border-gray-600 rounded-lg focus:border-blue-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-black/30 text-white border border-gray-600 rounded-lg focus:border-blue-500 outline-none"
              />
              <textarea
                rows={4}
                name="message"
                placeholder="Message"
                required
                className="w-full px-4 py-3 bg-black/30 text-white border border-gray-600 rounded-lg focus:border-blue-500 outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-all"
              >
                {isSubmitting ? 'Sending...' : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message <PaperPlaneTilt size={18} />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
