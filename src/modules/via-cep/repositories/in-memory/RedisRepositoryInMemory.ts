import { IZipCode } from '../../dtos/IZipCode';
import { ZipCode } from '../../model/ZipCode';
import { IRedisRepositoryInMemory } from '../IRedisRepositoryInMemory';

export class RedisRepositoryInMemory implements IRedisRepositoryInMemory {
  zipCodeList: ZipCode[] = [];

  async addToCache({ zipCode, date, data }: IZipCode): Promise<void> {
    const zipCodeCache = new ZipCode();

    Object.assign(zipCodeCache, {
      zipCode,
      date,
      data,
    });

    this.zipCodeList.push(zipCodeCache);
  }

  async removeBy(zipCode: string): Promise<void> {
    const userIndex = this.zipCodeList.findIndex(
      user => user.zipCode === zipCode
    );

    if (userIndex > -1) this.zipCodeList.splice(userIndex, 1);
  }

  async findBy(zipCode: string): Promise<ZipCode> {
    return this.zipCodeList.find(user => user.zipCode === zipCode) as ZipCode;
  }
}
