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
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Student accommodation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Perfect Student 
          <span className="block text-secondary-foreground">Accommodation</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Connect directly with verified homeowners near Zimbabwe's top universities. 
          No agent fees, just honest accommodation.
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-lg p-6 shadow-[var(--card-shadow-hover)] max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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

          <Button size="lg" className="w-full">
            <Search className="h-5 w-5 mr-2" />
            Find Accommodation
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80">
          <div className="flex items-center">
            <div className="h-2 w-2 bg-secondary rounded-full mr-2"></div>
            <span>Verified Properties</span>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-secondary rounded-full mr-2"></div>
            <span>Direct Owner Contact</span>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-secondary rounded-full mr-2"></div>
            <span>No Hidden Fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;