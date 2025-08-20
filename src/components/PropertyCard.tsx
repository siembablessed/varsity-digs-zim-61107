import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Users, Wifi, Car, Utensils, Shield, Heart, Share2 } from 'lucide-react';

interface PropertyCardProps {
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
  isTrusted?: boolean;
  isVerified?: boolean;
  onViewDetails?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
  isFavorited?: boolean;
}

const PropertyCard = ({
  id,
  title,
  location,
  university,
  price,
  rating,
  reviewCount,
  images,
  amenities,
  roomType,
  availableSpots,
  isTrusted = false,
  isVerified = false,
  onViewDetails,
  onToggleFavorite,
  isFavorited = false
}: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const getAmenityIcon = (amenity: string) => {
    const icons: { [key: string]: JSX.Element } = {
      'WiFi': <Wifi className="h-4 w-4" />,
      'Parking': <Car className="h-4 w-4" />,
      'Kitchen': <Utensils className="h-4 w-4" />,
      'Security': <Shield className="h-4 w-4" />
    };
    return icons[amenity] || null;
  };

  return (
    <div 
      className="bg-card rounded-lg overflow-hidden shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 group animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Gallery */}
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => onViewDetails?.(id)}>
        <img 
          src={images[currentImageIndex] || images[0]} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isVerified && (
            <Badge className="bg-secondary text-secondary-foreground animate-scale-in">
              Verified
            </Badge>
          )}
          {isTrusted && (
            <Badge className="bg-trusted-badge text-white animate-scale-in">
              Trusted Host
            </Badge>
          )}
        </div>

        {/* Available Spots */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-foreground animate-scale-in">
            {availableSpots} spots left
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className={`absolute top-3 right-3 flex gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}>
          <Button
            size="sm"
            variant="outline"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite?.(id);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Image Navigation Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Location & University */}
        <div className="space-y-1">
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          <p className="text-xs text-muted-foreground">Near {university}</p>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Room Type & Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{roomType}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-rating-star text-rating-star" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2">
          {amenities.slice(0, 4).map((amenity) => (
            <div key={amenity} className="flex items-center gap-1 text-xs text-muted-foreground">
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
          {amenities.length > 4 && (
            <span className="text-xs text-muted-foreground">+{amenities.length - 4} more</span>
          )}
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            <span className="text-lg font-bold text-card-foreground">${price}</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          
          <Button 
            size="sm" 
            variant="outline" 
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
            onClick={() => onViewDetails?.(id)}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;