import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUsersUseCase } from './AuthenticateUsersUseCase';

export class AuthenticateUsersController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authenticateUsersUseCase = container.resolve(
      AuthenticateUsersUseCase
    );

    const token = await authenticateUsersUseCase.execute({ email, password });

    return res.send(token);
  }
}
