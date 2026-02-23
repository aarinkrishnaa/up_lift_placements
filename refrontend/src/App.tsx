import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Jobs = lazy(() => import('./pages/Jobs'))
const Training = lazy(() => import('./pages/Training'))
const Contact = lazy(() => import('./pages/Contact'))
const RecruitmentProcess = lazy(() => import('./pages/RecruitmentProcess'))
const ITJobPlacement = lazy(() => import('./pages/ITJobPlacement'))
const CareerGuidance = lazy(() => import('./pages/CareerGuidance'))
const InterviewSupport = lazy(() => import('./pages/InterviewSupport'))
const ReferAndEarn = lazy(() => import('./pages/ReferAndEarn'))
const Staffing = lazy(() => import('./pages/Staffing'))

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[120px]">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FD6F2F]"></div></div>}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
