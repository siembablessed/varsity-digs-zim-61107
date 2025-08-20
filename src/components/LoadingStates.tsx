import { Card } from '@/components/ui/card';

const PropertyCardSkeleton = () => {
  return (
    <Card className="overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] animate-shimmer"></div>
      
      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Location */}
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 bg-muted rounded"></div>
          <div className="h-4 w-24 bg-muted rounded"></div>
        </div>
        
        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-3/4 bg-muted rounded"></div>
          <div className="h-4 w-1/2 bg-muted rounded"></div>
        </div>
        
        {/* Rating and Room Type */}
        <div className="flex justify-between">
          <div className="h-4 w-20 bg-muted rounded"></div>
          <div className="h-4 w-16 bg-muted rounded"></div>
        </div>
        
        {/* Amenities */}
        <div className="flex gap-2">
          <div className="h-6 w-12 bg-muted rounded-full"></div>
          <div className="h-6 w-16 bg-muted rounded-full"></div>
          <div className="h-6 w-14 bg-muted rounded-full"></div>
        </div>
        
        {/* Price and Button */}
        <div className="flex justify-between items-center pt-2">
          <div className="h-6 w-20 bg-muted rounded"></div>
          <div className="h-8 w-24 bg-muted rounded"></div>
        </div>
      </div>
    </Card>
  );
};

const LoadingStates = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="h-8 w-64 bg-muted rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 w-96 bg-muted rounded mx-auto animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoadingStates;