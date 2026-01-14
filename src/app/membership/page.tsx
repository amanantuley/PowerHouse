import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { memberships } from '@/lib/data';

const MembershipPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-headline">
          CHOOSE YOUR <span className="text-primary">ARSENAL</span>
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Flexible plans designed for every goal. Find the perfect membership to start your transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {memberships.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col h-full ${plan.isPopular ? 'border-primary border-2 shadow-lg scale-105' : 'border-border'}`}
          >
            {plan.isPopular && (
              <div className="bg-primary text-primary-foreground text-center py-1 font-bold text-sm">
                MOST POPULAR
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                <span className="text-lg text-muted-foreground">/month</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                size="lg"
                className={`w-full text-lg ${plan.isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-accent text-accent-foreground hover:bg-accent/90'}`}
              >
                Sign Up Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MembershipPage;
