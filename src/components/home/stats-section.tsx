import { Dumbbell, Users, SquareKanban, Medal } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: '500+',
    label: 'Happy Members',
  },
  {
    icon: <Medal className="h-8 w-8 text-primary" />,
    value: '20+',
    label: 'Expert Trainers',
  },
  {
    icon: <SquareKanban className="h-8 w-8 text-primary" />,
    value: '10,000',
    label: 'SQ. FT. of Space',
  },
  {
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    value: '100+',
    label: 'Modern Equipments',
  },
];

const StatsSection = () => {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <p className="text-3xl md:text-4xl font-bold mt-2">{stat.value}</p>
              <p className="text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
