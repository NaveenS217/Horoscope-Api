const pool = require('../models/db');
const moment = require('moment');

const mockHoroscopes = {
  Aries: "You will achieve your goals today.",
  Taurus: "A calm day lies ahead.",
  Gemini: "You might discover something new.",
  Cancer: "Spend time with loved ones.",
  Leo: "A great opportunity will arise.",
  Virgo: "Focus on the details.",
  Libra: "Balance is key today.",
  Scorpio: "Trust your instincts.",
  Sagittarius: "Adventure is on the horizon.",
  Capricorn: "Hard work pays off.",
  Aquarius: "Be open to new ideas.",
  Pisces: "Creativity will lead the way."
};

exports.getTodayHoroscope = async (req, res) => {
  try {
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [req.userId]);
    const zodiac = user.rows[0].zodiac_sign;
    const today = moment().format('YYYY-MM-DD');
    const content = mockHoroscopes[zodiac] || "You’ll have an interesting day.";

    await pool.query(
      'INSERT INTO horoscope_history (user_id, date, content) VALUES ($1, $2, $3)',
      [req.userId, today, content]
    );

    res.json({ date: today, zodiac, content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT date, content FROM horoscope_history WHERE user_id = $1 ORDER BY date DESC LIMIT 7',
      [req.userId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
