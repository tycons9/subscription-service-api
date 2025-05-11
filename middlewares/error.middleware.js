const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };

    console.error(err);

    // Mongoose CastError (invalid ObjectId format)
    if (err.name === 'CastError') {
      error.statusCode = 404;
      error.message = 'Resource not found';
    }

    // Mongoose duplicate key error
    if (err.code === 11000) {
      error.statusCode = 400;
      error.message = 'Duplicate field value entered';
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
      error.statusCode = 400;
      error.message = Object.values(err.errors).map(val => val.message).join(', ');
    }

    // Default to a server error
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || 'Server Error'
    });
  } catch (error) {
    // In case an error occurs in error handling itself
    next(error);
  }
};

export default errorMiddleware;
