import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import servicesData from '../data/servicesData'
import { ServiceIcon } from '../components/Icons'

export default function ServiceList() {
  const [services, setServices] = useState(servicesData)
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/services')
      .then(res => { if (res.data?.length) setServices(res.data) })
      .catch(() => setError('Showing local service data — backend unavailable.'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="loading"><div className="spinner" /></div>

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Available Services</h1>
        <p>Choose a service to book an appointment for your vehicle</p>
      </div>

{error && <div className="alert alert-warn">Info: {error}</div>}

      <div className="services-grid">
        {services.map(svc => (
          <div key={svc.id} className="service-card" onClick={() => navigate(`/book/${svc.id}`, {state:{service:svc}})}>
<div className="service-icon" style={{fontSize: '2rem', opacity: 0.7}}>🔧</div>
            <div className="service-name">{svc.name}</div>
            <div className="service-desc">{svc.description}</div>
            <div className="service-footer">
              <div>
                <div className="service-price">₹{svc.price}</div>
<div className="service-dur">{svc.durationMinutes} min</div>
              </div>
              <button style={{pointerEvents:'none'}}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
