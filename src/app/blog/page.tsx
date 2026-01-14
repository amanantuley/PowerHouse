import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">
          FITNESS <span className="text-primary">TIPS & INSIGHTS</span>
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Knowledge is power. Fuel your fitness journey with expert advice from our trainers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
          const postImage = PlaceHolderImages.find((p) => p.id === post.imageId);
          return (
            <Card key={post.id} className="flex flex-col overflow-hidden group">
              <CardHeader className="p-0 relative h-64">
                {postImage && (
                  <Image
                    src={postImage.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={postImage.imageHint}
                  />
                )}
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <h2 className="text-xl font-bold mb-2 leading-tight group-hover:text-primary transition-colors">
                  <Link href="#">{post.title}</Link>
                </h2>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 text-primary">
                    <Link href="#">Read More &rarr;</Link>
                 </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
