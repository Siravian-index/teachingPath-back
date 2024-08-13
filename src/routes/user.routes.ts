import { Router } from 'express';
import { loginUserHandler, registerUserHandler } from '../controller/user.controller';

const router = Router()


router.post("/api/v1/register", registerUserHandler)

router.post("/api/v1/login", loginUserHandler)



export default router