import { Router } from 'express';

const userRoutes = Router();

// Get all users
userRoutes.get('/', (req, res) => res.send({ title: 'Get all users' }));

// Get user details by ID
userRoutes.get('/:id', (req, res) => res.send({ title: 'Get user details', id: req.params.id }));

// Create a new user
userRoutes.post('/', (req, res) => res.send({ title: 'Create new user' }));

// Update user
userRoutes.put('/:id', (req, res) => res.send({ title: 'Update user' }));

// Delete user
userRoutes.delete('/:id', (req, res) => res.send({ title: 'Delete user' }));

export default userRoutes;
