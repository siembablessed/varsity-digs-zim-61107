import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, UserCheck, MessageCircle, Home, ArrowRight, Clock, Shield, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: <Search className="h-8 w-8" />,
      title: 'Search & Filter',
      description: 'Browse verified accommodations near your university. Use our smart filters to find exactly what you need.',
      details: ['Search by university location', 'Filter by price, amenities, room type', 'View detailed photos and descriptions'],
      time: '2 minutes'
    },
    {
      step: 2,
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Connect Safely',
      description: 'Message property owners through our secure platform. Your personal details stay protected.',
      details: ['Secure in-app messaging', 'No personal details shared initially', 'Schedule viewings safely'],
      time: '24 hours'
    },
    {
      step: 3,
      icon: <UserCheck className="h-8 w-8" />,
      title: 'Meet & Verify',
      description: 'Meet the owner in person, view the property, and verify everything matches the listing.',
      details: ['In-person property viewing', 'Meet verified property owners', 'Ask questions directly'],
      time: '1 day'
    },
    {
      step: 4,
      icon: <Home className="h-8 w-8" />,
      title: 'Move In',
      description: 'Complete your booking directly with the owner. No agent fees, just honest accommodation.',
      details: ['Direct payment to owner', 'Sign lease agreement', 'Move into your new home'],
      time: 'Same day'
    }
  ];

  const forOwners = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: 'Create Your Profile',
      description: 'Sign up and get verified as a property owner. Our team reviews your application within 24 hours.'
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: 'List Your Property',
      description: 'Add photos, descriptions, and amenities. Set your price and availability calendar.'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Connect with Students',
      description: 'Receive inquiries from verified students. Communicate safely through our platform.'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Build Your Reputation',
      description: 'Earn positive reviews and become a trusted host. Get priority visibility for future listings.'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* For Students */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 animate-fade-in">For Students</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in-up">
              How to Find Your Perfect Student Accommodation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              Simple, safe, and transparent process to find quality accommodation near your university
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="p-6 h-full bg-card hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 group border-0 shadow-[var(--card-shadow)]">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>

                  {/* Time Badge */}
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {step.time}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center">
                        <div className="h-1 w-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground animate-pulse">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="group">
              Start Searching Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* For Property Owners */}
        <div className="bg-accent/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">For Property Owners</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              List Your Property & Connect with Students
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join Zimbabwe's most trusted platform for student accommodation. Reach verified students directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {forOwners.map((item, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 text-secondary rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary" className="group">
              List Your Property
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Trust & Safety */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Your Safety is Our Priority
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3 animate-fade-in">
              <Shield className="h-8 w-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold">Verified Owners</h4>
                <p className="text-sm text-muted-foreground">All property owners are identity verified</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 animate-fade-in">
              <MessageCircle className="h-8 w-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold">Secure Communication</h4>
                <p className="text-sm text-muted-foreground">Protected messaging until you're ready</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 animate-fade-in">
              <Star className="h-8 w-8 text-primary" />
              <div className="text-left">
                <h4 className="font-semibold">Honest Reviews</h4>
                <p className="text-sm text-muted-foreground">Real feedback from real students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;