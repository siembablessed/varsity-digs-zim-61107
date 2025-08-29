import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Map } from 'lucide-react';
import PropertyCard from './PropertyCard';
import PropertyDetail from './PropertyDetail';
import MapView from './MapView';

const PropertyGrid = () => {
  const navigate = useNavigate();
  const { filteredProperties, toggleFavorite, favorites } = useApp();
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [showPropertyDetail, setShowPropertyDetail] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const handleViewDetails = (id: string) => {
    navigate(`/property/${id}`);
  };

  const handlePropertySelect = (property: any) => {
    setSelectedProperty(property);
  };

  return (
    <section id="property-results" className="py-8 sm:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4">
            Student accommodation near you
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Verified properties reviewed by students
          </p>
        </div>

        {/* View Toggle */}
        <div className="mb-6 sm:mb-8">
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'grid' | 'map')}>
            <TabsList className="grid w-fit grid-cols-2 h-9 sm:h-10">
              <TabsTrigger value="grid" className="text-xs sm:text-sm px-3 sm:px-4">Grid View</TabsTrigger>
              <TabsTrigger value="map" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4">
                <Map className="h-3 w-3 sm:h-4 sm:w-4" />
                Map View
              </TabsTrigger>
            </TabsList>

          <TabsContent value="grid" className="mt-4 sm:mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {filteredProperties.map((property, index) => (
                <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <PropertyCard
                    {...property}
                    onViewDetails={handleViewDetails}
                    onToggleFavorite={toggleFavorite}
                    isFavorited={favorites.includes(property.id)}
                  />
                </div>
              ))}
            </div>
          </TabsContent>

            <TabsContent value="map">
              <MapView 
                properties={filteredProperties.map(p => ({
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

        <div className="text-center mt-6 sm:mt-8">
          <Button 
            size="lg"
            className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium hover:shadow-lg transition-all duration-200"
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