import { UsersTokens } from 'modules/accounts/model/UsersTokens';

import { ICreateUserTokenDTO } from '../../dtos/ICreateUserTokenDTO';
import { IUsersTokensRepository } from '../IUsersTokensRepository';

export class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
  usersTokens: UsersTokens[] = [];

  async create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UsersTokens> {
    const usersTokens = new UsersTokens();

    Object.assign(usersTokens, {
      expires_date,
      refresh_token,
      user_id,
    });

    this.usersTokens.push(usersTokens);

    return usersTokens;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UsersTokens> {
    const userToken = this.usersTokens.find(
      ut => ut.user_id === user_id && ut.refresh_token === refresh_token
    ) as UsersTokens;

    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    const userToken = this.usersTokens.find(ut => ut.id === id) as UsersTokens;

    this.usersTokens.splice(this.usersTokens.indexOf(userToken));
  }
}
