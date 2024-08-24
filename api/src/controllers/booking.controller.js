const mongoose = require("mongoose");
const Booking = require("../models/Booking");
const Place = require("../models/Place");

// Check availability function
async function checkAvailability(req, res) {
  const { placeId } = req.params;
  const { checkInDate, checkOutDate } = req.query;

  try {
    const isAvailable = await isPlaceAvailable(
      placeId,
      new Date(checkInDate),
      new Date(checkOutDate)
    );
    res.status(200).json({ isAvailable });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create booking function
async function createBooking(req, res) {
  const { userId, placeId, checkInDate, checkOutDate } = req.body;

  try {
    const booking = await bookPlace(
      userId,
      placeId,
      new Date(checkInDate),
      new Date(checkOutDate)
    );
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get bookings for a place
async function getBookingsForPlace(req, res) {
  const { placeId } = req.params;

  try {
    const bookings = await Booking.aggregate([
      { $match: { place: mongoose.Types.ObjectId(placeId) } },
      {
        $lookup: {
          from: "places", // The name of the collection for places
          localField: "place",
          foreignField: "_id",
          as: "placeDetails",
        },
      },
      { $unwind: "$placeDetails" },
      {
        $project: {
          _id: 1,
          user: 1,
          checkInDate: 1,
          checkOutDate: 1,
          totalCost: 1,
          placeDetails: { name: 1, location: 1 }, // Adjust fields as needed
        },
      },
    ]);

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Calculate total revenue for a place
async function calculateTotalRevenue(req, res) {
  const { placeId } = req.params;

  try {
    const revenue = await Booking.aggregate([
      { $match: { place: mongoose.Types.ObjectId(placeId) } },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalCost" },
        },
      },
    ]);

    res.status(200).json(revenue[0] ? revenue[0].totalRevenue : 0);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get booking statistics (e.g., number of bookings per month)
async function getBookingStatistics(req, res) {
  try {
    const stats = await Booking.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$checkInDate" } },
          totalBookings: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } }, // Sort by month
    ]);

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Helper function to check availability
async function isPlaceAvailable(placeId, checkInDate, checkOutDate) {
  const conflictingBookings = await Booking.find({
    place: placeId,
    $or: [
      {
        checkInDate: { $lt: checkOutDate },
        checkOutDate: { $gt: checkInDate },
      },
    ],
  });

  return conflictingBookings.length === 0; // If no conflicting bookings, the place is available
}

// Helper function to create a booking
async function bookPlace(userId, placeId, checkInDate, checkOutDate) {
  const isAvailable = await isPlaceAvailable(
    placeId,
    checkInDate,
    checkOutDate
  );

  if (!isAvailable) {
    throw new Error("The place is not available for the selected dates.");
  }

  const place = await Place.findById(placeId);
  const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
  const totalCost = place.pricePerNight * nights;

  const booking = new Booking({
    user: userId,
    place: placeId,
    checkInDate,
    checkOutDate,
    totalCost,
  });

  await booking.save();

  return booking;
}

module.exports = {
  checkAvailability,
  createBooking,
  getBookingsForPlace,
  calculateTotalRevenue,
  getBookingStatistics,
};
