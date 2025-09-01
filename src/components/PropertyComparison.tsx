import { useState } from 'react';
import { X, Star, MapPin, Users, Wifi, Car, Utensils, Shield, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

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

interface PropertyComparisonProps {
  properties: Property[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveProperty: (id: string) => void;
}

const PropertyComparison = ({ properties, isOpen, onClose, onRemoveProperty }: PropertyComparisonProps) => {
  const getAmenityIcon = (amenity: string) => {
    const icons: { [key: string]: JSX.Element } = {
      'WiFi': <Wifi className="h-4 w-4" />,
      'Parking': <Car className="h-4 w-4" />,
      'Kitchen': <Utensils className="h-4 w-4" />,
      'Security': <Shield className="h-4 w-4" />
    };
    return icons[amenity] || null;
  };

  const allAmenities = Array.from(
    new Set(properties.flatMap(p => p.amenities))
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Compare Properties
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        {properties.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No properties selected for comparison</p>
            <Button onClick={onClose} className="mt-4">
              Close
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div className="min-w-[800px] grid gap-4" style={{ gridTemplateColumns: `repeat(${properties.length}, 1fr)` }}>
              {/* Property Cards */}
              {properties.map((property) => (
                <div key={property.id} className="border rounded-lg p-4 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-6 w-6"
                    onClick={() => onRemoveProperty(property.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                  
                  <div className="space-y-3">
                    <img 
                      src={property.images[0]} 
                      alt={property.title}
                      className="w-full h-32 object-cover rounded"
                    />
                    
                    <div>
                      <h3 className="font-medium text-sm line-clamp-2">{property.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        <span>{property.location}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">${property.price}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current text-yellow-400" />
                          <span className="text-xs">{property.rating}</span>
                        </div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        {property.roomType} • {property.availableSpots} spots
                      </div>
                      
                      <div className="flex gap-1">
                        {property.isVerified && (
                          <Badge variant="secondary" className="text-xs">Verified</Badge>
                        )}
                        {property.isTrusted && (
                          <Badge variant="default" className="text-xs">Trusted</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            {/* Detailed Comparison */}
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Pricing Comparison</h4>
                <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${properties.length}, 1fr)` }}>
                  {properties.map((property) => (
                    <div key={property.id} className="text-center p-3 bg-muted/50 rounded">
                      <div className="text-2xl font-bold text-primary">${property.price}</div>
                      <div className="text-xs text-muted-foreground">per month</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Amenities Comparison</h4>
                <div className="space-y-2">
                  {allAmenities.map((amenity) => (
                    <div key={amenity} className="grid gap-2 items-center" style={{ gridTemplateColumns: `120px repeat(${properties.length}, 1fr)` }}>
                      <div className="flex items-center gap-2 text-sm">
                        {getAmenityIcon(amenity)}
                        {amenity}
                      </div>
                      {properties.map((property) => (
                        <div key={property.id} className="text-center">
                          {property.amenities.includes(amenity) ? (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                              <Plus className="h-3 w-3 text-white" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                              <Minus className="h-3 w-3 text-gray-600" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Quick Stats</h4>
                <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${properties.length}, 1fr)` }}>
                  {properties.map((property) => (
                    <div key={property.id} className="space-y-2 p-3 bg-muted/50 rounded">
                      <div className="flex justify-between text-sm">
                        <span>Rating:</span>
                        <span className="font-medium">{property.rating}/5</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Reviews:</span>
                        <span className="font-medium">{property.reviewCount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Available:</span>
                        <span className="font-medium">{property.availableSpots} spots</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>University:</span>
                        <span className="font-medium text-xs">{property.university.replace(/\s*\([^)]*\)/, '')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PropertyComparison;