import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { trainers } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TrainersPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">
          MEET OUR <span className="text-primary">EXPERT TRAINERS</span>
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Dedicated professionals committed to guiding you on your fitness journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trainers.map((trainer) => {
          const trainerImage = PlaceHolderImages.find((p) => p.id === trainer.imageId);
          return (
            <Dialog key={trainer.id}>
              <Card className="overflow-hidden group text-center cursor-pointer">
                <DialogTrigger asChild>
                  <div>
                    <div className="relative h-96">
                      {trainerImage && (
                        <Image
                          src={trainerImage.imageUrl}
                          alt={trainer.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          data-ai-hint={trainerImage.imageHint}
                        />
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold">{trainer.name}</h3>
                      <p className="text-accent font-semibold">{trainer.specialty}</p>
                    </CardContent>
                  </div>
                </DialogTrigger>
              </Card>

              <DialogContent className="sm:max-w-[625px] bg-card">
                <DialogHeader>
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Avatar className="h-32 w-32">
                        {trainerImage && <AvatarImage src={trainerImage.imageUrl} alt={trainer.name} />}
                        <AvatarFallback>{trainer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <DialogTitle className="text-3xl font-bold">{trainer.name}</DialogTitle>
                        <DialogDescription className="text-accent text-lg">{trainer.specialty}</DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-muted-foreground">{trainer.bio}</p>
                </div>
                <Button>Book a Session</Button>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
};

export default TrainersPage;
