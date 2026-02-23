const About = () => {
  return (
    <div>
      <section className="bg-[#2F3E2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-sm opacity-80">Home &gt; About Us</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            For the past two-plus years, NetBounce Placement's LLC is a tech employment firm connecting candidates and clients, facilitating access to job opportunities and the right talent.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            NetBounce Placement stands out as a premier job-seeking service, distinguished by our extensive nationwide searches within the United States. Our mission is to identify the most suitable candidates for a wide range of job roles.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            As the flagship of innovation in the placement industry, NetBounce Placement brings a distinct approach to the forefront. With a foundation deeply rooted in cutting-edge strategies, we specialize in delivering customized staffing solutions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our expertise thrives in connecting dynamic professionals across a spectrum of fields, from mid- to C-level executives, with their ideal career avenues.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#DCE4B8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2F3E2E] mb-8 text-center">Company Vision</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            At our core, we are dedicated to providing unmatched IT services while nurturing trust-based relationships with our clients and candidates. Our overarching vision is a testament to our unyielding dedication to excellence and our deliberate emphasis on forging authentic bonds.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2F3E2E] mb-8 text-center">Our Success</h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            Since its establishment, NetBounce Placement has facilitated the successful placement of 870+ candidates, underscoring our proficiency in generating meaningful employment opportunities.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-8 max-w-4xl mx-auto">
            {[
              { year: '2021', count: '60+' },
              { year: '2022', count: '180+' },
              { year: '2023', count: '300+' },
              { year: '2024', count: '523+' },
              { year: '2025', count: '870+' }
            ].map((item, i) => (
              <div key={i} className="text-center bg-gradient-to-br from-[#FFEAD1] to-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-[#FD6F2F]">{item.year}</div>
                <div className="text-xl font-semibold text-[#2F3E2E]">{item.count}</div>
                <div className="text-xs text-gray-600">Candidates</div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[#FFEAD1] to-white p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-[#FD6F2F]" style={{ width: '97.8%' }}></div>
            </div>
            <p className="text-gray-700 text-center">NetBounce has achieved a 97.8% placement success rate since the start of its operations.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2F3E2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Let us be your trusted partner</h2>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
            NetBounce Placement stands out as a premier job-seeking service, distinguished by our extensive nationwide searches within the United States. Our mission is to identify the most suitable candidates for a wide range of job roles.
          </p>
          <a href="/contact" className="inline-block bg-[#FD6F2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Contact Us</a>
        </div>
      </section>
    </div>
  )
}

export default About
