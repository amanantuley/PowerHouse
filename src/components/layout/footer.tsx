import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Logo from '@/components/shared/logo';
import { NAV_LINKS } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Unleash your inner beast and transform your life. Join the strongest community in town.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link></li>
                <li><Link href="/membership" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Visit Us</h3>
            <address className="not-italic text-muted-foreground text-sm space-y-2">
              <p>123 Fitness Avenue,
              <br />
              Metropolis, ST 12345</p>
              <p>
                <strong>Email:</strong> <a href="mailto:contact@powerhouse.com" className="hover:text-primary">contact@powerhouse.com</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} PowerHouse Gym. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
