import User from "../models/user.model.js";

// Get all users (Admin view, or for sidebar, etc.)
export const getUsers = async (req, res, next) => {
  try {
    const loggedInUserId = req.user?.id; // Ensure this is set via auth middleware

    if (!loggedInUserId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    const users = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("Error in getUsers:", error.message);
    next(error);
  }
};

// Get a specific user by ID
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error in getUserById:", error.message);
    next(error);
  }
};
