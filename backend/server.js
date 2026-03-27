require('dotenv').config()
const express = require('express')
const cors = require('cors')
const contactRoutes = require('./src/routes/contact')
const jobRoutes = require('./src/routes/jobs')
const { initDb } = require('./src/db')

const app = express()

app.use(cors({
  origin: (origin, callback) => {
    const allowed = [
      /^http:\/\/localhost/,
      /\.netlify\.app$/,
      /\.vercel\.app$/,
      /\.netlify\.live$/
    ]
    if (!origin || allowed.some(r => r.test(origin))) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}))

app.use(express.json())

app.get('/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api/contact', contactRoutes)
app.use('/api/jobs', jobRoutes)

const PORT = process.env.PORT || 5000

initDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}).catch(err => {
  console.error('Failed to initialize DB:', err.message)
  process.exit(1)
})
