
# Subscription Tracker API

This is the backend API for the **Subscription Tracker** application. The API allows users to manage and track their subscriptions with functionality to check, subscribe, and unsubscribe from services.

## Features

- **Check Subscriptions**: View active subscriptions.
- **Add Subscription**: Subscribe to a new service.
- **Cancel Subscription**: Unsubscribe from a service.
- **User Authentication**: Secure login and registration.
- **Subscription Management**: Ability to view, update, and delete subscriptions.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database to store user and subscription data.
- **JWT**: JSON Web Token for authentication.

## Installation

To get started with this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/subscription-Tracker.git
````

2. Navigate to the project folder:

   ```bash
   cd subscription-Tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables. Copy `.env.example` to `.env` and fill in your details:

   ```bash
   cp .env.example .env
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. The API will be running on `http://localhost:5000` by default.

## API Endpoints

### 1. `POST /api/auth/register`

Register a new user.

**Request Body**:

```json
{
  "username": "user123",
  "password": "yourpassword"
}
```

### 2. `POST /api/auth/login`

Login a user.

**Request Body**:

```json
{
  "username": "user123",
  "password": "yourpassword"
}
```

### 3. `GET /api/subscriptions`

Get all active subscriptions for the logged-in user.

### 4. `POST /api/subscriptions`

Add a new subscription.

**Request Body**:

```json
{
  "serviceName": "Netflix",
  "price": "15.99",
  "nextPaymentDate": "2025-06-01"
}
```

### 5. `DELETE /api/subscriptions/:id`

Cancel a subscription by its ID.

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request. Before you start, please check the [issues](https://github.com/your-username/subscription-Tracker/issues) to see if anyone else is already working on something.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

---

### Key Sections:

1. **Project Overview**: Explains what the API does.
2. **Features**: Lists key features of the backend.
3. **Technologies**: Describes the technologies used.
4. **Installation**: Step-by-step guide to setting up the project.
5. **API Endpoints**: Includes sample endpoints and requests.
6. **Contributing**: Basic guide on how others can contribute.
7. **License**: You can add the MIT license or another license based on your choice.

