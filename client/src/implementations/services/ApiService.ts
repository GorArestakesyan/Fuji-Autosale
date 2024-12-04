import { AxiosService } from './AxiosService';

export class ApiService {
  private axiosService: AxiosService;

  static inject = ['AxiosService'];

  constructor(axiosService: AxiosService) {
    this.axiosService = axiosService;
  }

  async fetchData() {
    const response = await this.axiosService.instance.get('/data');
    return response.data;
  }
}
