import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { transformations } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

const TransformationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">
          REAL MEMBERS, <span className="text-primary">REAL RESULTS</span>
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Be inspired by the incredible transformations from our community. Your story could be next.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {transformations.map((t) => {
          const beforeImg = PlaceHolderImages.find((p) => p.id === t.beforeImageId);
          const afterImg = PlaceHolderImages.find((p) => p.id === t.afterImageId);
          return (
            <Card key={t.id} className="overflow-hidden bg-card">
              <div className="grid grid-cols-2">
                {beforeImg && (
                  <div className="relative h-80">
                    <Image
                      src={beforeImg.imageUrl}
                      alt={`Before - ${t.name}`}
                      fill
                      className="object-cover"
                      data-ai-hint={beforeImg.imageHint}
                    />
                    <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded">BEFORE</div>
                  </div>
                )}
                {afterImg && (
                  <div className="relative h-80">
                    <Image
                      src={afterImg.imageUrl}
                      alt={`After - ${t.name}`}
                      fill
                      className="object-cover"
                      data-ai-hint={afterImg.imageHint}
                    />
                    <div className="absolute bottom-2 right-2 bg-primary text-white px-2 py-1 text-xs rounded">AFTER</div>
                  </div>
                )}
              </div>
              <CardContent className="p-6 text-center">
                <blockquote className="italic text-muted-foreground">"{t.story}"</blockquote>
                <p className="mt-4 font-bold text-lg text-white">- {t.name}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TransformationsPage;
