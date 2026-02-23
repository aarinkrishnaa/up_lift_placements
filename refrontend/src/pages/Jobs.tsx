import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Briefcase, Clock, DollarSign } from 'lucide-react'

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      category: 'Technology',
      description: 'Looking for an experienced software engineer to join our growing team.'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Brand Solutions',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $130k',
      category: 'Marketing',
      description: 'Lead our marketing initiatives and drive brand growth.'
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'Analytics Pro',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80k - $110k',
      category: 'Data Science',
      description: 'Analyze data and provide insights to drive business decisions.'
    },
    {
      id: 4,
      title: 'UX Designer',
      company: 'Design Studio',
      location: 'Los Angeles, CA',
      type: 'Contract',
      salary: '$70k - $100k',
      category: 'Design',
      description: 'Create beautiful and intuitive user experiences.'
    },
    {
      id: 5,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$110k - $150k',
      category: 'Management',
      description: 'Drive product strategy and execution for our flagship products.'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'Cloud Systems',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$100k - $140k',
      category: 'Technology',
      description: 'Build and maintain our cloud infrastructure.'
    }
  ]

  const categories = ['All', 'Technology', 'Marketing', 'Data Science', 'Design', 'Management']

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              Find Your <span className="text-primary-orange">Dream Job</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Browse through hundreds of opportunities from top companies
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-full shadow-lg p-2 flex items-center gap-2 max-w-2xl mx-auto">
              <Search className="ml-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 outline-none"
              />
              <button className="bg-primary-orange text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-primary-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-peach-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-deep mb-2">{job.title}</h3>
                    <p className="text-lg text-gray-700 mb-4">{job.company}</p>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary-orange" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-primary-orange" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign size={16} className="text-primary-orange" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-primary-orange" />
                        Posted 2 days ago
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-primary-orange text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition font-semibold whitespace-nowrap">
                      Apply Now
                    </button>
                    <button className="border-2 border-primary-orange text-primary-orange px-8 py-3 rounded-full hover:bg-primary-orange hover:text-white transition font-semibold whitespace-nowrap">
                      Save Job
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No jobs found matching your criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Jobs
