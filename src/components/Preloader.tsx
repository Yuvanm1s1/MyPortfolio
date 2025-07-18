'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(progressBarRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power2.out',
    }).to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
      },
    });
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">YUVAN M</h1>
        <div className="h-1 w-48 overflow-hidden bg-gray-700">
          <div
            ref={progressBarRef}
            className="h-full w-0 bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;