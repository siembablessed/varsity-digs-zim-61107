import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Tendai Mukamuri",
      university: "University of Zimbabwe",
      location: "Mount Pleasant",
      rating: 5,
      text: "VarsityDigs made finding accommodation so easy! I found the perfect place near campus in just 2 days. The direct contact with property owners saved me from paying agent fees.",
      avatar: "TM",
      roomType: "Single Room",
      verified: true
    },
    {
      id: 2,
      name: "Chipo Magaya",
      university: "Midlands State University",
      location: "Gweru",
      rating: 5,
      text: "Amazing experience! The property was exactly as described, and the host was incredibly helpful. The platform made everything transparent and secure.",
      avatar: "CM",
      roomType: "Shared House",
      verified: true
    },
    {
      id: 3,
      name: "Kudakwashe Moyo",
      university: "NUST",
      location: "Bulawayo",
      rating: 5,
      text: "Best decision ever! Found a great place with other serious students. The verification system gave me confidence, and the process was seamless.",
      avatar: "KM",
      roomType: "Studio",
      verified: true
    },
    {
      id: 4,
      name: "Tariro Chimombe",
      university: "Great Zimbabwe University",
      location: "Masvingo",
      rating: 5,
      text: "VarsityDigs connected me with an amazing host family. The accommodation exceeded my expectations, and I felt safe and welcome from day one.",
      avatar: "TC",
      roomType: "Family Home",
      verified: true
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who found their perfect accommodation through VarsityDigs
          </p>
        </div>

        {/* Main Testimonial */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/80 border-border/50 shadow-xl">
            <CardContent className="p-8 sm:p-12">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="h-16 w-16 text-primary" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg sm:text-xl text-center text-foreground mb-8 leading-relaxed">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* Student Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <Avatar className="h-16 w-16 ring-4 ring-primary/20">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                      {currentTestimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="text-center sm:text-left">
                    <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                      <h4 className="text-lg font-semibold text-foreground">
                        {currentTestimonial.name}
                      </h4>
                      {currentTestimonial.verified && (
                        <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {currentTestimonial.university}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {currentTestimonial.roomType} • {currentTestimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-primary">2,500+</div>
            <div className="text-sm text-muted-foreground">Happy Students</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-primary">4.9★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-primary">1,200+</div>
            <div className="text-sm text-muted-foreground">Verified Properties</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-primary">8</div>
            <div className="text-sm text-muted-foreground">Universities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;