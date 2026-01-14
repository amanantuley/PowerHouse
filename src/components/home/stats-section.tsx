import { Dumbbell, Users, SquareKanban, Medal } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: '500+',
    label: 'Happy Members',
  },
  {
    icon: <Medal className="h-10 w-10 text-primary" />,
    value: '20+',
    label: 'Expert Trainers',
  },
  {
    icon: <SquareKanban className="h-10 w-10 text-primary" />,
    value: '10,000',
    label: 'SQ. FT. of Space',
  },
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    value: '100+',
    label: 'Modern Equipments',
  },
];

const StatsSection = () => {
  return (
    <section className="bg-card border-y border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
              {stat.icon}
              <p className="text-4xl md:text-5xl font-bold mt-3 font-headline">{stat.value}</p>
              <p className="text-muted-foreground mt-1 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
