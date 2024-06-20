const express = require('express');
const router = express.Router();

// Define route handlers
router.get('/', (req, res) => {
  res.send('GET /api/notes');
});

router.post('/', (req, res) => {
  res.send('POST /api/notes');
});

// Export the router
module.exports = router;
