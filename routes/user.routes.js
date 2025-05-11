import { Router } from 'express';
import {getUsers,getUserById}  from '../controllers/user.controller.js'
import authorize from '../middlewares/auth.middleware.js'
const userRoutes = Router();

// Get all users
userRoutes.get('/', getUsers);

// Get user details by ID
userRoutes.get('/:id', authorize,getUserById);

// Create a new user
userRoutes.post('/', (req, res) => res.send({ title: 'Create new user' }));

// Update user
userRoutes.put('/:id', (req, res) => res.send({ title: 'Update user' }));

// Delete user
userRoutes.delete('/:id', (req, res) => res.send({ title: 'Delete user' }));

export default userRoutes;
