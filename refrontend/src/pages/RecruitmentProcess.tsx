const RecruitmentProcess = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#2F3E2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Recruitment and Interview Process</h1>
          <p className="mt-2 text-sm opacity-80">Home &gt; Recruitment and Interview Process</p>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-[#2F3E2E] mb-6">Recruitment</h4>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>UP LIFT PLACEMENTS is dedicated to crafting optimal job descriptions that swiftly connect you with the right talent.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Our specialized recruiters supplement this with data-driven market analysis, shaping unique recruitment strategies to cater to evolving demands.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>UP LIFT PLACEMENTS's talent pool spans diverse levels and sectors. This enables our adept full-service recruiters to pinpoint and engage the market's most promising candidates, ensuring a perfect fit for your needs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>With a commitment to swift action, UP LIFT PLACEMENTS aims to present a selection of top-quality candidates within the first 48-72 hours of receiving your open criteria.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FD6F2F] mr-2">•</span>
                  <span>Once the criteria are set, our recruitment experts at UP LIFT PLACEMENTS dive into meticulous screening and interviews, aligning with your expectations to unearth exceptional candidates.</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/Experienced-Team.png" 
                alt="Experienced Team" 
                className="w-full max-w-md rounded-lg shadow-lg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interview Process Section */}
      <section className="py-16 bg-gradient-to-br from-[#FFEAD1] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-2xl font-bold text-[#2F3E2E] mb-6">Interview Process</h4>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start">
              <span className="text-[#FD6F2F] mr-2">•</span>
              <span>UP LIFT PLACEMENTS is committed to equip the clients with comprehensive insights, offering CVs, resumes, and relevant data to ensure a thorough evaluation. Our interview procedure takes on a holistic approach. Recruiters expertly schedule interviews, prepare candidates, and confirm their attendance, ensuring a smooth experience.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FD6F2F] mr-2">•</span>
              <span>Once interviews conclude, UP LIFT PLACEMENTS's recruiting team maintains a proactive role, guiding the process until the position is filled. We understand the value of streamlining this journey, allowing our clients to focus on their core business operations.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FD6F2F] mr-2">•</span>
              <span>For added convenience, UP LIFT PLACEMENTS extends background check packages upon request. Our comprehensive offerings, including Reference Checks, E-Verify, California Board of License Verification, and Universal Background Screening, empower our clients to make informed choices.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2F3E2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Did not find what you are searching for?<br />Connect with us:</h2>
          <a 
            href="/contact" 
            className="inline-block bg-[#FD6F2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Connect with Us
          </a>
        </div>
      </section>
    </div>
  )
}

export default RecruitmentProcess
