// hooks/useVehiclesQuery.ts
import { useQuery } from '@tanstack/react-query';
import { TVehicles } from '@types';
import { ServicesContainer } from '../../implementations/servicesContainer';

const useVehiclesQuery = () => {
  const productService = new ServicesContainer();

  return useQuery<TVehicles>({
    queryKey: ['vehicles'],
    queryFn: () => productService.resolve('VehiclesService').fetchVehicles(),
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
};

export { useVehiclesQuery };
