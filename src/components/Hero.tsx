import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Users, Calendar, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import heroImage from '@/assets/hero-modern-accommodation.jpg';

const Hero = () => {
  const { updateSearchFilters, searchFilters } = useApp();
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!searchFilters.university) {
      toast.error("Please select a university");
      return;
    }
    
    setIsSearching(true);
    // Simulate search functionality
    setTimeout(() => {
      setIsSearching(false);
      toast.success("Search completed! Check results below.");
      // Scroll to results
      document.getElementById('property-results')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 1000);
  };

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
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
      {/* Simple Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern student accommodation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Find student homes in Zimbabwe
        </h1>
        
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Discover verified accommodation near top universities
        </p>

        {/* Simple Search Form */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-muted-foreground">University</label>
              <Select value={searchFilters.university} onValueChange={(value) => updateSearchFilters({ university: value })}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Choose university" />
                </SelectTrigger>
                <SelectContent>
                  {universities.map((uni) => (
                    <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-muted-foreground">Room Type</label>
              <Select value={searchFilters.roomType} onValueChange={(value) => updateSearchFilters({ roomType: value })}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single Room</SelectItem>
                  <SelectItem value="shared">Shared Room</SelectItem>
                  <SelectItem value="studio">Studio Apartment</SelectItem>
                  <SelectItem value="house">Shared House</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-muted-foreground">Move-in</label>
              <Input 
                type="date" 
                value={searchFilters.moveInDate}
                onChange={(e) => updateSearchFilters({ moveInDate: e.target.value })}
                className="h-11"
              />
            </div>

            <div className="flex items-end">
              <Button 
                size="lg" 
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full h-11 bg-primary hover:bg-primary/90"
              >
                {isSearching ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Searching...
                  </div>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;