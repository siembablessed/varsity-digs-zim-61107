import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search, Home, MessageCircle, Star } from 'lucide-react';

const CallToAction = () => {
  const quickActions = [
    {
      icon: <Search className="h-5 w-5" />,
      title: 'Find Accommodation',
      description: 'Browse verified student housing',
      action: 'Start Searching',
      primary: true
    },
    {
      icon: <Home className="h-5 w-5" />,
      title: 'List Your Property',
      description: 'Earn from your spare rooms',
      action: 'List Property',
      primary: false
    }
  ];

  const benefits = [
    'No agent fees',
    'Verified properties',
    '24/7 support',
    'Student community'
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
            <Star className="h-3 w-3 mr-1" />
            Join 2000+ Students
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Find Your
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Perfect Student Home?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join Zimbabwe's most trusted student accommodation platform. 
            Find your ideal home or list your property today.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 bg-card/70 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {quickActions.map((action, index) => (
            <div 
              key={index}
              className={`bg-card/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-[var(--shadow-xl)] group animate-scale-in ${
                action.primary 
                  ? 'border-primary/30 hover:border-primary/50' 
                  : 'border-border/30 hover:border-secondary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                action.primary 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-secondary/10 text-secondary'
              }`}>
                {action.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {action.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {action.description}
              </p>
              
              <Button 
                size="lg" 
                variant={action.primary ? 'default' : 'secondary'}
                className="w-full group/btn"
              >
                {action.action}
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>Free to use</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 fill-current text-[hsl(var(--rating-star))]" />
              <span>4.8 student rating</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>500+ verified properties</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;