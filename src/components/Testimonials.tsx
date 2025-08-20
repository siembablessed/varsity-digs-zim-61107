import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Chipo Mukamuri',
      university: 'University of Zimbabwe',
      year: '3rd Year Engineering',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      text: 'VarsityDigs helped me find an amazing place in Mount Pleasant. The owner was verified and honest about everything. No agent fees meant I could afford a better room!',
      property: 'Modern Studio in Mount Pleasant',
      savings: '$150'
    },
    {
      id: 2,
      name: 'Tadiwa Moyo',
      university: 'Chinhoyi University',
      year: '2nd Year Business',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      text: 'The messaging system kept my details safe until I was ready to meet the landlord. Found my accommodation in just 3 days. Highly recommend!',
      property: 'Shared House near CUT',
      savings: '$200'
    },
    {
      id: 3,
      name: 'Rumbi Chisango',
      university: 'Great Zimbabwe University',
      year: '4th Year Medicine',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      text: 'As a final year student, I needed somewhere quiet to study. The detailed photos and honest reviews helped me find the perfect place for my thesis year.',
      property: 'Private Room with Study Area',
      savings: '$120'
    },
    {
      id: 4,
      name: 'Blessing Nkomo',
      university: 'NUST',
      year: '1st Year IT',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      text: 'Being new to Bulawayo, I was nervous about finding accommodation. VarsityDigs made it so easy, and I love that I could read reviews from other students.',
      property: 'Shared House with Tech Students',
      savings: '$180'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in-up">
            What Students Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Real stories from students who found their perfect accommodation through VarsityDigs
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 bg-card shadow-[var(--card-shadow-hover)] border-0 relative animate-scale-in">
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Avatar and Info */}
                      <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/3">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="text-center md:text-left">
                          <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.year}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.university}</p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-rating-star text-rating-star" />
                          ))}
                        </div>

                        {/* Savings Badge */}
                        <Badge className="bg-secondary text-secondary-foreground">
                          Saved {testimonial.savings}
                        </Badge>
                      </div>

                      {/* Testimonial Content */}
                      <div className="md:w-2/3 space-y-4">
                        <blockquote className="text-lg text-card-foreground leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm text-muted-foreground">
                            Found: <span className="font-medium text-foreground">{testimonial.property}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 rounded-full h-10 w-10 p-0 hover:scale-110 transition-transform"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 rounded-full h-10 w-10 p-0 hover:scale-110 transition-transform"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="animate-bounce-subtle">
            Start Your Search Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;