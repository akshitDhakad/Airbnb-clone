const express = require("express");
const hostController = require("../controllers/hostController");
const router = express.Router();

// Create a new host
router.post("/", hostController.createHost);

// Get all hosts
router.get("/", hostController.getAllHosts);

// Get a host by ID
router.get("/:id", hostController.getHostById);

// Update a host
router.put("/:id", hostController.updateHost);

// Delete a host
router.delete("/:id", hostController.deleteHost);

module.exports = router;
