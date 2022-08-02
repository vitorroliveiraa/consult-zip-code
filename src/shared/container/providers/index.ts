import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/IDateProvider';
import { DayjsDateProvider } from './DateProvider/implementations/DayjsDateProvider';
import { IAxiosProvider } from './HttpClientProvider/IAxiosProvider';
import { AxiosProvider } from './HttpClientProvider/implementations/AxiosProvider';

container.registerSingleton<IDateProvider>(
  'DayjsDateProvider',
  DayjsDateProvider
);

container.registerSingleton<IAxiosProvider>('AxiosProvider', AxiosProvider);
