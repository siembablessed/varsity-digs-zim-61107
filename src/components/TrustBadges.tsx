import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="h-5 w-5" />,
      text: 'Verified Safe',
      subtext: 'ID checked owners'
    },
    {
      icon: <Award className="h-5 w-5" />,
      text: 'Top Rated',
      subtext: '4.8★ average rating'
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: '2000+ Students',
      subtext: 'Trust our platform'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      text: '24h Response',
      subtext: 'Quick support'
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: '100% Verified',
      subtext: 'All properties checked'
    },
    {
      icon: <Star className="h-5 w-5" />,
      text: 'Student Approved',
      subtext: 'Peer reviewed'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge className="mb-3 bg-gradient-to-r from-primary to-secondary text-white">
            Trusted by Students
          </Badge>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Why Students Choose VarsityDigs
          </h3>
          <p className="text-sm text-muted-foreground">
            Building trust through transparency and verification
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="bg-card/70 backdrop-blur-sm rounded-xl p-4 text-center border border-border/30 hover:border-primary/30 transition-all duration-300 group hover:shadow-[var(--shadow-card)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-full mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {badge.icon}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {badge.text}
              </div>
              <div className="text-xs text-muted-foreground">
                {badge.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;