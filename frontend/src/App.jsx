import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ServiceList from './pages/ServiceList'
import BookService from './pages/BookService'
import DigitalGarage from './pages/DigitalGarage'
import ServiceEstimator from './pages/ServiceEstimator'
import ProtectedRoute from './components/ProtectedRoute'
import './styles/index.css'

function AppRoutes() {
  const location = useLocation()
  const getPageClass = () => {
    switch (location.pathname) {
      case '/dashboard': return 'dashboard-page app-page';
      case '/services': return 'services-page app-page';
      case '/garage': return 'garage-page app-page';
      case '/estimator': return 'estimator-page app-page';
      case '/book': return 'services-page app-page'; // book service same as services
      default: return 'app-page';
    }
  }

  return (
    <div className={getPageClass()}>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services"  element={<ServiceList />} />
          <Route path="/book/:serviceId" element={<BookService />} />
          <Route path="/garage"    element={<DigitalGarage />} />
          <Route path="/estimator" element={<ServiceEstimator />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
