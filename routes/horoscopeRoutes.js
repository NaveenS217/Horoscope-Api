const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { getTodayHoroscope, getHistory } = require('../controllers/horoscopeController');

router.get('/today', auth, getTodayHoroscope);
router.get('/history', auth, getHistory);

module.exports = router;
