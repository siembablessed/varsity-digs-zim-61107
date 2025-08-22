import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Map } from 'lucide-react';
import PropertyCard from './PropertyCard';
import PropertyDetail from './PropertyDetail';
import MapView from './MapView';
import sampleRoom1 from '@/assets/sample-room-1.jpg';
import sampleRoom2 from '@/assets/sample-room-2.jpg';
import sampleRoom3 from '@/assets/sample-room-3.jpg';

const PropertyGrid = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showPropertyDetail, setShowPropertyDetail] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const handleViewDetails = (id: string) => {
    const property = properties.find(p => p.id === id);
    if (property) {
      setSelectedProperty({
        ...property,
        images: property.images,
        tenants: property.availableSpots,
        rating: property.rating,
        trusted: property.isTrusted,
        owner: 'Property Owner'
      });
      setShowPropertyDetail(true);
    }
  };

  const handlePropertySelect = (property: any) => {
    setSelectedProperty(property);
  };
  // Sample data - in real app this would come from backend
  const properties = [
    {
      id: '1',
      title: 'Modern Single Room in Mount Pleasant',
      location: 'Mount Pleasant, Harare',
      university: 'University of Zimbabwe',
      price: 250,
      rating: 4.8,
      reviewCount: 24,
      images: [sampleRoom1, sampleRoom2, sampleRoom3],
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
      images: [sampleRoom2],
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
      images: [sampleRoom3],
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
      images: [sampleRoom1],
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
      images: [sampleRoom2],
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
      images: [sampleRoom3],
      amenities: ['WiFi', 'Kitchen', 'Study Area'],
      roomType: 'Single Room',
      availableSpots: 2,
      isTrusted: false,
      isVerified: true
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Accommodations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover verified student accommodations near University of Zimbabwe. 
            All properties are vetted by our team and reviewed by students.
          </p>
        </div>

        {/* View Toggle */}
        <div className="mb-8">
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'grid' | 'map')}>
            <TabsList className="grid w-fit grid-cols-2">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-2">
                <Map className="h-4 w-4" />
                Map View
              </TabsTrigger>
            </TabsList>

            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property, index) => (
                  <div key={property.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <PropertyCard
                      {...property}
                      onViewDetails={handleViewDetails}
                      onToggleFavorite={handleToggleFavorite}
                      isFavorited={favorites.includes(property.id)}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="map">
              <MapView 
                properties={properties.map(p => ({
                  ...p,
                  images: p.images,
                  tenants: p.availableSpots,
                  rating: p.rating,
                  trusted: p.isTrusted
                }))}
                selectedProperty={selectedProperty}
                onPropertySelect={handlePropertySelect}
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-8">
          <Button 
            size="lg"
            className="px-8"
          >
            Load More Properties
          </Button>
        </div>
      </div>

      {/* Property Detail Modal */}
      <PropertyDetail
        property={selectedProperty}
        isOpen={showPropertyDetail}
        onClose={() => setShowPropertyDetail(false)}
      />
    </section>
  );
};

export default PropertyGrid;