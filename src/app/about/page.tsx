import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import StatsSection from '@/components/home/stats-section';
import { Award, Goal, HeartHandshake } from 'lucide-react';

const AboutPage = () => {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us');

  return (
    <div>
      <section className="relative h-80 flex items-center justify-center text-center text-white">
        {aboutImage && (
          <Image
            src={aboutImage.imageUrl}
            alt="PowerHouse Gym team"
            fill
            className="object-cover"
            data-ai-hint={aboutImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter font-headline">ABOUT POWERHOUSE</h1>
          <p className="mt-2 text-lg text-neutral-300">Forging Strength, Building Community</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">OUR <span className="text-primary">STORY</span></h2>
            <p className="text-muted-foreground text-lg">
              PowerHouse Gym was founded on a simple principle: to create a space where everyone, regardless of their fitness level, can find the strength to transform. We started as a small community of fitness enthusiasts and have grown into a premier destination for those serious about their health and wellness. We believe that a gym is more than just weights and machines; it's a place of empowerment, support, and perseverance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-12 text-center">
                  <div className="flex flex-col items-center">
                      <Goal className="h-12 w-12 text-primary mb-4"/>
                      <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">To provide an unparalleled fitness experience by offering top-tier facilities, expert guidance, and a motivating community that empowers members to achieve their personal best.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <Award className="h-12 w-12 text-primary mb-4"/>
                      <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">To be the leading force in the fitness industry, known for creating lasting positive change in the lives of our members and the health of our community.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <HeartHandshake className="h-12 w-12 text-primary mb-4"/>
                      <h3 className="text-2xl font-bold mb-2">Our Values</h3>
                      <p className="text-muted-foreground">Strength, Integrity, Community, and Excellence. These pillars guide every decision we make and every interaction we have.</p>
                  </div>
              </div>
          </div>
      </section>
      
      <StatsSection />

      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Family?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Your journey to a stronger, healthier you starts here. Become part of the PowerHouse community today.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/membership">View Membership Plans</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
