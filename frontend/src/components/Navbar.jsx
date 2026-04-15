import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { CarIcon } from './Icons'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const isAuthenticated = !!localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    navigate('/login')
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
<Link to={isAuthenticated ? '/dashboard' : '/login'} className="navbar-logo">
          <div className="logo-badge">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_RqNLdVQjNl5193L2WtJBBEfy0HQkJDxFw&s" 
              alt="Vehicle Service"
              style={{ width: '34px', height: '34px', borderRadius: '8px', objectFit: 'cover' }} 
            />
          </div>
          Vehicle<span className="logo-highlight">Service</span>
        </Link>
        <div className="nav-menu">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard"  className={`nav-link${isActive('/dashboard')  ? ' active' : ''}`}>Dashboard</Link>
              <Link to="/services"   className={`nav-link${isActive('/services')   ? ' active' : ''}`}>Services</Link>
              <Link to="/garage"     className={`nav-link${isActive('/garage')     ? ' active' : ''}`}>Garage</Link>
              <Link to="/estimator"  className={`nav-link${isActive('/estimator')  ? ' active' : ''}`}>Estimator</Link>
              <button onClick={handleLogout} className="nav-link btn-logout" style={{marginLeft:'0.5rem'}}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="nav-link">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  )
}
