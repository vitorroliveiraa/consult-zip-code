import { Router } from 'express';

import { ConsultZipCodeController } from '../../../../modules/via-cep/useCases/consultZipCode/ConsultZipCodeController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const viaCepRoutes = Router();

const consultZipCodeController = new ConsultZipCodeController();

viaCepRoutes.post(
  '/consult',
  ensureAuthentication,
  consultZipCodeController.handle
);

export { viaCepRoutes };
