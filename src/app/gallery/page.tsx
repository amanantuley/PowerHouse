import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const GalleryPage = () => {
  const galleryImages = PlaceHolderImages.filter((img) => img.id.startsWith('gallery-'));

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">
          THE <span className="text-primary">POWERHOUSE</span> EXPERIENCE
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into the energy, community, and results that define us.
        </p>
      </div>

      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/3 mx-auto">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="photos">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {galleryImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                       data-ai-hint={image.imageHint}
                    />
                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={1200}
                    height={800}
                    className="rounded-lg object-contain"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="videos">
            <div className="text-center py-20">
                <h3 className="text-2xl font-bold">Video Gallery Coming Soon</h3>
                <p className="text-muted-foreground">Check back for workout tutorials, member testimonials, and more.</p>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GalleryPage;
