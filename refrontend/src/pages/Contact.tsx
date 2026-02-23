import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5282'}/api/contact/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-[#2F3E2E] text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-sm opacity-80">Home &gt; Contact Us</p>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3E2E] mb-4 sm:mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-bold text-[#2F3E2E] mb-2 text-sm sm:text-base">India Office</h3>
                  <p className="text-gray-700 text-sm sm:text-base">Plot No. 56, Navrangpura Business Tower,<br />Near Ahmedabad One Mall, Navrangpura,<br />Ahmedabad – 380009, Gujarat, India</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#2F3E2E] mb-2 text-sm sm:text-base">US Office</h3>
                  <p className="text-gray-700 text-sm sm:text-base">Suite 510, 350 Fifth Avenue,<br />New York, NY 10118,<br />United States</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#2F3E2E] mb-2 text-sm sm:text-base">Phone</h3>
                  <p className="text-gray-700 text-sm sm:text-base">India: +91 96643 61260</p>
                  <p className="text-gray-700 text-sm sm:text-base">USA: +1 (212) 209-5095</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#2F3E2E] mb-2 text-sm sm:text-base">Email</h3>
                  <p className="text-gray-700 text-sm sm:text-base">service@upliftplacements.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFEAD1] to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2F3E2E] mb-4 sm:mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#FD6F2F] focus:outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#FD6F2F] focus:outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#FD6F2F] focus:outline-none" placeholder="+1 (234) 567-890" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Subject *</label>
                  <select required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#FD6F2F] focus:outline-none">
                    <option value="">Select a subject</option>
                    <option value="job-inquiry">Job Inquiry</option>
                    <option value="training">Training Programs</option>
                    <option value="career-guidance">Career Guidance</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Message *</label>
                  <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#FD6F2F] focus:outline-none resize-none" placeholder="Tell us how we can help you..." />
                </div>
                {status === 'success' && <p className="text-green-600 text-sm">Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-600 text-sm">Failed to send. Please try again.</p>}
                <button type="submit" disabled={status === 'sending'} className="w-full bg-[#FD6F2F] text-white py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-opacity-90 transition font-semibold disabled:opacity-50">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
