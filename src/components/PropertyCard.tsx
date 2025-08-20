import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Users, Wifi, Car, Utensils, Shield } from 'lucide-react';

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
}

const PropertyCard = ({
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
  isVerified = false
}: PropertyCardProps) => {
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
    <div className="bg-card rounded-lg overflow-hidden shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 group">
      {/* Image Gallery */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={images[0]} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isVerified && (
            <Badge className="bg-secondary text-secondary-foreground">
              Verified
            </Badge>
          )}
          {isTrusted && (
            <Badge className="bg-trusted-badge text-white">
              Trusted Host
            </Badge>
          )}
        </div>

        {/* Available Spots */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {availableSpots} spots left
          </Badge>
        </div>
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
          
          <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;