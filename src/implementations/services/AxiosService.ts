// services/AxiosService.ts
import {BASE_URL} from '@env';
import axios, {AxiosInstance} from 'axios';

export class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL, // Set your base URL
      timeout: 5000,
    });
  }

  get instance() {
    return this.axiosInstance;
  }
}
