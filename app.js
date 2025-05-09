import express from 'express';
import {PORT} from './config/env.js'
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import SubscriptionRoutes from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
const app = express();

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/subscription',SubscriptionRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Subscription Tracker API");
});

app.listen(PORT, async() => {
    console.log(`Subscription Tracker is running on http://localhost:${PORT}`);
    await connectToDatabase();
});

export default app;
