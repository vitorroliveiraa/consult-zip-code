import { container } from 'tsyringe';

import './providers';

import { UsersRepositoryInMemory } from '../../modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { UsersTokensRepositoryInMemory } from '../../modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '../../modules/accounts/repositories/IUsersTokensRepository';
import { RedisRepositoryInMemory } from '../../modules/via-cep/repositories/in-memory/RedisRepositoryInMemory';
import { IRedisRepositoryInMemory } from '../../modules/via-cep/repositories/IRedisRepositoryInMemory';

container.registerSingleton<IUsersRepository>(
  'UsersRepositoryInMemory',
  UsersRepositoryInMemory
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepositoryInMemory',
  UsersTokensRepositoryInMemory
);

container.registerSingleton<IRedisRepositoryInMemory>(
  'RedisRepositoryInMemory',
  RedisRepositoryInMemory
);
