import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUsersUseCase } from './CreateUsersUseCase';

export class CreateUsersController {
  async handle(req: Request, res: Response) {
    const { name, password, email } = req.body;

    const createUsersUseCase = container.resolve(CreateUsersUseCase);

    createUsersUseCase.execute({ name, password, email });

    return res.status(201).send();
  }
}
