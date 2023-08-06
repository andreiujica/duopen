const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('DuoPen Backend API');
});

module.exports = router;
