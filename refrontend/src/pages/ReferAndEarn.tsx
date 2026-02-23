import { useState } from 'react'

const ReferAndEarn = () => {
  const [formData, setFormData] = useState({ referrerName: '', referrerEmail: '', referrerPhone: '', refereeName: '', refereeEmail: '', refereePhone: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5282'}/api/contact/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.referrerName,
          email: formData.referrerEmail,
          phone: formData.referrerPhone,
          subject: 'Referral Submission',
          message: `REFERRAL DETAILS:\n\nReferrer: ${formData.referrerName}\nReferrer Email: ${formData.referrerEmail}\nReferrer Phone: ${formData.referrerPhone}\n\nCandidate: ${formData.refereeName}\nCandidate Email: ${formData.refereeEmail}\nCandidate Phone: ${formData.refereePhone}`
        })
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ referrerName: '', referrerEmail: '', referrerPhone: '', refereeName: '', refereeEmail: '', refereePhone: '' })
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
          <h1 className="text-4xl font-bold">Refer and Earn</h1>
          <p className="mt-2 text-sm opacity-80">Home &gt; Refer and Earn</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E2E] mb-4">Turn Your Network Into Rewards</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Know someone looking for their next career opportunity? Refer them to UP LIFT PLACEMENTS and earn rewards when they get placed!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#2F3E2E] mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FD6F2F] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-[#2F3E2E] mb-2">Refer a Candidate</h4>
                    <p className="text-gray-700">Submit your referral through our simple online form with the candidate's details and resume.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FD6F2F] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-[#2F3E2E] mb-2">We Connect</h4>
                    <p className="text-gray-700">Our team reviews the referral and connects with the candidate to discuss opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FD6F2F] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-[#2F3E2E] mb-2">Candidate Gets Placed</h4>
                    <p className="text-gray-700">We work to find the perfect match and successfully place your referral in their ideal role.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FD6F2F] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-[#2F3E2E] mb-2">You Earn Rewards</h4>
                    <p className="text-gray-700">Receive your referral bonus once the candidate completes their probation period.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/refer-earn.jpg" 
                alt="Refer and Earn" 
                className="w-full max-w-md rounded-lg shadow-lg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-[#FFEAD1] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#2F3E2E] mb-8 text-center">Program Benefits</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">💵</div>
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-3">Attractive Rewards</h4>
              <p className="text-gray-700">Earn competitive referral bonuses for every successful placement</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-3">Help Your Network</h4>
              <p className="text-gray-700">Connect talented professionals with amazing career opportunities</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-3">No Limits</h4>
              <p className="text-gray-700">Refer as many candidates as you want - unlimited earning potential</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#2F3E2E] mb-6">Who Can Refer?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">✓</span>
                  <span>Current and former employees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">✓</span>
                  <span>Business partners and clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">✓</span>
                  <span>Industry professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">✓</span>
                  <span>Anyone with a strong professional network</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2F3E2E] mb-6">Ideal Candidates</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">✓</span>
                  <span>IT professionals seeking new opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">✓</span>
                  <span>Software developers and engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">✓</span>
                  <span>Data scientists and analysts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">✓</span>
                  <span>Project managers and business analysts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">✓</span>
                  <span>Cybersecurity and cloud specialists</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-16 bg-gradient-to-br from-[#DCE4B8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#2F3E2E] mb-6 text-center">Program Terms</h3>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FD6F2F] mr-2">•</span>
                <span>Referral bonus is paid after the candidate completes their probation period (typically 90 days)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FD6F2F] mr-2">•</span>
                <span>The referred candidate must not be currently registered in our database</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FD6F2F] mr-2">•</span>
                <span>Bonus amount varies based on the position level and placement type</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FD6F2F] mr-2">•</span>
                <span>Multiple referrals for the same candidate will credit the first referrer</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FD6F2F] mr-2">•</span>
                <span>UP LIFT PLACEMENTS reserves the right to modify program terms at any time</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-16 bg-[#2F3E2E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Submit Your Referral</h2>
          <p className="text-lg mb-8 opacity-90 text-center">Fill out the form below to refer a candidate</p>
          
          <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-6 sm:p-8 rounded-xl space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-[#2F3E2E] mb-4">Your Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Name *</label>
                    <input type="text" required value={formData.referrerName} onChange={(e) => setFormData({...formData, referrerName: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Email *</label>
                    <input type="email" required value={formData.referrerEmail} onChange={(e) => setFormData({...formData, referrerEmail: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Phone</label>
                    <input type="tel" value={formData.referrerPhone} onChange={(e) => setFormData({...formData, referrerPhone: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#2F3E2E] mb-4">Candidate Information</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Candidate Name *</label>
                    <input type="text" required value={formData.refereeName} onChange={(e) => setFormData({...formData, refereeName: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Candidate Email *</label>
                    <input type="email" required value={formData.refereeEmail} onChange={(e) => setFormData({...formData, refereeEmail: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Candidate Phone</label>
                    <input type="tel" value={formData.refereePhone} onChange={(e) => setFormData({...formData, refereePhone: e.target.value})} className="w-full px-3 py-2 border rounded-lg focus:border-[#FD6F2F] focus:outline-none" />
                  </div>
                </div>
              </div>
            </div>
            {status === 'success' && <p className="text-green-600 text-center">Referral submitted successfully!</p>}
            {status === 'error' && <p className="text-red-600 text-center">Failed to submit. Please try again.</p>}
            <button type="submit" disabled={status === 'sending'} className="w-full bg-[#FD6F2F] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50">
              {status === 'sending' ? 'Submitting...' : 'Submit Referral'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ReferAndEarn
