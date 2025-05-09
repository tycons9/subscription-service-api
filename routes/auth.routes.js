import { Router } from 'express';

const authRoutes = Router();

authRoutes.post('/sign-up', (req, res) => res.send({ title: 'sign-up' }));
authRoutes.post('/log-in', (req, res) => res.send({ title: 'log-in' }));
authRoutes.post('/log-out', (req, res) => res.send({ title: 'log-out' }));

export default authRoutes;
