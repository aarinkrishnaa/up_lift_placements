import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Jobs from './pages/Jobs'
import Training from './pages/Training'
import Contact from './pages/Contact'
import RecruitmentProcess from './pages/RecruitmentProcess'
import ITJobPlacement from './pages/ITJobPlacement'
import CareerGuidance from './pages/CareerGuidance'
import InterviewSupport from './pages/InterviewSupport'
import ReferAndEarn from './pages/ReferAndEarn'
import Staffing from './pages/Staffing'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[120px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/training" element={<Training />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recruitment-interview-process" element={<RecruitmentProcess />} />
            <Route path="/it-job-placement" element={<ITJobPlacement />} />
            <Route path="/career-guidance" element={<CareerGuidance />} />
            <Route path="/interview-support" element={<InterviewSupport />} />
            <Route path="/refer-and-earn" element={<ReferAndEarn />} />
            <Route path="/staffing" element={<Staffing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
