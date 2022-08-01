import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class CreateUsersUseCase {
  constructor(
    @inject('UsersRepositoryInMemory')
    private usersRepositoryInMemory: IUsersRepository
  ) {}

  async execute({ name, password, email }: ICreateUserDTO) {
    this.usersRepositoryInMemory.create({ name, password, email });
  }
}
