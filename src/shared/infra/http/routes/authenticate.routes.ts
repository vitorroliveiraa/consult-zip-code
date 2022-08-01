import { Router } from 'express';

import { AuthenticateUsersController } from '../../../../modules/accounts/useCases/authenticateUser/AuthenticateUsersController';
import { RefreshTokenController } from '../../../../modules/accounts/useCases/refreshToken/RefreshTokenController';

const authenticateRoutes = Router();

const authenticateUsersController = new AuthenticateUsersController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post('/sessions', authenticateUsersController.handle);
authenticateRoutes.post('/refresh-token', refreshTokenController.handle);

export { authenticateRoutes };
