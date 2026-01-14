import { Dumbbell } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn('flex items-center gap-2 text-xl font-bold tracking-wider text-white', className)}>
      <Dumbbell className="h-7 w-7 text-primary" />
      <span className="font-headline">
        POWER<span className="text-primary">HOUSE</span>
      </span>
    </Link>
  );
};

export default Logo;
