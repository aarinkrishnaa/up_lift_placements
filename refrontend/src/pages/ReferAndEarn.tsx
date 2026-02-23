const ReferAndEarn = () => {
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
              Know someone looking for their next career opportunity? Refer them to NetBounce Placement and earn rewards when they get placed!
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
              <div className="text-5xl mb-4">💰</div>
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
                <span>NetBounce Placement reserves the right to modify program terms at any time</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2F3E2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Referring?</h2>
          <p className="text-lg mb-8 opacity-90">Submit your first referral today and start earning rewards!</p>
          <a 
            href="/contact" 
            className="inline-block bg-[#FD6F2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Submit a Referral
          </a>
        </div>
      </section>
    </div>
  )
}

export default ReferAndEarn
