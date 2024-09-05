const express = require("express");
const router = express.Router();
const { verifyHostIdentity } = require("../controllers/admin.controller"); // Adjust the path as necessary

// Route for verifying host identity
router.patch("/hosts/:id/verify", verifyHostIdentity);

module.exports = router;
