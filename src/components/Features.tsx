import { Shield, Star, MessageCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Verified Properties',
      description: 'All listings verified by our team'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Student Reviews',
      description: 'Honest reviews from real students'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Secure Messaging',
      description: 'Safe communication with owners'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Why students choose VarsityDigs
          </h2>
          <p className="text-muted-foreground">
            Trusted platform for student accommodation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
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