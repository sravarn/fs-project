import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import api from '../services/api'
import servicesData from '../data/servicesData'
import { ServiceIcon, WrenchIcon } from '../components/Icons'

export default function BookService() {
  const { serviceId } = useParams()
  const { state }     = useLocation()
  const navigate      = useNavigate()

  const [date, setDate]         = useState('')
  const [time, setTime]         = useState('')
  const [vehicleId, setVehicleId] = useState('')
  const [vehicles, setVehicles] = useState([])
  const [service, setService]   = useState(state?.service || null)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  useEffect(() => {
    if (!service) {
      const s = servicesData.find(x => x.id === parseInt(serviceId, 10))
      setService(s)
    }
    api.get('/vehicles').then(r => setVehicles(r.data)).catch(() => setError('Could not load vehicles.'))
  }, [serviceId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      await api.post('/bookings', { serviceId: service.id, vehicleId: parseInt(vehicleId), date, time })
      navigate('/dashboard', { state: { bookedService: service } })
    } catch (err) {
      setError('Booking failed: ' + (err.response?.data || err.message))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Book a Service</h1>
        <p>Fill in the details below to schedule your appointment</p>
      </div>

{error && <div className="alert alert-error">Error: {error}</div>}

      <div className="book-layout">
        {/* Form */}
        <div className="book-form-card">
          <h2>Appointment Details</h2>
vehicles.length === 0 && (
            <div className="alert alert-warn">
              Info: No vehicles found. <a href="/garage" style={{color:'var(--accent)'}}>Add a vehicle</a> first.
            </div>
          )
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Vehicle</label>
              <select value={vehicleId} onChange={e => setVehicleId(e.target.value)} required>
                <option value="">Select a vehicle</option>
                {vehicles.map(v => (
                  <option key={v.id} value={v.id}>{v.year} — {v.licensePlate}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} required min={new Date().toISOString().split('T')[0]} />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
              </div>
            </div>
            <div style={{display:'flex',gap:'0.75rem',marginTop:'0.5rem'}}>
              <button type="button" className="btn-ghost" onClick={() => navigate(-1)}>← Back</button>
              <button type="submit" className="btn-full" disabled={loading || !service || vehicles.length === 0}>
                {loading ? 'Booking…' : 'Confirm Booking →'}
              </button>
            </div>
          </form>
        </div>

        {/* Summary sidebar */}
        {service ? (
          <div className="service-summary-card">
<div style={{marginBottom:'0.75rem', fontSize:'3rem', opacity:0.7}}>🔧</div>
            <div className="summary-name">{service.name}</div>
            <div className="summary-desc">{service.description}</div>
            <div className="summary-meta">
              <div className="meta-block">
                <div className="meta-key">Price</div>
                <div className="meta-val green">₹{service.price}</div>
              </div>
              <div className="meta-block">
                <div className="meta-key">Duration</div>
                <div className="meta-val blue">{service.durationMinutes}m</div>
              </div>
            </div>
          </div>
          ) : (
            <div className="alert alert-error">Service not found.</div>
          )}
      </div>
    </div>
  )
}
