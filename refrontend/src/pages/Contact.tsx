const Contact = () => {
  return (
    <div>
      <section className="bg-[#2F3E2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-sm opacity-80">Home &gt; Contact Us</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#2F3E2E] mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-[#2F3E2E] mb-2">US Headquarters</h3>
                  <p className="text-gray-700">2404, 1007 N Orange St. 4th Floor,<br />Wilmington, DE, New Castle, US, 19801</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#2F3E2E] mb-2">Phone</h3>
                  <p className="text-gray-700">+1 (805) 222-6708</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#2F3E2E] mb-2">Email</h3>
                  <p className="text-gray-700">service@netbounceplacement.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFEAD1] to-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#2F3E2E] mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FD6F2F] focus:outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FD6F2F] focus:outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FD6F2F] focus:outline-none" placeholder="+1 (234) 567-890" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FD6F2F] focus:outline-none">
                    <option value="">Select a subject</option>
                    <option value="job-inquiry">Job Inquiry</option>
                    <option value="training">Training Programs</option>
                    <option value="career-guidance">Career Guidance</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FD6F2F] focus:outline-none resize-none" placeholder="Tell us how we can help you..." />
                </div>
                <button type="submit" className="w-full bg-[#FD6F2F] text-white py-3 rounded-lg hover:bg-opacity-90 transition font-semibold">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
