import express from 'express';

import { fileUploadController } from 'controllers';
import { checkToken } from 'utils';

const fileUploadRouter = express.Router();

// fileUploadRouter.get('/' ,(req,res) => res.send('fileUploadRouter is working'));

//User Sign Up
fileUploadRouter.post(
    '/',
    fileUploadController.fileLoadValidator(),
    fileUploadController.fileLoad
);

export default fileUploadRouter;