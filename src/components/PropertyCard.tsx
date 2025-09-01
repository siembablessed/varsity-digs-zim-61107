import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Users, Wifi, Car, Utensils, Shield, Heart, Share2, ChevronLeft, ChevronRight, BarChart3, Eye } from 'lucide-react';
import ImageGallery from './ImageGallery';

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
  onAddToComparison?: (property: any) => void;
  isInComparison?: boolean;
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
  isFavorited = false,
  onAddToComparison,
  isInComparison = false
}: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const propertyData = {
    id, title, location, university, price, rating, reviewCount, 
    images, amenities, roomType, availableSpots, isTrusted, isVerified
  };
  
  const getAmenityIcon = (amenity: string) => {
    const icons: { [key: string]: JSX.Element } = {
      'WiFi': <Wifi className="h-3 w-3" />,
      'Parking': <Car className="h-3 w-3" />,
      'Kitchen': <Utensils className="h-3 w-3" />,
      'Security': <Shield className="h-3 w-3" />
    };
    return icons[amenity] || null;
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="group cursor-pointer animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails?.(id)}
    >
      {/* Image Gallery */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-3">
        <img 
          src={images[currentImageIndex] || images[0]} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            setShowGallery(true);
          }}
        />
        
        {/* View Gallery Button */}
        {images.length > 1 && isHovered && (
          <Button
            size="sm"
            variant="secondary"
            className="absolute bottom-3 left-3 opacity-90"
            onClick={(e) => {
              e.stopPropagation();
              setShowGallery(true);
            }}
          >
            <Eye className="h-3 w-3 mr-1" />
            View All ({images.length})
          </Button>
        )}
        
        {/* Image Navigation */}
        {images.length > 1 && isHovered && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {isVerified && (
            <Badge className="bg-white text-foreground text-xs font-medium shadow-sm">
              ✓ Verified
            </Badge>
          )}
          {isTrusted && (
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium shadow-sm">
              Trusted Host
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite?.(id);
            }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
          >
            <Heart 
              className={`h-4 w-4 transition-colors duration-200 ${
                isFavorited 
                  ? 'fill-red-500 text-red-500' 
                  : 'text-white hover:text-red-300'
              }`} 
            />
          </button>
          
          {onAddToComparison && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToComparison(propertyData);
              }}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                isInComparison 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-white/10 hover:bg-white/20 text-white hover:text-primary'
              }`}
              title={isInComparison ? 'Remove from comparison' : 'Add to comparison'}
            >
              <BarChart3 className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Image Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Available Spots Overlay */}
        {availableSpots <= 2 && (
          <div className="absolute bottom-3 right-3">
            <Badge className="bg-red-500 text-white text-xs font-medium shadow-sm">
              Only {availableSpots} left!
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        {/* Location & Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="h-3 w-3" />
            <span className="truncate">{location}</span>
          </div>
          
          {rating > 0 && (
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-current text-foreground" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-medium text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        {/* University & Room Type */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="truncate">{university.replace(/\s*\([^)]*\)/, '')}</span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {roomType}
          </span>
        </div>

        {/* Amenities Preview */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {amenities.slice(0, 3).map((amenity) => (
            <div key={amenity} className="flex items-center gap-1">
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
          {amenities.length > 3 && (
            <span>+{amenities.length - 3}</span>
          )}
        </div>

        {/* Price */}
        <div className="pt-1">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-semibold text-foreground">${price}</span>
            <span className="text-sm text-muted-foreground">per month</span>
          </div>
        </div>
      </div>
      
      {/* Image Gallery Modal */}
      <ImageGallery
        images={images}
        isOpen={showGallery}
        onClose={() => setShowGallery(false)}
        initialIndex={currentImageIndex}
      />
    </div>
  );
};

export default PropertyCard;