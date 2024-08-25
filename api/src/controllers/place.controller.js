const Place = require("../models/place.model");
const Host = require("../models/host.model.js");

// create a new place
exports.createPlace = async (req, res) => {
  try {
    const {
      placeName,
      placeAddress,
      type,
      images,
      pricePerNight,
      features,
      placeDescription,
      hostId,
    } = req.body;

    // check if the host exists
    const host = await Host.findById(hostId);
    if (!host) {
      return res.status(404).send({ message: "Host not found" });
    }
    const place = new Place({
      placeName,
      placeAddress,
      type,
      images,
      pricePerNight,
      features,
      placeDescription,
      host: hostId,
    });

    await place.save();
    host.places.push(place._id);
    await host.save();
    res.status(201).send(place);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// get all places  by Id
exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find().populate("host").populate("reviews");
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a place

exports.updatePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      placeName,
      placeAddress,
      type,
      images,
      pricePerNight,
      features,
      placeDescription,
      hostId,
    } = req.body;

    const place = await Place.findById(id);
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }
    place.placeName = placeName || place.placeName;
    place.placeAddress = placeAddress || place.placeAddress;
    place.type = type || place.type;
    place.images = images || place.images;
    place.pricePerNight = pricePerNight || place.pricePerNight;
    place.features = features || place.features;
    place.placeDescription = placeDescription || place.placeDescription;
    place.host = hostId || place.host;

    await place.save();
    res.status(200).json(place);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a place

exports.deletePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    await Host.updateOne(
      {
        _id: place.host,
      },
      { $pull: { places: place._id } }
    );
    // Remove the place from the host's places array
    await place.remove();
    res.status(200).json({ message: "Place deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
