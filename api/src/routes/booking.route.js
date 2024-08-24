const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");

// Check availability
router.get(
  "/places/:placeId/availability",
  bookingController.checkAvailability
);

// Create booking
router.post(
  "/bookings",
  authMiddleware.authenticate,
  bookingController.createBooking
);

module.exports = router;
