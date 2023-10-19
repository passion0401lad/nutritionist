// import express from 'express';

// import { authController } from 'controllers';

// const authRouter = express.Router();

// // User Sign Up
// authRouter.post(
//   '/sign-up',
//   authController.signUpValidator(),
//   authController.signUp
// );

// // User Sign Up Code Resend
// authRouter.post(
//   '/sign-up/code',
//   authController.resendSignUpCodeValidator(),
//   authController.resendSignUpCode
// );

// // User Sign Up Code Verify
// authRouter.post(
//   '/sign-up/verify-code',
//   authController.verifySignUpCodeValidator(),
//   authController.verifySignUpCode
// );

// // User Sign In
// authRouter.post(
//   '/sign-in',
//   authController.signInValidator(),
//   authController.signIn
// );

// // User MFA Code Resend
// authRouter.post(
//   '/sign-in/code',
//   authController.resendMFACodeValidator(),
//   authController.resendMFACode
// );

// // User MFA Code Verify
// authRouter.post(
//   '/sign-in/verify-code',
//   authController.verifyMFACodeValidator(),
//   authController.verifyMFACode
// );

// // Check Google Authenticator Code
// authRouter.post(
//   '/sign-in/verify-gacode',
//   authController.checkValidGATokenValidator(),
//   authController.checkValidGACode
// );

// // SSO Login
// authRouter.post(
//   '/sso/login',
//   authController.ssoLoginValidator(),
//   authController.ssoLogin
// );

// export default authRouter;
