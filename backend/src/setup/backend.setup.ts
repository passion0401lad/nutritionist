import { json as bodyParserJSON } from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import express, { Express } from 'express';
import fileUpload from 'express-fileupload';
import requestIp from 'request-ip';

import { ROUTE_VERSION } from 'config';

import { MESSAGES } from 'consts';

import { errorHandlerMiddleware, requestLoggerMiddleware } from 'middlewares';

import appRoutes from 'routes';

import path from 'path';

const port = process.env.PORT || 3001;

const backendSetup = (app: Express) => {
  app.use(express.json());
  app.use(cors());
  app.use(bodyParserJSON());

  app.use(requestLoggerMiddleware);

  app.use(requestIp.mw());
  // For Swagger

  // Health check
  app.use('/health', function (req, res) {
    res.send('OK');
  });

  app.use(fileUpload({
    createParentPath: true,
    abortOnLimit: true,
    // limits: {fileSize: 1000*1024*1024},
    useTempFiles: true, 
    tempFileDir: '/tmp/',
    safeFileNames: true,
    preserveExtension: true
  }));

  // app.post('/upload', (req, res, next) => {
  //   let uploadFile:any = req.files.file;
  //   const name = uploadFile.name;
  //   const md5 = uploadFile.md5;
  //   const saveAs = `${md5}_${name}`;
  //   console.log(saveAs)
  //   // uploadFile.mv(`${__dirname}/public/files/${saveAs}`, function(err) {
  //   uploadFile.mv(`${path.join(__dirname, '../../../','public/upload/img/')}${saveAs}`, function(err) {
  //     if (err) {
  //       return res.status(500).send(err);
  //     }
  //     return res.status(200).json({ status: 'uploaded', name, saveAs });
  //   });
  // });

  app.use(`/api/${ROUTE_VERSION}`, appRoutes);
  app.use(errorHandlerMiddleware);

  // app.use(
  //   fileUpload({
  //     useTempFiles: true,
  //     safeFileNames: true,
  //     preserveExtension: true,
  //     // tempFileDir: `${__dirname}/public/files/temp`
  //     tempFileDir: path.join(__dirname, '../../../','public/upload/img')
  //   })
  // );

  app.listen(port, () => {
    console.info(`${MESSAGES.SERVER_RUN_SUCCESS} on PORT:${port}`);
  });
};

export default backendSetup;
