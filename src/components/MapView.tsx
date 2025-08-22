import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Maximize2, Minimize2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface MapViewProps {
  properties: any[];
  selectedProperty?: any;
  onPropertySelect: (property: any) => void;
}

const MapView = ({ properties, selectedProperty, onPropertySelect }: MapViewProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Mock map data - In real implementation, you'd use Google Maps or Mapbox
  const mapData = properties.map((property, index) => ({
    ...property,
    coordinates: {
      lat: -17.8216 + (Math.random() - 0.5) * 0.1, // Around Harare
      lng: 31.0492 + (Math.random() - 0.5) * 0.1
    }
  }));

  const MapComponent = ({ className }: { className?: string }) => (
    <div className={`relative bg-muted rounded-lg overflow-hidden ${className}`}>
      {/* Mock Map Background */}
      <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 relative">
        {/* Mock Roads */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-300"></div>
          <div className="absolute top-3/4 left-0 right-0 h-1 bg-gray-300"></div>
          <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-gray-300"></div>
          <div className="absolute top-0 bottom-0 right-1/3 w-1 bg-gray-300"></div>
        </div>

        {/* University Marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-blue-600 text-white p-2 rounded-lg shadow-lg text-xs font-medium">
            University of Zimbabwe
          </div>
        </div>

        {/* Property Markers */}
        {mapData.map((property, index) => {
          const x = 20 + (index % 4) * 20;
          const y = 20 + Math.floor(index / 4) * 25;
          
          return (
            <div
              key={property.id}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                selectedProperty?.id === property.id ? 'z-20' : 'z-10'
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={() => onPropertySelect(property)}
            >
              <div className={`
                bg-white border-2 rounded-lg p-2 shadow-lg transition-all duration-200 hover:scale-110
                ${selectedProperty?.id === property.id ? 'border-primary bg-primary text-white' : 'border-gray-300'}
              `}>
                <div className="text-xs font-medium whitespace-nowrap">
                  ${property.price}
                </div>
                <div className="text-xs opacity-75">
                  {property.tenants} spots
                </div>
              </div>
            </div>
          );
        })}

        {/* Controls */}
        <div className="absolute top-4 right-4 space-y-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-white shadow-md"
            onClick={() => setIsFullscreen(true)}
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white shadow-md"
          >
            <Navigation className="h-4 w-4" />
          </Button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span>University</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded"></div>
              <span>Available Properties</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Property Info */}
      {selectedProperty && (
        <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
          <div className="flex gap-3">
            <img 
              src={selectedProperty.images[0]} 
              alt={selectedProperty.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">{selectedProperty.title}</h4>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {selectedProperty.location}
              </p>
              <p className="text-sm font-semibold text-primary">${selectedProperty.price}/month</p>
              <div className="flex gap-1 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {selectedProperty.tenants} spots
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {selectedProperty.rating}★
                </Badge>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <MapComponent className="h-96" />
      
      {/* Fullscreen Map */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-7xl max-h-[90vh] p-2">
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-30 bg-white shadow-md"
              onClick={() => setIsFullscreen(false)}
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <MapComponent className="h-[80vh]" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MapView;