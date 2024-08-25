const express = require("express");
const placeController = require("../controllers/place.controller.js");

const router = express.Router();

// create a new Place
router.post("/", placeController.createPlace);

// get all Places
router.get("/", placeController.getAllPlaces);

// get a Place by ID 
router.get("/:id", placeController.getPlaceById);

// Update a place
router.put("/:id", placeController.updatePlace);

// Delete a place
router.delete("/:id", placeController.deletePlace);

module.exports = router;
