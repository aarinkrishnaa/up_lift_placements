const ITJobPlacement = () => {
  const roles = [
    'Software Developer', 'Systems Administrator', 'Network Engineer', 'Data Analyst',
    'Cybersecurity Analyst', 'IT Project Manager', 'Database Administrator', 'Web Developer',
    'DevOps Engineer', 'Business Intelligence Analyst', 'Front End Developer', 'QA Tester', 'Solutions Architect'
  ]

  return (
    <div>
      <section className="bg-[#2F3E2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">IT Job Placement</h1>
          <p className="mt-2 text-sm opacity-80">Home &gt; IT Job Placement</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            UP LIFT PLACEMENTS specializes in IT job placements, leveraging our industry expertise to connect exceptional candidates with the right opportunities. Our tailored approach ensures a seamless match between candidate skills and employer requirements, fostering successful partnerships that drive business growth. With a commitment to excellence, we navigate the dynamic IT landscape to deliver results that elevate both careers and organizations.
          </p>
          
          <h3 className="text-2xl font-bold text-[#2F3E2E] mb-6">Certainly, here are IT roles in which UP LIFT PLACEMENTS has successfully placed candidates:</h3>
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

export default ITJobPlacement
