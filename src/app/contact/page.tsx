'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">
          GET IN <span className="text-primary">TOUCH</span>
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions? We have answers. Reach out to us and let's start the conversation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-4">
                      <MapPin className="h-6 w-6 text-primary"/>
                      <span>123 Fitness Avenue, Metropolis, ST 12345</span>
                  </div>
                   <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-primary"/>
                      <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
                  </div>
                   <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-primary"/>
                      <a href="mailto:contact@powerhouse.com" className="hover:text-primary">contact@powerhouse.com</a>
                  </div>
              </div>
            </div>
             <div>
              <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
              <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Monday - Friday:</strong> 5:00 AM - 11:00 PM</li>
                  <li><strong>Saturday:</strong> 7:00 AM - 9:00 PM</li>
                  <li><strong>Sunday:</strong> 8:00 AM - 8:00 PM</li>
              </ul>
            </div>
             <div>
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="aspect-video bg-card rounded-lg flex items-center justify-center text-muted-foreground">
                <p>Map Placeholder</p>
              </div>
            </div>
        </div>
        <div>
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-8 bg-card rounded-lg">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us how we can help..." rows={6} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
