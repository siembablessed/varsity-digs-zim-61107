import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Users } from 'lucide-react';
import heroImage from '@/assets/hero-accommodation.jpg';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [moveInDate, setMoveInDate] = useState('');

  const universities = [
    'University of Zimbabwe (UZ)',
    'Great Zimbabwe University (GZU)', 
    'Chinhoyi University of Technology (CUT)',
    'Midlands State University (MSU)',
    'National University of Science & Technology (NUST)',
    'Bindura University of Science Education (BUSE)',
    'Zimbabwe Open University (ZOU)',
    'Lupane State University (LSU)'
  ];

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Student accommodation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Find Your Perfect Student 
          <span className="block text-secondary-foreground mt-1 sm:mt-2">Accommodation</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Connect directly with verified homeowners near Zimbabwe's top universities. 
          No agent fees, just honest accommodation.
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-[var(--card-shadow-hover)] max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                University
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your university" />
                </SelectTrigger>
                <SelectContent>
                  {universities.map((uni) => (
                    <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Room Type
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Room preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single Room</SelectItem>
                  <SelectItem value="shared">Shared Room</SelectItem>
                  <SelectItem value="studio">Studio Apartment</SelectItem>
                  <SelectItem value="house">Shared House</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Move-in Date
              </label>
              <Input 
                type="date" 
                value={moveInDate}
                onChange={(e) => setMoveInDate(e.target.value)}
              />
            </div>
          </div>

          <Button size="lg" className="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold">
            <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Find Accommodation
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 text-white/80 text-sm sm:text-base">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 bg-secondary rounded-full mr-2 animate-pulse"></div>
            <span>Verified Properties</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 bg-secondary rounded-full mr-2 animate-pulse"></div>
            <span>Direct Owner Contact</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 bg-secondary rounded-full mr-2 animate-pulse"></div>
            <span>No Hidden Fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;