import { hash } from 'bcryptjs';
import { v4 as uuidV4 } from 'uuid';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../model/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({ name, password, email }: ICreateUserDTO): Promise<void> {
    const id = uuidV4();
    const encodedPassword = await hash(password, 8);

    const adminUser: ICreateUserDTO = {
      id,
      name,
      password: encodedPassword,
      email,
    };

    this.users.push(adminUser);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async listAll(): Promise<User[]> {
    return this.users.filter(obj => {
      return obj;
    });
  }
}
