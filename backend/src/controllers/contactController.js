const { pool } = require('../db')
const { sendContactEmail, sendReferralEmail } = require('../emailService')

async function submitContact(req, res) {
  const { name, email, phone, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' })
  }

  try {
    await pool.query(
      'INSERT INTO contacts (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5)',
      [name, email, phone, subject, message]
    )
    await sendContactEmail({ name, email, phone, subject, message })
    res.json({ success: true, message: 'Message sent successfully' })
  } catch (err) {
    console.error('Contact submit error:', err.message)
    res.status(500).json({ error: 'Failed to send message' })
  }
}

async function submitReferral(req, res) {
  const { referrerName, referrerEmail, referrerPhone, refereeName, refereeEmail, refereePhone } = req.body

  if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
    return res.status(400).json({ error: 'Referrer and candidate name/email are required' })
  }

  try {
    await pool.query(
      'INSERT INTO referrals (referrer_name, referrer_email, referrer_phone, referee_name, referee_email, referee_phone) VALUES ($1, $2, $3, $4, $5, $6)',
      [referrerName, referrerEmail, referrerPhone, refereeName, refereeEmail, refereePhone]
    )
    await sendReferralEmail({ referrerName, referrerEmail, referrerPhone, refereeName, refereeEmail, refereePhone })
    res.json({ success: true, message: 'Referral submitted successfully' })
  } catch (err) {
    console.error('Referral submit error:', err.message)
    res.status(500).json({ error: 'Failed to submit referral' })
  }
}

module.exports = { submitContact, submitReferral }
