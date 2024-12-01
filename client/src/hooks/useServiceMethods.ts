import { ApiService } from '@implementations/services';

export const useServiceMethods = (serviceName: keyof ApiService) => {
  const services = new ApiService();
  const foundedService = new services[serviceName]();
  return foundedService;
};
