// hooks/useProductsQuery.ts
import {useQuery} from '@tanstack/react-query';
import {TProducts} from '@types';
import {ServicesContainer} from '../../implementations/servicesContainer';

const useProductsQuery = () => {
  const productService = new ServicesContainer();

  return useQuery<TProducts>({
    queryKey: ['products'],
    queryFn: () => productService.resolve('ProductService').fetchProducts(),
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
};

export {useProductsQuery};
