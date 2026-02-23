import { useState } from 'react'

const Training = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: '', experience: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      // Send email directly without database
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5282'}/api/contact/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.name} - Training Enrollment`,
          email: formData.email,
          phone: formData.phone,
          subject: `Training: ${formData.program}`,
          message: `Program: ${formData.program}\nExperience: ${formData.experience}\n\n${formData.message}`
        })
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', program: '', experience: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#2F3E2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Training</h1>
          <p className="mt-2 text-sm opacity-80">Home &gt; Training</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img 
                src="/images/training.jpg" 
                alt="Training" 
                className="w-full max-w-md rounded-lg shadow-lg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop' }}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#2F3E2E] mb-6">Professional IT Training Programs</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                UP LIFT PLACEMENTS offers comprehensive training programs designed to enhance your technical skills and prepare you for success in the competitive IT industry.
              </p>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Industry-relevant curriculum designed by experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Hands-on practical training and projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Flexible learning schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Certification preparation and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Job placement assistance after completion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-16 bg-gradient-to-br from-[#FFEAD1] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#2F3E2E] mb-8 text-center">Our Training Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-3">Software Development</h4>
              <p className="text-gray-700 mb-4">Master modern programming languages and frameworks</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Java, Python, JavaScript</li>
                <li>• React, Angular, Node.js</li>
                <li>• Full-stack development</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-3">Cloud Computing</h4>
              <p className="text-gray-700 mb-4">Learn cloud platforms and services</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AWS, Azure, Google Cloud</li>
                <li>• Cloud architecture</li>
                <li>• DevOps practices</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-3">Data Science & AI</h4>
              <p className="text-gray-700 mb-4">Dive into data analytics and machine learning</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Python for Data Science</li>
                <li>• Machine Learning</li>
                <li>• Big Data technologies</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-3">Cybersecurity</h4>
              <p className="text-gray-700 mb-4">Protect systems and networks from threats</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Network security</li>
                <li>• Ethical hacking</li>
                <li>• Security certifications</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-3">Database Management</h4>
              <p className="text-gray-700 mb-4">Master database design and administration</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SQL and NoSQL databases</li>
                <li>• Database optimization</li>
                <li>• Data modeling</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-3">Mobile Development</h4>
              <p className="text-gray-700 mb-4">Build native and cross-platform mobile apps</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• iOS and Android development</li>
                <li>• React Native, Flutter</li>
                <li>• Mobile UI/UX</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#2F3E2E] mb-8 text-center">Why Train With Us?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#FFEAD1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#FD6F2F]">1</span>
              </div>
              <h4 className="font-bold text-[#2F3E2E] mb-2">Expert Instructors</h4>
              <p className="text-sm text-gray-600">Learn from industry professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FFEAD1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#FD6F2F]">2</span>
              </div>
              <h4 className="font-bold text-[#2F3E2E] mb-2">Practical Projects</h4>
              <p className="text-sm text-gray-600">Build real-world projects to strengthen your portfolio</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FFEAD1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#FD6F2F]">3</span>
              </div>
              <h4 className="font-bold text-[#2F3E2E] mb-2">Flexible Schedule</h4>
              <p className="text-sm text-gray-600">Choose from weekday, weekend, or online classes</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FFEAD1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#FD6F2F]">4</span>
              </div>
              <h4 className="font-bold text-[#2F3E2E] mb-2">Job Assistance</h4>
              <p className="text-sm text-gray-600">Get placement support after course completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section className="py-16 bg-[#2F3E2E] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Enroll in a Training Program</h2>
          <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-6 sm:p-8 rounded-xl space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Select Program *</label>
              <select required value={formData.program} onChange={(e) => setFormData({...formData, program: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none">
                <option value="">Choose a program</option>
                <option value="Software Development">Software Development</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Data Science & AI">Data Science & AI</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Database Management">Database Management</option>
                <option value="Mobile Development">Mobile Development</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Experience Level *</label>
              <select required value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none">
                <option value="">Select your level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Additional Information</label>
              <textarea rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none resize-none" placeholder="Tell us about your goals and expectations..."></textarea>
            </div>
            {status === 'success' && <p className="text-green-600 text-center">Enrollment submitted successfully!</p>}
            {status === 'error' && <p className="text-red-600 text-center">Failed to submit. Please try again.</p>}
            <button type="submit" disabled={status === 'sending'} className="w-full bg-[#FD6F2F] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50">
              {status === 'sending' ? 'Submitting...' : 'Enroll Now'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Training
