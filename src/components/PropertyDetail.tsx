import { useState } from 'react';
import { X, MapPin, Users, Wifi, Car, Utensils, Heart, Share2, MessageCircle, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

interface PropertyDetailProps {
  property: any;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetail = ({ property, isOpen, onClose }: PropertyDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  if (!property) return null;

  const amenityIcons = {
    wifi: <Wifi className="h-4 w-4" />,
    parking: <Car className="h-4 w-4" />,
    kitchen: <Utensils className="h-4 w-4" />,
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <DialogTitle className="text-xl font-bold">{property.title}</DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={property.images[currentImageIndex]} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 mt-3 overflow-x-auto">
              {property.images.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  alt={`View ${index + 1}`}
                  className={`w-20 h-16 object-cover rounded cursor-pointer transition-opacity ${
                    index === currentImageIndex ? 'opacity-100 ring-2 ring-primary' : 'opacity-70'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Property Info */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-6">
              {/* Basic Info */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">${property.price}/month</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{property.tenants} available spots</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{property.rating}</span>
                  </div>
                  {property.trusted && (
                    <Badge variant="secondary" className="text-xs">
                      Trusted Owner
                    </Badge>
                  )}
                </div>

                {/* Amenities */}
                <div className="space-y-2">
                  <h4 className="font-medium">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity: string) => (
                      <Badge key={amenity} variant="outline" className="flex items-center gap-1">
                        {amenityIcons[amenity as keyof typeof amenityIcons]}
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h4 className="font-medium mb-2">About this property</h4>
                <p className="text-muted-foreground">
                  Spacious and well-maintained accommodation perfect for students. Located in a safe neighborhood 
                  with easy access to campus. All rooms are furnished and utilities are included in the rent. 
                  Common areas are shared and well-maintained. Perfect for serious students looking for a 
                  comfortable living environment.
                </p>
              </div>

              <Separator />

              {/* Owner Info */}
              <div>
                <h4 className="font-medium mb-2">Meet your host</h4>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-medium">
                      {property.owner?.charAt(0) || 'O'}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{property.owner || 'Property Owner'}</p>
                    <p className="text-sm text-muted-foreground">Hosting since 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:w-80">
              <div className="bg-card p-6 rounded-lg shadow-md border sticky top-4">
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">${property.price}/month</h3>
                    <p className="text-sm text-muted-foreground">All utilities included</p>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Available spots:</span>
                      <span className="text-sm font-medium">{property.tenants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Move-in date:</span>
                      <span className="text-sm font-medium">Flexible</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Button 
                      className="w-full" 
                      onClick={() => setShowInquiryForm(true)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Inquiry
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Visit
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    No booking fees • Secure messaging • Verified property
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <h4 className="font-medium mb-4">Student Reviews</h4>
            <div className="space-y-4">
              {[1, 2].map((review) => (
                <div key={review} className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">S{review}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Student {review}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Great place to stay! The owner is very responsive and the location is perfect for university. 
                    Would definitely recommend to other students.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inquiry Form Modal */}
        {showInquiryForm && (
          <InquiryForm 
            property={property}
            isOpen={showInquiryForm}
            onClose={() => setShowInquiryForm(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

// Simple Inquiry Form Component
const InquiryForm = ({ property, isOpen, onClose }: { property: any; isOpen: boolean; onClose: () => void }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Send Inquiry</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Your message</label>
            <textarea 
              className="w-full mt-1 p-3 border rounded-md resize-none" 
              rows={4}
              placeholder="Hi, I'm interested in this accommodation. When can I schedule a viewing?"
            />
          </div>
          <div className="flex gap-2">
            <Button className="flex-1">Send Message</Button>
            <Button variant="outline" onClick={onClose}>Cancel</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetail;