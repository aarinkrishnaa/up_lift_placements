import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, UserCheck, TrendingUp, FileText, Headphones } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="w-16 h-16" />,
      title: 'Job Placement Services',
      description: 'We connect you with top employers across various industries. Our extensive network ensures you find the perfect match for your skills and career aspirations.',
      features: ['Resume screening', 'Interview coordination', 'Salary negotiation', 'Onboarding support']
    },
    {
      icon: <GraduationCap className="w-16 h-16" />,
      title: 'Training Programs',
      description: 'Enhance your skills with our comprehensive training programs designed by industry experts to meet current market demands.',
      features: ['Technical skills training', 'Soft skills development', 'Industry certifications', 'Hands-on projects']
    },
    {
      icon: <UserCheck className="w-16 h-16" />,
      title: 'Career Guidance',
      description: 'Get personalized career counseling from experienced professionals who understand your goals and the job market.',
      features: ['One-on-one counseling', 'Career path planning', 'Skill assessment', 'Industry insights']
    },
    {
      icon: <FileText className="w-16 h-16" />,
      title: 'Resume Building',
      description: 'Create a compelling resume that stands out. Our experts help you showcase your strengths effectively.',
      features: ['Professional formatting', 'Content optimization', 'ATS-friendly design', 'Cover letter writing']
    },
    {
      icon: <Headphones className="w-16 h-16" />,
      title: 'Interview Preparation',
      description: 'Prepare for success with mock interviews, feedback sessions, and tips from hiring experts.',
      features: ['Mock interviews', 'Feedback sessions', 'Common questions prep', 'Confidence building']
    },
    {
      icon: <TrendingUp className="w-16 h-16" />,
      title: 'Career Development',
      description: 'Continuous support for your professional growth with resources, networking, and advancement opportunities.',
      features: ['Networking events', 'Skill workshops', 'Mentorship programs', 'Career advancement']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-peach-light to-green-soft py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-green-deep mb-6">
              Our <span className="text-primary-orange">Services</span>
            </h1>
            <p className="text-lg text-gray-700">
              Comprehensive career solutions designed to help you succeed at every stage of your professional journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-peach-light to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-primary-orange mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-green-deep mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-orange to-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you achieve your career goals
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-orange px-10 py-4 rounded-full hover:bg-opacity-90 transition font-semibold text-lg"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
