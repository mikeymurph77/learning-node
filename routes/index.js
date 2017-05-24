const express = require('express');
const router = express.Router();

router.get('/', storeController.homepage);

module.exports = router;
