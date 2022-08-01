import { IZipCode } from '../dtos/IZipCode';
import { ZipCode } from '../model/ZipCode';

export interface IRedisRepositoryInMemory {
  addToCache({ zipCode, date, data }: IZipCode): Promise<void>;
  removeBy(zipCode: string): Promise<void>;
  findBy(zipCode: string): Promise<ZipCode>;
}
