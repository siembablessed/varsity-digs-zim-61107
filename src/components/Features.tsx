import { Shield, MessageCircle, Star, DollarSign, MapPin, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Verified Properties',
      description: 'All listings are verified by our team before going live. Meet homeowners face-to-face for added security.'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Secure Messaging',
      description: 'Chat safely with property owners through our platform. Personal details stay protected until you choose to share.'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Student Reviews',
      description: 'Read honest reviews from fellow students. Rate your experience to help future tenants make informed decisions.'
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'No Agent Fees',
      description: 'Connect directly with homeowners and avoid expensive agent commissions. Get fair prices for quality accommodation.'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'University-Focused',
      description: 'Find accommodation specifically near your university campus. Filter by distance and transport links.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Quick Approvals',
      description: 'Fast verification process for both students and homeowners. Get approved and start your search within 24 hours.'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose VarsityDigs?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building the most trusted platform for student accommodation in Zimbabwe. 
            Here's what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;