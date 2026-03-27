const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
})

async function sendContactEmail({ name, email, phone, subject, message }) {
  await transporter.sendMail({
    from: `"UP LIFT Placements" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `New Contact Form: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  })
}

async function sendReferralEmail({ referrerName, referrerEmail, referrerPhone, refereeName, refereeEmail, refereePhone }) {
  await transporter.sendMail({
    from: `"UP LIFT Placements" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: referrerEmail,
    subject: `New Referral from ${referrerName}`,
    html: `
      <h2>New Referral Submission</h2>
      <h3>Referrer Details</h3>
      <p><strong>Name:</strong> ${referrerName}</p>
      <p><strong>Email:</strong> ${referrerEmail}</p>
      <p><strong>Phone:</strong> ${referrerPhone || 'Not provided'}</p>
      <h3>Candidate Details</h3>
      <p><strong>Name:</strong> ${refereeName}</p>
      <p><strong>Email:</strong> ${refereeEmail}</p>
      <p><strong>Phone:</strong> ${refereePhone || 'Not provided'}</p>
    `
  })
}

module.exports = { sendContactEmail, sendReferralEmail }
