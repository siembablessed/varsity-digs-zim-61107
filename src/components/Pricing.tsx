import { Check, Star, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for students just starting their search",
      features: [
        "Browse unlimited properties",
        "Save up to 10 favorites",
        "Basic filters and search",
        "Contact property owners",
        "Student reviews access",
        "Mobile app access"
      ],
      buttonText: "Get Started",
      variant: "outline" as const,
      popular: false,
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Premium",
      price: "$9.99/month",
      description: "Everything students need for the perfect housing search",
      features: [
        "Everything in Basic",
        "Unlimited favorites",
        "Advanced filters",
        "Priority support",
        "Early access to new listings",
        "Virtual tour scheduling",
        "Roommate matching",
        "Application assistance"
      ],
      buttonText: "Start Free Trial",
      variant: "default" as const,
      popular: true,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Property Owner",
      price: "$29.99/month",
      description: "Complete solution for property owners and managers",
      features: [
        "List unlimited properties",
        "Professional photo hosting",
        "Tenant screening tools",
        "Application management",
        "Payment processing",
        "Maintenance requests",
        "Analytics dashboard",
        "24/7 priority support"
      ],
      buttonText: "Start Listing",
      variant: "secondary" as const,
      popular: false,
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a student searching for housing or a property owner, 
            we have the perfect plan for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in ${
                plan.popular ? 'border-primary scale-105 shadow-lg' : 'hover:scale-102'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    plan.name === 'Basic' ? 'bg-accent text-accent-foreground' :
                    plan.name === 'Premium' ? 'bg-primary text-primary-foreground' :
                    'bg-secondary text-secondary-foreground'
                  }`}>
                    {plan.icon}
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {plan.description}
                </CardDescription>
                
                <div className="text-center">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-muted-foreground ml-1">/month</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.variant}
                  className="w-full"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>

                {plan.name === "Premium" && (
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    14-day free trial, then {plan.price}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card p-6 rounded-xl border shadow-sm max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">All plans include:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                Secure platform
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-secondary" />
                Verified listings
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                Instant notifications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;