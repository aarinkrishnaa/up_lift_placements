const Staffing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#2F3E2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Staffing</h1>
          <p className="mt-2 text-sm opacity-80">Home &gt; Staffing</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2F3E2E] mb-6">IT Staffing Solutions</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                UP LIFT PLACEMENTS excels in IT recruitment and staffing services for finance, healthcare, and technology sectors. We offer versatile options: full-time, contract, and contract-to-hire positions, creating the perfect match for clients and candidates alike.
              </p>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Full-time permanent placements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Contract and temporary staffing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Contract-to-hire opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Project-based team augmentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Executive search and placement</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/staffing.jpg" 
                alt="Staffing Solutions" 
                className="w-full max-w-md rounded-lg shadow-lg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gradient-to-br from-[#DCE4B8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#2F3E2E] mb-8 text-center">Industries We Serve</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-4">Finance & Banking</h4>
              <p className="text-gray-700 mb-4">Specialized IT staffing for financial institutions</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• FinTech developers</li>
                <li>• Data analysts</li>
                <li>• Cybersecurity specialists</li>
                <li>• Business intelligence experts</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-4">Healthcare</h4>
              <p className="text-gray-700 mb-4">Healthcare IT professionals for modern medical facilities</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Healthcare software developers</li>
                <li>• EHR/EMR specialists</li>
                <li>• Health informatics experts</li>
                <li>• HIPAA compliance officers</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-4">Technology</h4>
              <p className="text-gray-700 mb-4">Tech talent for innovative companies</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Software engineers</li>
                <li>• Cloud architects</li>
                <li>• DevOps engineers</li>
                <li>• Product managers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#2F3E2E] mb-8 text-center">Staffing Options</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FFEAD1] to-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-4">Full-Time Placement</h4>
              <p className="text-gray-700 mb-4">Permanent positions for long-term growth</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Comprehensive candidate screening</li>
                <li>✓ Cultural fit assessment</li>
                <li>✓ Competitive salary negotiation</li>
                <li>✓ Onboarding support</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#FFEAD1] to-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-4">Contract Staffing</h4>
              <p className="text-gray-700 mb-4">Flexible staffing for project needs</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Quick deployment</li>
                <li>✓ Scalable team size</li>
                <li>✓ Specialized skill sets</li>
                <li>✓ Cost-effective solutions</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#FFEAD1] to-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-[#2F3E2E] mb-4">Contract-to-Hire</h4>
              <p className="text-gray-700 mb-4">Try before you commit</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Evaluate performance</li>
                <li>✓ Reduced hiring risk</li>
                <li>✓ Smooth transition process</li>
                <li>✓ Flexible conversion terms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-[#FFEAD1] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#2F3E2E] mb-8 text-center">Why Choose UP LIFT PLACEMENTS for Staffing?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-[#FD6F2F] mb-2">870+</div>
              <p className="text-gray-700 font-semibold">Successful Placements</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-[#FD6F2F] mb-2">97.8%</div>
              <p className="text-gray-700 font-semibold">Success Rate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-[#FD6F2F] mb-2">48-72h</div>
              <p className="text-gray-700 font-semibold">Average Response Time</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-[#FD6F2F] mb-2">100+</div>
              <p className="text-gray-700 font-semibold">Partner Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2F3E2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need IT Staffing Solutions?</h2>
          <p className="text-lg mb-8 opacity-90">Let us help you build your dream team</p>
          <a 
            href="/contact" 
            className="inline-block bg-[#FD6F2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}

export default Staffing
