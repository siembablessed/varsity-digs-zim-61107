import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, SlidersHorizontal, X, MapPin, DollarSign, Users, Calendar } from 'lucide-react';

interface FiltersPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const FiltersPanel = ({ isOpen, onClose }: FiltersPanelProps) => {
  const { searchFilters, updateSearchFilters, clearFilters } = useApp();
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(searchFilters.amenities);

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

  const amenities = ['WiFi', 'Kitchen', 'Parking', 'Security', 'Laundry', 'Study Area', 'Garden', 'Gym', 'Pool'];
  const roomTypes = ['Single Room', 'Shared Room', 'Studio', 'Shared House'];

  const toggleAmenity = (amenity: string) => {
    const newAmenities = selectedAmenities.includes(amenity) 
      ? selectedAmenities.filter(a => a !== amenity)
      : [...selectedAmenities, amenity];
    
    setSelectedAmenities(newAmenities);
    updateSearchFilters({ amenities: newAmenities });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] lg:relative lg:inset-auto">
      {/* Mobile Backdrop */}
      <div className="absolute inset-0 bg-black/50 lg:hidden" onClick={onClose} />
      
      {/* Panel */}
      <div className={`
        absolute right-0 top-0 h-full w-80 bg-card shadow-xl border-l border-border overflow-y-auto
        lg:relative lg:w-full lg:h-auto lg:shadow-none lg:border-0
        transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Filters</h3>
            <Button variant="ghost" size="sm" onClick={onClose} className="lg:hidden">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* University */}
          <div className="space-y-3">
            <label className="text-sm font-medium flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              University
            </label>
            <Select value={searchFilters.university} onValueChange={(value) => updateSearchFilters({ university: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select university" />
              </SelectTrigger>
              <SelectContent>
                {universities.map((uni) => (
                  <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <label className="text-sm font-medium flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              Price Range (USD/month)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Input 
                placeholder="Min" 
                value={searchFilters.priceMin}
                onChange={(e) => updateSearchFilters({ priceMin: e.target.value })}
              />
              <Input 
                placeholder="Max" 
                value={searchFilters.priceMax}
                onChange={(e) => updateSearchFilters({ priceMax: e.target.value })}
              />
            </div>
          </div>

          {/* Room Type */}
          <div className="space-y-3">
            <label className="text-sm font-medium flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Room Type
            </label>
            <Select value={searchFilters.roomType} onValueChange={(value) => updateSearchFilters({ roomType: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select room type" />
              </SelectTrigger>
              <SelectContent>
                {roomTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Move-in Date */}
          <div className="space-y-3">
            <label className="text-sm font-medium flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Move-in Date
            </label>
            <Input 
              type="date" 
              value={searchFilters.moveInDate}
              onChange={(e) => updateSearchFilters({ moveInDate: e.target.value })}
            />
          </div>

          {/* Amenities */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Amenities</label>
            <div className="flex flex-wrap gap-2">
              {amenities.map((amenity) => (
                <Badge
                  key={amenity}
                  variant={selectedAmenities.includes(amenity) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => toggleAmenity(amenity)}
                >
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="space-y-2">
            <Button className="w-full" onClick={onClose}>
              Apply Filters
            </Button>
            <Button variant="outline" className="w-full" onClick={() => {
              clearFilters();
              setSelectedAmenities([]);
            }}>
              Clear All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchAndFilters = () => {
  const { searchQuery, setSearchQuery, searchFilters, updateSearchFilters, clearFilters } = useApp();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="bg-background/95 backdrop-blur-md border-b border-border sticky top-14 sm:top-16 z-[60]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        <div className="flex gap-2 sm:gap-4">
          {/* Search */}
          <div className="flex-1 relative min-w-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search location, university..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 text-sm sm:text-base h-9 sm:h-10"
            />
          </div>

          {/* Filter Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center gap-1.5 sm:gap-2 transition-all duration-200 hover:scale-105 px-3 sm:px-4 h-9 sm:h-10 text-xs sm:text-sm flex-shrink-0"
          >
            <SlidersHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Filters</span>
          </Button>
        </div>

        {/* Active Filters Summary */}
        {(searchFilters.university || searchFilters.priceMin || searchFilters.priceMax || searchFilters.roomType || searchFilters.amenities.length > 0) && (
          <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
            {searchFilters.university && (
              <Badge variant="secondary" className="animate-fade-in text-xs px-2 py-1">
                {searchFilters.university.replace(/\s*\([^)]*\)/, '')}
              </Badge>
            )}
            {(searchFilters.priceMin || searchFilters.priceMax) && (
              <Badge variant="secondary" className="animate-fade-in text-xs px-2 py-1">
                ${searchFilters.priceMin || '0'} - ${searchFilters.priceMax || '∞'}
              </Badge>
            )}
            {searchFilters.roomType && (
              <Badge variant="secondary" className="animate-fade-in text-xs px-2 py-1">
                {searchFilters.roomType}
              </Badge>
            )}
            {searchFilters.amenities.length > 0 && (
              <Badge variant="secondary" className="animate-fade-in text-xs px-2 py-1">
                {searchFilters.amenities.slice(0, 2).join(' + ')}
                {searchFilters.amenities.length > 2 && ` +${searchFilters.amenities.length - 2}`}
              </Badge>
            )}
          </div>
        )}
      </div>

      <FiltersPanel isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
    </div>
  );
};

export default SearchAndFilters;