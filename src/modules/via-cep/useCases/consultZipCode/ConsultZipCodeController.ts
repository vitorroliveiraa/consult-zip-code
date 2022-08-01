import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ConsultZipCodeUseCase } from './ConsultZipCodeUseCase';

export class ConsultZipCodeController {
  async handle(req: Request, res: Response) {
    const { cep } = req.body;

    const consultZipCodeUseCase = container.resolve(ConsultZipCodeUseCase);

    const result = await consultZipCodeUseCase.execute(cep);

    return res.status(200).json(result);
  }
}
