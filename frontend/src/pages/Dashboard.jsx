import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../services/api'
import { ClipboardIcon } from '../components/Icons'

const STATUS_ORDER = ['PENDING', 'BOOKED', 'READY', 'COMPLETED']

const STATUS_LABELS = {
  PENDING: 'Pending', BOOKED: 'Booked',
  READY: 'Ready', COMPLETED: 'Completed'
}

const STATUS_NEXT = {
  PENDING: 'BOOKED', BOOKED: 'READY', READY: 'COMPLETED'
}

function getProgress(status) {
  const idx = STATUS_ORDER.indexOf(status)
  return idx >= 0 ? Math.round(((idx + 1) / STATUS_ORDER.length) * 100) : 0
}

export default function Dashboard() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const bookedService = location.state?.bookedService

  useEffect(() => { fetchBookings() }, [])

  const fetchBookings = async () => {
    try {
      const res = await api.get('/bookings')
      setBookings(res.data); setError('')
    } catch {
      setError('Failed to load bookings. Please refresh.')
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/bookings/${id}/status`, { status })
      fetchBookings()
    } catch (err) {
      setError('Update failed: ' + (err.response?.data?.message || err.message))
    }
  }

  if (loading) return <div className="loading"><div className="spinner" /></div>

  const counts = STATUS_ORDER.reduce((acc, s) => {
    acc[s] = bookings.filter(b => b.status === s).length; return acc
  }, {})

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Track and manage all your vehicle service bookings</p>
      </div>

{bookedService && (
        <div className="recent-banner">
          ✓ <strong>Booking confirmed:</strong> {bookedService.name} — {bookedService.description}
        </div>
      )}

{error && <div className="alert alert-error">Error: {error}</div>}

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total</div>
          <div className="stat-value">{bookings.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Pending</div>
          <div className="stat-value yellow">{counts.PENDING}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Booked</div>
          <div className="stat-value blue">{counts.BOOKED}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Ready</div>
          <div className="stat-value purple">{counts.READY}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Completed</div>
          <div className="stat-value green">{counts.COMPLETED}</div>
        </div>
      </div>

      {/* Bookings */}
      <div className="bookings-section">
        <h2>Your Bookings</h2>
        {bookings.length === 0 ? (
          <div className="empty">
<div className="empty-icon" style={{fontSize: '3rem', opacity: 0.5}}>📋</div>
            <h3>No bookings yet</h3>
            <p style={{marginBottom:'1rem'}}>Book your first service to get started</p>
            <button onClick={() => navigate('/services')}>Browse Services →</button>
          </div>
        ) : (
          bookings.map(b => (
            <div key={b.id} className="booking-card">
              <div className="booking-top">
                <div>
                  <div className="booking-name">{b.service?.name || 'Service'}</div>
                  <div className="booking-sub">
                    {b.vehicle ? `${b.vehicle.year} · ${b.vehicle.licensePlate}` : 'No vehicle'} &nbsp;·&nbsp; {new Date(b.bookingDate).toLocaleDateString('en-IN', {day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})}
                  </div>
                </div>
                <span className={`status-badge badge-${b.status}`}>
                  {STATUS_LABELS[b.status] || b.status}
                </span>
              </div>

              <div className="progress-track">
                <div className="progress-fill" style={{width: `${getProgress(b.status)}%`}} />
              </div>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.73rem',color:'var(--text-muted)',marginTop:'-0.5rem',marginBottom:'0.875rem'}}>
                {STATUS_ORDER.map(s => (
                  <span key={s} style={{color: b.status === s ? 'var(--accent)' : undefined}}>{STATUS_LABELS[s]}</span>
                ))}
              </div>

              {b.status !== 'COMPLETED' && (
                <div className="booking-actions">
                  {STATUS_NEXT[b.status] && (
                    <button
                      className="btn-secondary btn-sm"
                      onClick={() => updateStatus(b.id, STATUS_NEXT[b.status])}
                    >
                      → Mark as {STATUS_LABELS[STATUS_NEXT[b.status]]}
                    </button>
                  )}
                  <button className="btn-ghost btn-sm" onClick={() => updateStatus(b.id, 'COMPLETED')}>
                    ✓ Complete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
