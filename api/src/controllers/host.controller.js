const Host = require("../models/host.model.js");
const Review = require("../models/review.model");

// GET ALL HOSTS
exports.getAllHosts = async (req, res) => {
  try {
    const hosts = await Host.find()
      .populate("places")
      .populate("reviews")
      .populate("likes");
    res.status(200).json(hosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET HOST BY ID
exports.getHostById = async (req, res) => {
  try {
    const host = await Host.findById(req.params.id)
      .populate("places")
      .populate("reviews")
      .populate("likes");

    if (!host) {
      return res.status(404).json({ message: "Host not found" });
    }

    res.status(200).json(host);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE HOST
exports.createHost = async (req, res) => {
  try {
    const host = new Host(req.body);
    await host.save();
    res.status(201).json(host);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE HOST
exports.updateHost = async (req, res) => {
  try {
    const host = await Host.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!host) {
      return res.status(404).json({ message: "Host not found" });
    }

    res.status(200).json(host);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE HOST
exports.deleteHost = async (req, res) => {
  try {
    const host = await Host.findByIdAndDelete(req.params.id);

    if (!host) {
      return res.status(404).json({ message: "Host not found" });
    }

    res.status(200).json({ message: "Host deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to verify host identity
exports.verifyHostIdentity = async (req, res) => {
  try {
    const host = await Host.findById(req.params.id);

    if (!host) {
      return res.status(404).json({ message: "Host not found" });
    }

    if (host.identityVerified) {
      return res.status(400).json({ message: "Host already verified" });
    }

    await host.verifyIdentity();
    res.status(200).json({ message: "Host identity verified successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to add a review to a host
exports.addReviewToHost = async (req, res) => {
  try {
    const host = await Host.findById(req.params.hostId);

    if (!host) {
      return res.status(404).json({ message: "Host not found" });
    }

    const review = await Review.findById(req.body.reviewId);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    if (host.reviews.includes(review._id)) {
      return res.status(400).json({ message: "Review already added" });
    }

    host.reviews.push(review._id);
    await host.save();
    res.status(200).json({ message: "Review added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to add a like to a host
exports.addLikeToHost = async (req, res) => {
  try {
    const host = await Host.findById(req.params.hostId);

    if (!host) {
      return res.status(404).json({ message: "Host not found" });
    }

    const review = await Review.findById(req.body.reviewId);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    if (host.likes.includes(review._id)) {
      return res.status(400).json({ message: "Like already added" });
    }

    host.likes.push(review._id);
    await host.save();
    res.status(200).json({ message: "Like added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
