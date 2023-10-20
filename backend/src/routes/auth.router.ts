import express from 'express';

import { authController } from 'controllers';
import { checkToken } from 'utils';

const authRouter = express.Router();

// authRouter.get('/' ,(req,res) => res.send('AuthRouter is working'));

//User Sign Up
authRouter.post(
    '/signUp',
    authController.signUpValidator(),
    authController.signUp
);

authRouter.post(
    '/signIn',
    authController.signInValidator(),
    authController.signIn
);

authRouter.get(
    '/',
    checkToken,
    authController.getMe
)

authRouter.get(
    '/:email',
    checkToken,
    authController.getUser
)

authRouter.put(
    '/',
    checkToken,
    authController.updateUserValidator(),
    authController.updateUser
)

authRouter.delete(
    '/:email',
    checkToken,
    authController.deleteUser
)

export default authRouter;