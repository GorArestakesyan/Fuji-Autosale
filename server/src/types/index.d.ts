export interface Vehicle {
  id?: number;
  name: string;
  year: number;
  model: string;
  price: number;
  color: string;
  used: boolean;
  vinCode: string;
  mileage: number;
  createdBy: string;
  createdAt?: string;
  description?: string;
}
