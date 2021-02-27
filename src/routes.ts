import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

//ROTAS USERS
router.post("/users", userController.create);

//ROTAS SURVEYS
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

export { router };