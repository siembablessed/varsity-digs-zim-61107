import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Users, Calendar, ArrowRight, Star } from 'lucide-react';
import heroImage from '@/assets/hero-modern-accommodation.jpg';

const Hero = () => {
  const [university, setUniversity] = useState('');
  const [roomType, setRoomType] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate search functionality
    setTimeout(() => {
      setIsSearching(false);
      // Here you would typically navigate to search results or update state
    }, 1500);
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
    <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern student accommodation near university campus" 
          className="w-full h-full object-cover scale-105 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-secondary/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Stats Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-white/90 text-sm font-medium">Trusted by 5,000+ students</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Find Your Perfect 
          <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mt-2">Student Home</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Connect directly with verified homeowners near Zimbabwe's top universities. 
          <span className="block mt-2 text-secondary/90 font-medium">Zero agent fees • Instant booking • 24/7 support</span>
        </p>

        {/* Enhanced Search Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto border border-white/20 animate-scale-in delay-300">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <div className="lg:col-span-1 space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                University
              </label>
              <Select value={university} onValueChange={setUniversity}>
                <SelectTrigger className="h-12 border-2 border-muted focus:border-primary transition-colors">
                  <SelectValue placeholder="Choose university" />
                </SelectTrigger>
                <SelectContent>
                  {universities.map((uni) => (
                    <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="lg:col-span-1 space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                Room Type
              </label>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger className="h-12 border-2 border-muted focus:border-primary transition-colors">
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

            <div className="lg:col-span-1 space-y-2">
              <label className="text-sm font-semibold text-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                Move-in Date
              </label>
              <Input 
                type="date" 
                value={moveInDate}
                onChange={(e) => setMoveInDate(e.target.value)}
                className="h-12 border-2 border-muted focus:border-primary transition-colors"
              />
            </div>

            <div className="lg:col-span-1 flex items-end">
              <Button 
                size="lg" 
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary transition-all duration-300 transform hover:scale-105 disabled:opacity-70"
              >
                {isSearching ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Searching...
                  </div>
                ) : (
                  <>
                    <Search className="h-5 w-5 mr-2" />
                    Find Home
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['Under $200/month', 'Near campus', 'Furnished', 'WiFi included', 'Parking available'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 text-sm bg-muted/50 hover:bg-primary/10 hover:text-primary border border-muted rounded-full transition-all duration-200 hover:border-primary/30"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in delay-500">
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="h-3 w-3 bg-secondary rounded-full mb-2 animate-pulse"></div>
            <span className="text-white font-medium text-sm">1000+ Properties</span>
            <span className="text-white/70 text-xs">Verified daily</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="h-3 w-3 bg-secondary rounded-full mb-2 animate-pulse delay-300"></div>
            <span className="text-white font-medium text-sm">Direct Contact</span>
            <span className="text-white/70 text-xs">No middlemen</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="h-3 w-3 bg-secondary rounded-full mb-2 animate-pulse delay-700"></div>
            <span className="text-white font-medium text-sm">Zero Fees</span>
            <span className="text-white/70 text-xs">Always free</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;