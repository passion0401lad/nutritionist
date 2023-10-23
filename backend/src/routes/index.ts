import express from 'express';

import authRouter from './auth.router';
import fileUploadRouter from './fileUpload.router';

const appRoutes = express.Router();

appRoutes.use('/auth', authRouter);

appRoutes.use('/upload', fileUploadRouter);

export default appRoutes;
