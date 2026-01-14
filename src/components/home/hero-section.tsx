import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-bg');

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
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
