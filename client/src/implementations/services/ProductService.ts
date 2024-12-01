import {BASE_URL} from '@env';
import {TProduct} from '@types';
import {AxiosService} from './AxiosService';

type TResponse = {
  products: TProduct[];
};

export class ProductService {
  private axiosService: AxiosService;

  static inject = ['AxiosService']; // Specify AxiosService as a dependency

  constructor(axiosService: AxiosService) {
    this.axiosService = axiosService;
  }

  async fetchProducts(): Promise<TProduct[]> {
    const response = await this.axiosService.instance.get<TResponse>(
      `${BASE_URL}/products`,
    );
    return response.data.products;
  }
}
