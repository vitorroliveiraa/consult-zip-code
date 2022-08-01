import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { usersRoutes } from './users.routes';
import { viaCepRoutes } from './via-cep.routes';

const router = Router();

router.use('/viacep', viaCepRoutes);
router.use(authenticateRoutes);
router.use('/users', usersRoutes);

export { router };
