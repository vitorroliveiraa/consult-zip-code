import { ICreateUserTokenDTO } from '../dtos/ICreateUserTokenDTO';
import { UsersTokens } from '../model/UsersTokens';

interface IUsersTokensRepository {
  create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UsersTokens>;

  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UsersTokens>;

  deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepository };
