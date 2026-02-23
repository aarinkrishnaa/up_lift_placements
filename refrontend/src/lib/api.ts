import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const contactAPI = {
  submitContact: (data: any) => api.post('/contact', data),
}

export const referralAPI = {
  submitReferral: (data: any) => api.post('/referral', data),
}

export default api
