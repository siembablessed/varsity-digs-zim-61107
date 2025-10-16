import { createContext, useContext, useState, ReactNode } from 'react';

interface Property {
  id: string;
  title: string;
  location: string;
  university: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: string[];
  roomType: string;
  availableSpots: number;
  isTrusted: boolean;
  isVerified: boolean;
}

interface SearchFilters {
  university: string;
  roomType: string;
  moveInDate: string;
  priceMin: string;
  priceMax: string;
  amenities: string[];
  location: string;
}

interface AppContextType {
  properties: Property[];
  searchFilters: SearchFilters;
  favorites: string[];
  searchQuery: string;
  filteredProperties: Property[];
  updateSearchFilters: (filters: Partial<SearchFilters>) => void;
  toggleFavorite: (propertyId: string) => void;
  setSearchQuery: (query: string) => void;
  clearFilters: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

const initialFilters: SearchFilters = {
  university: '',
  roomType: '',
  moveInDate: '',
  priceMin: '',
  priceMax: '',
  amenities: [],
  location: '',
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>(initialFilters);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample properties data - in real app this would come from API
  const properties: Property[] = [
    {
      id: '1',
      title: 'Modern Single Room in Mount Pleasant',
      location: 'Mount Pleasant, Harare',
      university: 'University of Zimbabwe',
      price: 250,
      rating: 4.8,
      reviewCount: 24,
      images: [
        '/src/assets/property-1-main.jpg', 
        '/src/assets/property-1-bath.jpg',
        '/src/assets/sample-room-1.jpg'
      ],
      amenities: ['WiFi', 'Kitchen', 'Security', 'Parking'],
      roomType: 'Single Room',
      availableSpots: 2,
      isTrusted: true,
      isVerified: true
    },
    {
      id: '2',
      title: 'Shared Kitchen & Living Space',
      location: 'Avondale, Harare',
      university: 'University of Zimbabwe',
      price: 180,
      rating: 4.6,
      reviewCount: 18,
      images: [
        '/src/assets/property-2-main.jpg',
        '/src/assets/property-2-living.jpg',
        '/src/assets/sample-room-2.jpg'
      ],
      amenities: ['WiFi', 'Kitchen', 'Laundry', 'Garden'],
      roomType: 'Shared House',
      availableSpots: 1,
      isTrusted: false,
      isVerified: true
    },
    {
      id: '3',
      title: 'Clean Private Bathroom',
      location: 'Newlands, Harare',
      university: 'University of Zimbabwe',
      price: 300,
      rating: 4.9,
      reviewCount: 31,
      images: [
        '/src/assets/property-3-main.jpg',
        '/src/assets/property-3-bedroom.jpg',
        '/src/assets/sample-room-3.jpg'
      ],
      amenities: ['WiFi', 'Private Bathroom', 'Security', 'Parking'],
      roomType: 'Studio',
      availableSpots: 1,
      isTrusted: true,
      isVerified: true
    },
    {
      id: '4',
      title: 'Budget-Friendly Shared Room',
      location: 'Marlborough, Harare',
      university: 'University of Zimbabwe',
      price: 120,
      rating: 4.3,
      reviewCount: 12,
      images: [
        '/src/assets/property-4-main.jpg',
        '/src/assets/property-4-study.jpg',
        '/src/assets/sample-room-1.jpg'
      ],
      amenities: ['WiFi', 'Kitchen', 'Bus Route'],
      roomType: 'Shared Room',
      availableSpots: 3,
      isTrusted: false,
      isVerified: true
    },
    {
      id: '5',
      title: 'Luxury Student Apartment',
      location: 'Borrowdale, Harare',
      university: 'University of Zimbabwe',
      price: 450,
      rating: 4.9,
      reviewCount: 41,
      images: [
        '/src/assets/property-5-main.jpg',
        '/src/assets/property-5-kitchen.jpg',
        '/src/assets/sample-room-2.jpg'
      ],
      amenities: ['WiFi', 'Gym', 'Pool', 'Security', 'Parking'],
      roomType: 'Studio',
      availableSpots: 1,
      isTrusted: true,
      isVerified: true
    },
    {
      id: '6',
      title: 'Cozy Room Near Campus',
      location: 'Eastlea, Harare',
      university: 'University of Zimbabwe',
      price: 200,
      rating: 4.5,
      reviewCount: 16,
      images: [
        '/src/assets/property-6-main.jpg',
        '/src/assets/property-6-study.jpg',
        '/src/assets/sample-room-3.jpg'
      ],
      amenities: ['WiFi', 'Kitchen', 'Study Area'],
      roomType: 'Single Room',
      availableSpots: 2,
      isTrusted: false,
      isVerified: true
    }
  ];

  // Filter properties based on search and filters
  const filteredProperties = properties.filter(property => {
    // Search query filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        property.title.toLowerCase().includes(searchLower) ||
        property.location.toLowerCase().includes(searchLower) ||
        property.university.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    // University filter
    if (searchFilters.university && property.university !== searchFilters.university) {
      return false;
    }

    // Room type filter
    if (searchFilters.roomType && property.roomType !== searchFilters.roomType) {
      return false;
    }

    // Price range filter
    if (searchFilters.priceMin && property.price < parseInt(searchFilters.priceMin)) {
      return false;
    }
    if (searchFilters.priceMax && property.price > parseInt(searchFilters.priceMax)) {
      return false;
    }

    // Amenities filter
    if (searchFilters.amenities.length > 0) {
      const hasAllAmenities = searchFilters.amenities.every(amenity => 
        property.amenities.includes(amenity)
      );
      if (!hasAllAmenities) return false;
    }

    // Location filter
    if (searchFilters.location) {
      const locationLower = searchFilters.location.toLowerCase();
      if (!property.location.toLowerCase().includes(locationLower)) {
        return false;
      }
    }

    return true;
  });

  const updateSearchFilters = (filters: Partial<SearchFilters>) => {
    setSearchFilters(prev => ({ ...prev, ...filters }));
  };

  const toggleFavorite = (propertyId: string) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const clearFilters = () => {
    setSearchFilters(initialFilters);
    setSearchQuery('');
  };

  return (
    <AppContext.Provider value={{
      properties,
      searchFilters,
      favorites,
      searchQuery,
      filteredProperties,
      updateSearchFilters,
      toggleFavorite,
      setSearchQuery,
      clearFilters,
    }}>
      {children}
    </AppContext.Provider>
  );
};