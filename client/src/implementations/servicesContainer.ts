import Bottle from 'bottlejs';
import { ApiService } from './services/ApiService';
import { AxiosService } from './services/AxiosService';
import { VehiclesService } from './services/VehiclesService';

// Describe all DI-container services here.
const services = {
  ApiService,
  VehiclesService,
  AxiosService,
};
export type TServices = typeof services;

export class ServicesContainer {
  #services: TServices = services;
  bottle: Bottle;

  constructor() {
    const bottle = new Bottle();

    for (const depName in this.#services) {
      const serviceConstructor = this.#services[depName as keyof TServices];
      bottle.service(
        depName,
        serviceConstructor as never,
        ...(serviceConstructor.inject ?? []),
      );
    }

    this.bottle = bottle;
  }

  resolve<T extends keyof typeof services>(depName: T) {
    return this.bottle.container[depName] as InstanceType<TServices[T]>;
  }
}
