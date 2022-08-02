import { inject, injectable } from 'tsyringe';

import { IDateProvider } from '../../../../shared/container/providers/DateProvider/IDateProvider';
import { IAxiosProvider } from '../../../../shared/container/providers/HttpClientProvider/IAxiosProvider';
import { AppError } from '../../../../shared/errors/AppError';
import { IRedisRepositoryInMemory } from '../../repositories/IRedisRepositoryInMemory';

@injectable()
export class ConsultZipCodeUseCase {
  constructor(
    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider,
    @inject('RedisRepositoryInMemory')
    private redisRepositoryInMemory: IRedisRepositoryInMemory,
    @inject('AxiosProvider')
    private axiosProvider: IAxiosProvider
  ) {}

  async execute(zipCode: string): Promise<object> {
    const zipCodeAlreadyExists = await this.redisRepositoryInMemory.findBy(
      zipCode
    );

    if (zipCodeAlreadyExists) {
      const minutes = this.dateProvider.compareDates(
        zipCodeAlreadyExists.date,
        this.dateProvider.dateNow()
      );

      if (minutes <= 5) {
        const zipCodeReturned = {
          address: zipCodeAlreadyExists.data,
          type: 'cache',
        };

        return zipCodeReturned;
      }

      await this.redisRepositoryInMemory.removeBy(zipCode);
    }

    const response = await this.axiosProvider.findBy(zipCode);

    if (response.data.erro) throw new AppError('zip code not found!', 404);

    const address = response.data;

    await this.redisRepositoryInMemory.addToCache({
      zipCode,
      date: this.dateProvider.dateNow(),
      data: address,
    });

    const zipCodeReturned = {
      address,
      type: 'via-cep',
    };

    return zipCodeReturned;
  }
}
