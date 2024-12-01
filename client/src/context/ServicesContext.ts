import { ServicesContainer } from '@implementations/servicesContainer';
import { createContext, useContext } from 'react';

export const ServicesContext = createContext<ServicesContainer | null>(null);
export const ServicesProvider = ServicesContext.Provider;
export const useService: ServicesContainer['resolve'] = token => {
  const servicesContext = useContext(ServicesContext);
  if (!servicesContext) {
    if (process.env.NODE_ENV === 'test') {
      return new Proxy(
        {},
        {
          get: () =>
            function () {
              /* stub */
            },
        },
      ) as any;
    } else {
      throw new Error('wrap app to the ServicesContext');
    }
  }

  return servicesContext.resolve(token);
};

/** @todo add logger */
// export const useLogger = (contextName: string) => {
//   const logger = useService('logger');
//   const specificLogger = useRef(logger.child(contextName)).current;

//   return specificLogger;
// };
