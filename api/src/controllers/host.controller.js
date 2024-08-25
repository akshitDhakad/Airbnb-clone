const Host = require("../models/host.model");

// Create a new host
exports.createHost = async (req, res) => {
  try {
    const {
      profile,
      name,
      dob,
      identityVerified,
      email,
      phone,
      reviews,
      rating,
      birthYear,
      school,
      work,
      guestPolicy,
      uniqueHomeFeature,
      hobbies,
      favoriteSong,
      languages,
      biographyTitle,
      obsessions,
      location,
      breakfastPreferences,
      welcomeMessage,
    } = req.body;

    const host = new Host({
      profile,
      name,
      dob,
      identityVerified,
      email,
      phone,
      reviews,
      rating,
      birthYear,
      school,
      work,
      guestPolicy,
      uniqueHomeFeature,
      hobbies,
      favoriteSong,
      languages,
      biographyTitle,
      obsessions,
      location,
      breakfastPreferences,
      welcomeMessage,
    });

    await host.save();
    res.status(201).json(host);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all hosts
exports.getAllHosts = async (req, res) => {
  try {
    const hosts = await Host.find().populate("places").populate("reviews");
    res.status(200).json(hosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a host by ID
exports.getHostById = async (req, res) => {
  try {
    const host = await Host.findById(req.params.id)
      .populate("places")
      .populate("reviews");
    if (!host) {
      return res.status(404).json({ message: "Host not found" });
    }
    res.status(200).json(host);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a host
exports.updateHost = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      profile,
      name,
      dob,
      identityVerified,
      email,
      phone,
      reviews,
      rating,
      birthYear,
      school,
      work,
      guestPolicy,
      uniqueHomeFeature,
      hobbies,
      favoriteSong,
      languages,
      biographyTitle,
      obsessions,
      location,
      breakfastPreferences,
      welcomeMessage,
    } = req.body;

    const host = await Host.findById(id);
    if (!host) {
      return res.status(404).json({ message: "Host not found" });
    }

    host.profile = profile || host.profile;
    host.name = name || host.name;
    host.dob = dob || host.dob;
    host.identityVerified = identityVerified || host.identityVerified;
    host.email = email || host.email;
    host.phone = phone || host.phone;
    host.reviews = reviews || host.reviews;
    host.rating = rating || host.rating;
    host.birthYear = birthYear || host.birthYear;
    host.school = school || host.school;
    host.work = work || host.work;
    host.guestPolicy = guestPolicy || host.guestPolicy;
    host.uniqueHomeFeature = uniqueHomeFeature || host.uniqueHomeFeature;
    host.hobbies = hobbies || host.hobbies;
    host.favoriteSong = favoriteSong || host.favoriteSong;
    host.languages = languages || host.languages;
    host.biographyTitle = biographyTitle || host.biographyTitle;
    host.obsessions = obsessions || host.obsessions;
    host.location = location || host.location;
    host.breakfastPreferences =
      breakfastPreferences || host.breakfastPreferences;
    host.welcomeMessage = welcomeMessage || host.welcomeMessage;

    await host.save();
    res.status(200).json(host);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a host
exports.deleteHost = async (req, res) => {
  try {
    const { id } = req.params;
    const host = await Host.findById(id);
    if (!host) {
      return res.status(404).json({ message: "Host not found" });
    }

    await host.remove();
    res.status(200).json({ message: "Host deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
