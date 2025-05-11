import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription } from '../controllers/subscription.controller.js';

const SubscriptionRoutes = Router();


SubscriptionRoutes.get('/', (req, res) => res.send({ title: 'Get all subscriptions ' }));

SubscriptionRoutes.get('/:id', (req, res) => res.send({ title: 'Get all subscriptions details' }));

SubscriptionRoutes.post('/', authorize,createSubscription);

SubscriptionRoutes.put('/:id', (req, res) => res.send({ title: 'Update subscriptions ' }));

SubscriptionRoutes.delete('/:id', (req, res) => res.send({ title: 'Delete subscriptions ' }));

SubscriptionRoutes.get('/user/:id', (req, res) => res.send({ title: 'Get all users subscriptions ' }));

SubscriptionRoutes.put('/:id/cancel', (req, res) => res.send({ title: 'Cancel subscriptions ' }));

SubscriptionRoutes.get('/upcoming-renewals', (req, res) => res.send({ title: 'Get  upcoming-renewals ' }));




export default SubscriptionRoutes;