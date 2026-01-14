'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [frame, setFrame] = useState(1);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState('100vh');

  const totalFrames = 40;
  const animationDuration = 2000;

  useEffect(() => {
    // This code now runs only on the client
    setContainerHeight(`${animationDuration + window.innerHeight}px`);
    
    const handleScroll = () => {
      const heroContainer = heroContainerRef.current;
      if (!heroContainer) return;

      const { top } = heroContainer.getBoundingClientRect();
      
      const scrollProgress = Math.max(0, Math.min(1, -top / animationDuration));
      
      let newFrame = Math.floor(scrollProgress * (totalFrames - 1)) + 1;
      
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
    <div ref={heroContainerRef} style={{ height: containerHeight }} className="relative w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center text-white overflow-hidden">
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="h-full w-full bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute z-10 text-center px-4">
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
      </div>
    </div>
  );
};

export default HeroSection;
