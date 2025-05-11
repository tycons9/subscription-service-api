import express from 'express';
import cookieParser  from 'cookie-parser';
import {PORT} from './config/env.js'
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import SubscriptionRoutes from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import dotenv from 'dotenv';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/subscriptions',SubscriptionRoutes);

app.use(errorMiddleware);
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(arcjetMiddleware);
app.get('/', (req, res) => {
    res.send("Welcome to Subscription Tracker API");
});

app.listen(PORT, async() => {
    console.log(`Subscription Tracker is running on http://localhost:${PORT}`);
    await connectToDatabase();
});

export default app;
