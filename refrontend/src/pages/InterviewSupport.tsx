const InterviewSupport = () => {
  const roles = [
    'Java Developer', 'Python Developer', 'Network Engineer', 'Data Analyst',
    'Cybersecurity Analyst', 'IT Project Manager', 'Database Administrator', 'Web Developer',
    'FINANCIAL ANALYST', 'DevOps Engineer', 'DATA ENGINEER', 'Business Intelligence Analyst',
    'Front End Developer', 'QA Tester'
  ]

  return (
    <div>
      <section className="bg-[#2F3E2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Interview Support</h1>
          <p className="mt-2 text-sm opacity-80">Home &gt; Interview Support</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            NetBounce Placement extends a crucial service to job seekers through our comprehensive interview support offerings. With a diverse range of resources including articles, webinars, videos, virtual coaching sessions, and interactive workshops, we equip job seekers with a robust toolkit to excel in interviews and elevate their chances of success.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our commitment extends to personalized attention, offering one-on-one coaching and resume reviews. This tailored approach allows individuals to polish their application materials and enhance their interview prowess.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our interview support services are a game-changer for individuals who may grapple with interview-related anxiety or seek to boost their confidence.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {roles.map((role, i) => (
              <div key={i} className="bg-gradient-to-br from-[#FFEAD1] to-white p-4 rounded-lg text-center font-semibold text-[#2F3E2E]">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2F3E2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Did not find what you are searching for?<br />Connect with us:</h2>
          <a href="/contact" className="inline-block bg-[#FD6F2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Connect with Us</a>
        </div>
      </section>
    </div>
  )
}

export default InterviewSupport
