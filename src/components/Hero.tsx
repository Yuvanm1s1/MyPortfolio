

// 'use client';
// import SplineWrapper from './SplineWrapper';
// import { ArrowRight } from 'phosphor-react';

// export default function Hero({ isLoading }: { isLoading: boolean }) {
//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black">
//       <header className="absolute top-0 z-20  w-full flex items-center justify-between px-6 py-4 text-white">
//         <div className="text-xl font-bold gradient-text">YM</div>
//         <nav className="flex items-center gap-6 text-sm">
//           <a href="#about" className="hover:text-blue-400">About</a>
//           <a href="#projects" className="hover:text-blue-400">Projects</a>
//           <a href="#contact" className="hover:text-blue-400">Contact</a>
//           <button className="rounded-full border border-purple-500 px-4 py-1 text-purple-500 hover:bg-purple-500 hover:text-white transition">
//             Hire Me
//           </button>
//         </nav>
//       </header>
//       {/* Fullscreen Spline Background */}
//       <div className="absolute inset-0 z-0">
//         <SplineWrapper scene="https://prod.spline.design/EtGnu6gy1nvWkLo7/scene.splinecode" 
//         showLoader={!isLoading}/>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
//         <h3 className="text-sm tracking-widest text-blue-400 mb-2">
//           WELCOME TO MY WORLD
//         </h3>
//         <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl mb-4">
//           Hi, I'm <span className="gradient-text">Yuvan</span><br />
//           Web Developer
//         </h1>
//         <p className="max-w-2xl text-gray-300 mb-8 text-sm md:text-base">
//           Crafting digital experiences that inspire and engage through modern tech. Passionate about cloud, full-stack dev, and cybersecurity.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex gap-4">
//           <button className="rounded-full border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
//             View My Work
//           </button>
//           <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-sm text-white hover:opacity-90 transition">
//             Hire Me Now <ArrowRight size={18} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';
import { ArrowRight,GithubLogo } from 'phosphor-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Navbar */}
      <header className="absolute top-0 z-20 w-full flex items-center justify-between px-6 py-4 text-white">
        <div className="text-xl font-bold gradient-text">YM</div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
          <a href="#contact" className="rounded-full border border-purple-500 px-4 py-1 text-purple-500 hover:bg-purple-500 hover:text-white transition">
            Hire Me
          </a>
        </nav>
      </header>

      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src="/orb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50 " />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h3 className="text-sm tracking-widest text-blue-400 mb-2">
          WELCOME TO MY WORLD
        </h3>
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl mb-4">
          Hi, I'm <span className="gradient-text">Yuvan</span><br />
          Web Developer
        </h1>
        <p className="max-w-2xl text-gray-300 mb-8 text-sm md:text-base">
          Crafting digital experiences that inspire and engage through modern tech.
          Passionate about cloud, full-stack dev, and cybersecurity.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          {/* <a href="https://github.com/Yuvanm1s1?tab=repositories" className="rounded-full border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
            View My Work
          </a> */}
      
<a
  href="https://github.com/Yuvanm1s1?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 rounded-full border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition"
>
  <GithubLogo size={18} />
  View My Work
</a>

          <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-sm text-white hover:opacity-90 transition">
            Hire Me Now <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
