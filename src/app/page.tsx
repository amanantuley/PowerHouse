import HeroSection from '@/components/home/hero-section';
import StatsSection from '@/components/home/stats-section';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { trainers, memberships, transformations } from '@/lib/data';
import { Check, ArrowRight } from 'lucide-react';

export default function Home() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us');
  const facilities = PlaceHolderImages.filter((img) => img.id.startsWith('facility-'));

  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <div className="relative z-10 bg-background">
        <StatsSection />

        {/* About Preview */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl group">
                {aboutImage && <Image src={aboutImage.imageUrl} alt="About PowerHouse" fill className="object-cover group-hover:scale-105 transition-transform duration-500" data-ai-hint={aboutImage.imageHint} />}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase text-primary tracking-widest mb-2">Our Story</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
                  WHY <span className="text-primary">POWERHOUSE</span>?
                </h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  We're not just a gym; we are a community dedicated to mutual growth and empowerment. Our state-of-the-art facility is designed to cater to all fitness levels, from beginners to pro athletes. With expert trainers and a motivating atmosphere, we provide the perfect environment to crush your goals.
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/about">Read Our Story <ArrowRight className="ml-2"/></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Preview */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-sm font-bold uppercase text-primary tracking-widest mb-2">The Zones</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-headline">WORLD-CLASS <span className="text-primary">FACILITIES</span></h3>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
              Explore our cutting-edge equipment and dedicated training zones designed for peak performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <Link href="/facilities" key={index} className="relative h-80 overflow-hidden rounded-xl group shadow-lg">
                  <Image src={facility.imageUrl} alt={facility.description} fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint={facility.imageHint} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3 className="text-white font-bold text-2xl capitalize font-headline">{facility.id.split('-')[1]} Zone</h3>
                  </div>
                </Link>
              ))}
            </div>
             <Button asChild size="lg" className="mt-12 rounded-full">
                  <Link href="/facilities">Explore All Facilities <ArrowRight className="ml-2"/></Link>
              </Button>
          </div>
        </section>

        {/* Featured Trainers */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-sm font-bold uppercase text-primary tracking-widest mb-2">Guidance</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-headline">MEET OUR <span className="text-primary">EXPERT TRAINERS</span></h3>
              <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
                Our certified professionals are here to guide you on your journey to success.
              </p>
            </div>
            <Carousel opts={{ align: 'start', loop: true }} className="w-full">
              <CarouselContent>
                {trainers.map((trainer) => {
                  const trainerImage = PlaceHolderImages.find(p => p.id === trainer.imageId);
                  return (
                    <CarouselItem key={trainer.id} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
                        <div className="relative h-96">
                           {trainerImage && <Image src={trainerImage.imageUrl} alt={trainer.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={trainerImage.imageHint} />}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        </div>
                        <CardContent className="p-6 text-center bg-card">
                          <h3 className="text-2xl font-bold font-headline">{trainer.name}</h3>
                          <p className="text-accent font-semibold mb-3">{trainer.specialty}</p>
                          <p className="text-muted-foreground mt-2 text-sm h-16">{trainer.bio.substring(0, 100)}...</p>
                          <Button variant="link" asChild><Link href="/trainers">View Profile</Link></Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="ml-12 hidden sm:flex" />
              <CarouselNext className="mr-12 hidden sm:flex" />
            </Carousel>
          </div>
        </section>
        
         {/* Transformations Preview */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-sm font-bold uppercase text-primary tracking-widest mb-2">Motivation</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-headline">REAL MEMBERS, <span className="text-primary">REAL RESULTS</span></h3>
              <p className="max-w-2xl mx-auto text-muted-foreground mb-12">Be inspired by the incredible transformations from our community.</p>
              <div className="grid md:grid-cols-3 gap-8">
                  {transformations.slice(0,3).map((t, index) => {
                      const beforeImg = PlaceHolderImages.find(p => p.id === t.beforeImageId);
                      const afterImg = PlaceHolderImages.find(p => p.id === t.afterImageId);
                      return (
                          <div key={t.id} className="text-center">
                              <div className="flex gap-2 justify-center mb-4">
                                  {beforeImg && <Image src={beforeImg.imageUrl} alt={`Before - ${t.name}`} width={200} height={300} className="rounded-lg shadow-lg object-cover" data-ai-hint={beforeImg.imageHint}/>}
                                  {afterImg && <Image src={afterImg.imageUrl} alt={`After - ${t.name}`} width={200} height={300} className="rounded-lg shadow-lg object-cover" data-ai-hint={afterImg.imageHint}/>}
                              </div>
                              <h3 className="text-xl font-bold">{t.name}</h3>
                              <p className="text-muted-foreground italic mt-2">"{t.story}"</p>
                          </div>
                      );
                  })}
              </div>
              <Button asChild size="lg" className="mt-12 rounded-full">
                  <Link href="/transformations">See More Transformations <ArrowRight className="ml-2"/></Link>
              </Button>
          </div>
        </section>

        {/* Membership CTA */}
         <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                 <h2 className="text-sm font-bold uppercase text-primary tracking-widest mb-2">Join Us</h2>
                 <h3 className="text-3xl md:text-4xl font-bold mb-4 font-headline">START YOUR <span className="text-primary">JOURNEY</span></h3>
                 <p className="max-w-2xl mx-auto text-muted-foreground">Find the perfect plan to match your ambition. No excuses, only results.</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {memberships.map((plan, index) => (
                      <Card key={plan.name} className={`flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2 ${plan.isPopular ? 'border-primary border-2 scale-105' : 'border-border'}`}>
                          {plan.isPopular && (
                              <div className="bg-primary text-primary-foreground text-center py-2 font-bold text-sm tracking-widest">
                                  MOST POPULAR
                              </div>
                          )}
                          <div className="p-8 text-center">
                              <h3 className="text-3xl font-bold font-headline text-center">{plan.name}</h3>
                              <p className="text-5xl font-extrabold text-center my-4">${plan.price}<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
                          </div>
                          <div className="p-8 bg-card flex-grow">
                              <ul className="space-y-4">
                                  {plan.features.map(feature => (
                                      <li key={feature} className="flex items-center gap-3">
                                          <Check className="h-5 w-5 text-primary flex-shrink-0"/>
                                          <span className="text-muted-foreground">{feature}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                          <div className="p-6">
                              <Button className={`w-full rounded-full text-lg ${plan.isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-accent text-accent-foreground hover:bg-accent/90'}`} size="lg">{plan.isPopular ? 'Get Started' : 'Choose Plan'}</Button>
                          </div>
                      </Card>
                  ))}
              </div>
          </div>
         </section>
      </div>
    </div>
  );
}
