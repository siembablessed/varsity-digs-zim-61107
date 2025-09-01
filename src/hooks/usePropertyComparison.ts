import { useState, useCallback } from 'react';

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

export const usePropertyComparison = () => {
  const [comparisonList, setComparisonList] = useState<Property[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const addToComparison = useCallback((property: Property) => {
    setComparisonList(prev => {
      // Limit to 3 properties for comparison
      if (prev.length >= 3) {
        return [...prev.slice(1), property];
      }
      // Don't add if already exists
      if (prev.find(p => p.id === property.id)) {
        return prev;
      }
      return [...prev, property];
    });
  }, []);

  const removeFromComparison = useCallback((propertyId: string) => {
    setComparisonList(prev => prev.filter(p => p.id !== propertyId));
  }, []);

  const clearComparison = useCallback(() => {
    setComparisonList([]);
  }, []);

  const isInComparison = useCallback((propertyId: string) => {
    return comparisonList.some(p => p.id === propertyId);
  }, [comparisonList]);

  const openComparison = useCallback(() => {
    setIsComparisonOpen(true);
  }, []);

  const closeComparison = useCallback(() => {
    setIsComparisonOpen(false);
  }, []);

  return {
    comparisonList,
    isComparisonOpen,
    addToComparison,
    removeFromComparison,
    clearComparison,
    isInComparison,
    openComparison,
    closeComparison,
    comparisonCount: comparisonList.length
  };
};