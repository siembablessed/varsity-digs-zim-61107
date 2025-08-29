import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  MapPin, 
  Star, 
  Users, 
  Wifi, 
  Car, 
  Shield, 
  Utensils,
  Bath,
  Dumbbell,
  Trees,
  GraduationCap,
  Phone,
  MessageCircle
} from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { properties, favorites, toggleFavorite } = useApp();
  
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const isFavorited = favorites.includes(property.id);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'parking': return <Car className="h-4 w-4" />;
      case 'security': return <Shield className="h-4 w-4" />;
      case 'kitchen': return <Utensils className="h-4 w-4" />;
      case 'private bathroom': return <Bath className="h-4 w-4" />;
      case 'gym': return <Dumbbell className="h-4 w-4" />;
      case 'garden': return <Trees className="h-4 w-4" />;
      case 'study area': return <GraduationCap className="h-4 w-4" />;
      default: return <div className="h-4 w-4 rounded-full bg-primary" />;
    }
  };

  const handleContact = () => {
    toast.success("Contact information sent to your email!");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to search
          </Button>
        </div>

        {/* Property Images */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 h-[400px] lg:h-[500px]">
            {/* Main Image */}
            <div className="lg:col-span-3">
              <img 
                src={property.images[0]} 
                alt={property.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Secondary Images */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${property.title} - ${index + 2}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={property.isTrusted ? "default" : "secondary"}>
                    {property.isTrusted ? "Trusted Host" : "New Host"}
                  </Badge>
                  {property.isVerified && (
                    <Badge variant="outline">Verified</Badge>
                  )}
                </div>
                
                <h1 className="text-2xl lg:text-3xl font-bold mb-2">{property.title}</h1>
                
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">{property.rating}</span>
                    <span className="text-sm">({property.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{property.availableSpots} spots available • {property.roomType}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleFavorite(property.id)}
                  className={isFavorited ? "text-red-500 border-red-200" : ""}
                >
                  <Heart className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Separator />

            {/* University Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Near {property.university}
                </h3>
                <p className="text-muted-foreground">
                  Walking distance to campus. Easy access to lectures, library, and student facilities.
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <div>
              <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {getAmenityIcon(amenity)}
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About this place</h3>
              <p className="text-muted-foreground leading-relaxed">
                This comfortable {property.roomType.toLowerCase()} is perfect for students attending {property.university}. 
                Located in the heart of {property.location.split(',')[0]}, you'll have easy access to campus, 
                local amenities, and public transportation. The space is fully furnished and includes all utilities.
              </p>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    ${property.price}
                    <span className="text-base font-normal text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">All bills included</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={handleContact}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Host
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={handleContact}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground text-center">
                  You won't be charged yet. Contact the host to arrange viewing.
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monthly rent</span>
                    <span>${property.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>$0</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${property.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetails;