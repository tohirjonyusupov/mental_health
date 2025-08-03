const pool = require("../../config/db");

exports.getOverview = async (req, res) => {
  const userId = req.user.id;

  try {
    const journal = await pool.query(
      `SELECT COUNT(*) FROM journal_logs 
       WHERE user_id = $1 AND created_at >= NOW() - INTERVAL '7 days'`,
      [userId]
    );

    const mood = await pool.query(
      `SELECT COUNT(*) FROM mood_entries 
       WHERE user_id = $1 AND created_at >= NOW() - INTERVAL '7 days'`,
      [userId]
    );

    const chat = await pool.query(
      `SELECT COUNT(*) FROM chat_logs 
       WHERE user_id = $1 AND created_at >= NOW() - INTERVAL '7 days'`,
      [userId]
    );

    res.json({
      journalLogs: parseInt(journal.rows[0].count),
      moodEntries: parseInt(mood.rows[0].count),
      chatMessages: parseInt(chat.rows[0].count),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
