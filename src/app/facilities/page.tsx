import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const FacilitiesPage = () => {
  const facilities = PlaceHolderImages.filter((img) => img.id.startsWith('facility-'));

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">
          OUR <span className="text-primary">FACILITIES</span>
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Built to inspire. Equipped for excellence. Explore the zones that will power your workout.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {facilities.map((facility) => (
          <Card key={facility.id} className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg">
            <CardHeader className="p-0 relative h-80">
              <Image
                src={facility.imageUrl}
                alt={facility.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={facility.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <CardTitle className="absolute bottom-0 left-0 p-6 text-white text-3xl font-bold">
                <span className="capitalize">{facility.id.split('-')[1]}</span> Zone
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesPage;
