const Host = require("../models/Host");


const verifyHostIdentity = async (req, res) => {
  try {
    const hostId = req.params.id; // Assuming you're passing the host ID in the URL
    const host = await Host.findById(hostId);

    if (!host) {
      return res.status(404).json({ error: "Host not found" });
    }

    host.identityVerified = true;
    await host.save();

    res
      .status(200)
      .json({ message: "Host identity verified successfully", host });
  } catch (error) {
    res.status(500).json({ error: "Error verifying host identity" });
  }
};

module.exports = {
  verifyHostIdentity,
};