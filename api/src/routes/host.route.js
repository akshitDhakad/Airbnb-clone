const express = require("express");
const router = express.Router();

const hostController = require("../controllers/host.controller");

// Routes for Host operations
router.get("/", hostController.getAllHosts); // GET all hosts
router.get("/:id", hostController.getHostById); // GET host by ID
router.post("/", hostController.createHost); // CREATE new host
router.put("/:id", hostController.updateHost); // UPDATE host by ID
router.delete("/:id", hostController.deleteHost); // DELETE host by ID

// Route to verify host identity
router.patch("/:id/verify", hostController.verifyHostIdentity); // PATCH request to verify host

// Routes to add review and like to a host
router.post("/:hostId/reviews", hostController.addReviewToHost); // POST request to add review
router.post("/:hostId/likes", hostController.addLikeToHost); // POST request to add like

module.exports = router;
