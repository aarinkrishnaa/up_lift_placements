const { pool } = require('../db')

async function getJobs(req, res) {
  try {
    const result = await pool.query(
      'SELECT * FROM jobs WHERE is_active = true ORDER BY created_at DESC'
    )
    res.json(result.rows)
  } catch (err) {
    console.error('Get jobs error:', err.message)
    res.status(500).json({ error: 'Failed to fetch jobs' })
  }
}

module.exports = { getJobs }
