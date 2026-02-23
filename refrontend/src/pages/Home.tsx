import { motion } from 'framer-motion'
import { Laptop, GraduationCap, Headphones, BookOpen, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const statsRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [stats, setStats] = useState({ y2021: 0, y2022: 0, y2023: 0, y2024: 0, y2025: 0, rate: '0' })
  
  const slides = [
    { title: "Keep On Believing", subtitle: "You'll Get Hired", tagline: "Don't Quit Dreaming" },
    { title: "You Will Succeed.", subtitle: "We Promise That", tagline: "You Will Grow" },
    { title: "And you have no idea", subtitle: "Where you will reach", tagline: "One step with us" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateStats()
        }
      },
      { threshold: 0.5 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  const animateStats = () => {
    const targets = { y2021: 60, y2022: 180, y2023: 300, y2024: 523, y2025: 870, rate: 97.8 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      setStats({
        y2021: Math.floor(targets.y2021 * progress),
        y2022: Math.floor(targets.y2022 * progress),
        y2023: Math.floor(targets.y2023 * progress),
        y2024: Math.floor(targets.y2024 * progress),
        y2025: Math.floor(targets.y2025 * progress),
        rate: (targets.rate * progress).toFixed(1)
      })
      if (currentStep >= steps) clearInterval(timer)
    }, stepTime)
  }
  const services = [
    { icon: <Laptop className="w-16 h-16" />, title: 'IT JOB PLACEMENT' },
    { icon: <GraduationCap className="w-16 h-16" />, title: 'CAREER GUIDANCE' },
    { icon: <Headphones className="w-16 h-16" />, title: 'INTERVIEW SUPPORT' },
    { icon: <BookOpen className="w-16 h-16" />, title: 'TRAINING' },
    { icon: <Users className="w-16 h-16" />, title: 'STAFFING' },
    { icon: <GraduationCap className="w-16 h-16" />, title: 'RECRUITMENT & INTERVIEW PROCESS' }
  ]

  const whyChooseUs = [
    { icon: <Users className="w-16 h-16" />, title: 'Staffing', desc: 'UP LIFT PLACEMENTS excels in IT recruitment and staffing services for finance, healthcare, and technology sectors.' },
    { icon: <GraduationCap className="w-16 h-16" />, title: 'Career Guidance', desc: 'Discover your professional compass with UP LIFT PLACEMENTS. Our career guidance offers insights, trends, and tailored advice.' },
    { icon: <Users className="w-16 h-16" />, title: 'Job Guarantee', desc: 'UP LIFT PLACEMENTS stands out by offering job guarantee plans, providing job seekers with the confidence they need.' }
  ]

  const companies = [
    'acce.png', 'blackrock.png', 'discover.png', 'dominos.png', 'fielity.png',
    'freddie.png', 'intel.png', 'meta.png', 'microsoft.png', 'paypal.png', 'walmart.png'
  ]

  const testimonials = [
    { name: 'Rajesh Kumar', role: 'Senior Software Engineer', content: 'UP LIFT PLACEMENTS team has been exceptional in understanding my career goals. Their professional approach and constant support made my job search journey smooth and successful.', img: 'Enock-Brookins.png' },
    { name: 'Priya Sharma', role: 'Business Analyst', content: 'The team at UP LIFT PLACEMENTS exceeded my expectations. They were responsive, professional, and helped me land my dream job. Highly recommend their services!', img: 'Priya-Patel.png' },
    { name: 'Amit Patel', role: 'Project Manager', content: 'Working with UP LIFT PLACEMENTS was a game-changer for my career. Their expertise and dedication in finding the right opportunity for me was truly impressive.', img: 'Vaidehi-Shah.png' },
    { name: 'Sneha Reddy', role: 'Data Scientist', content: 'I am grateful to UP LIFT PLACEMENTS for their excellent guidance and support. They understood my requirements perfectly and connected me with the right opportunities.', img: 'Enock-Brookins.png' },
    { name: 'Vikram Singh', role: 'DevOps Engineer', content: 'The professionalism and commitment shown by UP LIFT PLACEMENTS team is commendable. They made the entire placement process seamless and stress-free.', img: 'Priya-Patel.png' }
  ]

  return (
    <div>
      {/* Hero Video Section */}
      <section className="relative bg-[#2F3E2E] text-white py-20 md:py-32 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#2F3E2E] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div key={currentSlide} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-lg md:text-xl mb-4 font-medium text-white">{slides[currentSlide].tagline}</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {slides[currentSlide].title}<br />{slides[currentSlide].subtitle}
              </h1>
              <p className="text-base md:text-lg mb-8 opacity-80">Professional IT consulting and Staffing firm</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/refer-and-earn" className="bg-white text-[#2F3E2E] px-6 py-2 rounded-md font-bold hover:bg-opacity-90 transition text-sm">Refer & Earn</Link>
                <Link to="/contact" className="bg-white text-[#2F3E2E] px-6 py-2 rounded-md font-bold hover:bg-opacity-90 transition text-sm">Connect with us</Link>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-[#FD6F2F] w-8' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#FD6F2F] font-semibold mb-2 text-base">UP LIFT PLACEMENTS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E2E] mb-6">Services</h2>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">UP LIFT PLACEMENTS provides a holistic range of IT services. From job placement and career guidance to interview support, training, and staffing solutions, we're your partners in every step of your IT journey.</p>
              <img src="/services.jpg" alt="Services" className="w-full rounded-lg shadow-lg" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            </motion.div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-[#FFEAD1] to-white p-4 md:p-6 rounded-xl md:rounded-2xl text-center hover:shadow-xl transition">
                  <div className="text-[#FD6F2F] mb-3 md:mb-4 flex justify-center scale-75 md:scale-100">{service.icon}</div>
                  <h3 className="font-bold text-[#2F3E2E] text-[10px] md:text-xs leading-tight">{service.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Green Section */}
      <section className="py-16 md:py-20 bg-[#2F3E2E] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[1050px] h-[1050px] bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
              <p className="text-base md:text-lg mb-2">Give your Job Seekness to UP LIFT PLACEMENTS</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Why Choose Us?</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white bg-opacity-10 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl text-center">
                  <div className="flex justify-center mb-4 md:mb-6 scale-75 md:scale-100">{item.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{item.title}</h3>
                  <p className="opacity-90 text-xs md:text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/whatwedo1.jpg" alt="About Us" className="w-full max-w-md rounded-lg" loading="lazy" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#FFEAD1] to-white p-8 md:p-10 rounded-2xl">
              <p className="text-[#FD6F2F] font-semibold mb-2 text-base">What we do?</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2F3E2E] mb-6">Let UP LIFT PLACEMENTS, Find you the right job</h2>
              <p className="text-gray-600 mb-4 text-base leading-relaxed">As the flagship of innovation in the placement industry, UP LIFT PLACEMENTS brings a distinct approach to the forefront. With a foundation deeply rooted in cutting-edge strategies, we specialize in delivering customized staffing solutions.</p>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">Our expertise thrives in connecting dynamic professionals across a spectrum of fields, from mid- to C-level executives, with their ideal career avenues.</p>
              <div className="flex gap-4">
                <Link to="/contact" className="bg-[#FD6F2F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Request a callback</Link>
                <Link to="/contact" className="bg-[#2F3E2E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Contact Us</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#FFEAD1] to-white" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E2E] mb-6">Success</h2>
              <p className="text-gray-600 mb-8 text-base leading-relaxed">Since its establishment, UP LIFT PLACEMENTS has facilitated the successful placement of 870+ candidates, underscoring our proficiency in generating meaningful employment opportunities.</p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4 mb-8">
                {[
                  { year: '2021', count: stats.y2021 },
                  { year: '2022', count: stats.y2022 },
                  { year: '2023', count: stats.y2023 },
                  { year: '2024', count: stats.y2024 },
                  { year: '2025', count: stats.y2025 }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg md:text-2xl font-bold text-[#FD6F2F]">{item.year}</div>
                    <div className="text-base md:text-xl font-semibold text-[#2F3E2E]">{item.count}+</div>
                    <div className="text-[10px] md:text-xs text-gray-600">Candidates</div>
                  </div>
                ))}
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-[#FD6F2F] transition-all duration-1000" style={{ width: `${stats.rate}%` }}></div>
                </div>
                <p className="text-gray-600 text-sm">UP LIFT PLACEMENTS has achieved a {stats.rate}% placement success rate since the start of its operations.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/success.jpg" alt="Success" className="w-full rounded-lg" loading="lazy" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies Carousel */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2F3E2E] mb-12">Candidates Placed in</h2>
          <div className="relative">
            <div className="flex animate-scroll">
              {[...companies, ...companies].map((company, i) => (
                <img key={i} src={`/images/${company}`} alt="Company" className="h-20 mx-8 transition flex-shrink-0" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Let us be your trusted partner */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/tpartner1.jpg" alt="About Company" className="w-full rounded-lg shadow-xl" loading="lazy" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#FD6F2F] font-semibold mb-2 text-base">About Company</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2F3E2E] mb-6">Let us be your trusted partner</h2>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">UP LIFT PLACEMENTS stands out as a premier job-seeking service, distinguished by our extensive nationwide searches within the United States. Our mission is to identify the most suitable candidates for a wide range of job roles.</p>
              <Link to="/about" className="inline-block bg-[#FD6F2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">Read More</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Vision */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#DCE4B8] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E2E] mb-6">Company Vision</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">At our core, we are dedicated to providing unmatched IT services while nurturing trust-based relationships with our clients and candidates. Our overarching vision is a testament to our unyielding dedication to excellence and our deliberate emphasis on forging authentic bonds.</p>
              <p className="text-gray-600 text-base leading-relaxed mb-4">We believe in creating lasting partnerships that transcend traditional business relationships. Our commitment extends beyond mere placements; we invest in understanding the unique needs, aspirations, and challenges of both our clients and candidates.</p>
              <p className="text-gray-600 text-base leading-relaxed">Through continuous innovation and a people-first approach, we strive to set new standards in the IT placement industry, ensuring that every interaction reflects our core values of integrity, excellence, and genuine care for the success of all stakeholders.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center">
              <img src="/companyvision.jpg" alt="Vision" className="w-full max-w-md rounded-lg shadow-lg" loading="lazy" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#FFEAD1] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-[#FD6F2F] font-semibold mb-2 text-base">Candidate Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F3E2E]">Client Feedback</h2>
          </motion.div>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={`/images/${testimonial.img}`} alt={testimonial.name} className="w-12 h-12 rounded-full" loading="lazy" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + testimonial.name }} />
                      <div>
                        <div className="font-bold text-[#2F3E2E] text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-[#FD6F2F]" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-sm">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentTestimonial === index ? 'bg-[#FD6F2F] w-6' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
