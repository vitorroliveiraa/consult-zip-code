import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../model/User';

export interface IUsersRepository {
  create({ name, password, email }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
  listAll(): Promise<User[]>;
}
