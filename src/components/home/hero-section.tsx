'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [frame, setFrame] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);
  const totalFrames = 40;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // The animation will complete when the user has scrolled down the equivalent of the viewport height.
      const animationScrollDistance = window.innerHeight; 

      // Calculate scroll fraction, capped between 0 and 1.
      const scrollFraction = Math.max(0, Math.min(1, scrollY / animationScrollDistance));
      
      // Calculate the frame number. 
      // We use totalFrames here instead of totalFrames - 1 to ensure the last frame is shown.
      let newFrame = Math.floor(scrollFraction * totalFrames);
      
      // Clamp the frame number between 1 and totalFrames.
      newFrame = Math.max(1, Math.min(newFrame, totalFrames));

      setFrame(newFrame);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Preload images to ensure smooth animation
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/sequence/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageUrl = `/sequence/ezgif-frame-${frame.toString().padStart(3, '0')}.jpg`;

  return (
    <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center text-white">
      <div className="sticky top-0 h-screen w-full">
         <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="h-full w-full bg-cover bg-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-4 text-shadow-lg font-headline uppercase">
          Unleash Your
          <br />
          <span className="text-primary">Inner Beast</span>
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-neutral-300">
          Where strength is forged, limits are shattered, and legends are born.
          Your transformation starts now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
            <Link href="/membership">
              Join The Pack
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors shadow-lg hover:scale-105">
            <Link href="/facilities">
              Explore Gym
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
