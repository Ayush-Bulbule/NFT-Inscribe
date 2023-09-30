import { useState } from 'react'
import './App.css'
import { StickyNavbar } from './components/StickyNavbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import { FooterWithLogo } from './components/FooterWithLogo'
import IssueCertificate from './pages/IssueCertificate'
import VerifyCertificate from './pages/VerifyCertificate'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/issue-certificate" element={<AdminDashboard />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
      </Routes>
      <FooterWithLogo />
    </BrowserRouter>
  )
}

export default App
