import { Router } from 'express';
import {signUp,logIn,logOut} from '../controllers/auth.controller.js'

const authRoutes = Router();

authRoutes.post('/sign-up', signUp);
authRoutes.post('/log-in', logIn);
authRoutes.post('/log-out', logOut);

export default authRoutes;
