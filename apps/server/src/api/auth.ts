import express, { Request, Response } from 'express';
import { SignUpRequestDTO } from '../usecases/signUp/SignUpRequsetDTO';
import { SignUpUseCase } from '../usecases/signUp/SignUpUseCase';
import { SignInRequestDTO } from '../usecases/signIn/SignInRequsetDTO';
import { SignInUseCase } from '../usecases/signIn/SignInUseCase';
import { ChangePasswordRequestDTO } from '../usecases/changePassword/ChangePasswordRequsetDTO';
import { ChangePasswordUseCase } from '../usecases/changePassword/ChangePasswordUseCase';
const router = express.Router();

router.post('/auth/register', async (req: Request, res: Response) => {
  const signUpRequestDTO = new SignUpRequestDTO(req);
  const signUpUseCase = new SignUpUseCase();

  signUpUseCase.execute(signUpRequestDTO, (error: any, result: any) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

router.post('/auth/login', async (req: Request, res: Response) => {
  const signInRequestDTO = new SignInRequestDTO(req);
  const signUpUseCase = new SignInUseCase();

  signUpUseCase.execute(signInRequestDTO, {
    onSuccess: function (result: any) {
      res.status(200).send(result);
    },
    onFailure: function(err: any) {
      res.status(500).send(err);
    }
  });
});

router.post('/auth/restore-password', async (req: Request, res: Response) => {
  const changePasswordRequestDTO = new ChangePasswordRequestDTO(req);
  const changePasswordUseCase = new ChangePasswordUseCase();

  changePasswordUseCase.execute(changePasswordRequestDTO, (error: any, result: any) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

export { router as auth };
