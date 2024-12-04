import { TVehicles } from '@types';
import { AxiosService } from './AxiosService';

type TResponse = {
  vehicles: TVehicles;
};

export class VehiclesService {
  private axiosService: AxiosService;

  static inject = ['AxiosService']; // Specify AxiosService as a dependency

  constructor(axiosService: AxiosService) {
    this.axiosService = axiosService;
  }

  async fetchVehicles(): Promise<TResponse> {
    const response = await this.axiosService.instance.get<TResponse>(
      `${process.env.BASE_URL}/vehicles`,
    );
    console.log('response.data', response.data);
    return response.data;
  }
}
