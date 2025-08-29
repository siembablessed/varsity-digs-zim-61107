import { Shield, MessageCircle, Star, DollarSign, MapPin, Clock, CheckCircle, Users, Home } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Verified Properties',
      description: 'All listings are verified by our team before going live. Meet homeowners face-to-face for added security.',
      stat: '100%',
      statLabel: 'Verified',
      color: 'from-primary/20 to-primary/5'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Secure Messaging',
      description: 'Chat safely with property owners through our platform. Personal details stay protected until you choose to share.',
      stat: '24/7',
      statLabel: 'Support',
      color: 'from-secondary/20 to-secondary/5'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Student Reviews',
      description: 'Read honest reviews from fellow students. Rate your experience to help future tenants make informed decisions.',
      stat: '4.8★',
      statLabel: 'Average',
      color: 'from-[hsl(var(--rating-star))/20] to-[hsl(var(--rating-star))/5]'
    }
  ];

  const supportingFeatures = [
    {
      icon: <DollarSign className="h-5 w-5" />,
      title: 'No Agent Fees',
      description: 'Connect directly with homeowners'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'University-Focused',
      description: 'Near campus locations only'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Quick Approvals',
      description: 'Get approved within 24 hours'
    }
  ];

  const trustStats = [
    { value: '500+', label: 'Properties Listed', icon: <Home className="h-5 w-5" /> },
    { value: '2,000+', label: 'Happy Students', icon: <Users className="h-5 w-5" /> },
    { value: '100%', label: 'Verified Owners', icon: <CheckCircle className="h-5 w-5" /> }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Trusted Platform
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose VarsityDigs?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're building Zimbabwe's most trusted platform for student accommodation. 
            Here's what makes us different from traditional property agents.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {trustStats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} text-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{feature.stat}</div>
                  <div className="text-xs text-muted-foreground">{feature.statLabel}</div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Features */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            Additional Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;