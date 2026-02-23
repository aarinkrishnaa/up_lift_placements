import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#2F3E2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src="/images/logo.svg" alt="UP LIFT PLACEMENTS" className="h-12 mb-4" />
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              For the past two-plus years, NetBounce Placement's LLC is a tech employment firm connecting candidates and clients.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/netbounce-placements" target="_blank" rel="noopener noreferrer" className="hover:text-[#FD6F2F] transition">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/netbounce.placement" target="_blank" rel="noopener noreferrer" className="hover:text-[#FD6F2F] transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#FD6F2F] transition text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#FD6F2F] transition text-sm">About Us</Link></li>
              <li><Link to="/refer-and-earn" className="text-gray-300 hover:text-[#FD6F2F] transition text-sm">Refer and Earn</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#FD6F2F] transition text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/recruitment-interview-process" className="text-gray-300 hover:text-[#FD6F2F] transition text-sm">Recruitment & Interview process</Link></li>
              <li><Link to="/it-job-placement" className="text-gray-300 hover:text-[#FD6F2F] transition text-sm">IT Job Placement</Link></li>
              <li><Link to="/career-guidance" className="text-gray-300 hover:text-[#FD6F2F] transition text-sm">Career Guidance</Link></li>
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h4 className="text-base font-bold mb-4">Specialities</h4>
            <ul className="space-y-2">
              <li><Link to="/interview-support" className="text-gray-300 hover:text-[#FD6F2F] transition text-sm">Interview Support</Link></li>
              <li><Link to="/training" className="text-gray-300 hover:text-[#FD6F2F] transition text-sm">Training</Link></li>
              <li><Link to="/staffing" className="text-gray-300 hover:text-[#FD6F2F] transition text-sm">Staffing</Link></li>
            </ul>
          </div>


        </div>

        <div className="border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-xs text-center">&copy; {new Date().getFullYear()} NetBounce Placement's LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
