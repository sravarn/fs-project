import React, { useState, useEffect } from 'react'
import api from '../services/api'
import { CarIcon, ClipboardIcon } from '../components/Icons'

export default function DigitalGarage() {
  const [vehicles, setVehicles]     = useState([])
  const [showAdd, setShowAdd]       = useState(false)
  const [form, setForm]             = useState({ year: '', licensePlate: '' })
  const [loading, setLoading]       = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const [error, setError]           = useState('')
  const [success, setSuccess]       = useState('')

  useEffect(() => { fetchVehicles() }, [])

  const fetchVehicles = async () => {
    setPageLoading(true)
    try {
      const res = await api.get('/vehicles')
      setVehicles(res.data); setError('')
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load vehicles.')
    } finally {
      setPageLoading(false)
    }
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      await api.post('/vehicles', { ...form, year: parseInt(form.year, 10) })
      setForm({ year: '', licensePlate: '' })
      setShowAdd(false)
      setSuccess('Vehicle added successfully!')
      setTimeout(() => setSuccess(''), 3000)
      fetchVehicles()
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add vehicle.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this vehicle?')) return
    try {
      await api.delete(`/vehicles/${id}`)
      fetchVehicles()
    } catch {
      setError('Failed to delete vehicle.')
    }
  }

  if (pageLoading) return <div className="loading"><div className="spinner" /></div>

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Digital Garage</h1>
        <p>Manage your registered vehicles</p>
      </div>

{error   && <div className="alert alert-error">Error: {error}</div>}
{success && <div className="alert alert-success">Success: {success}</div>}

<div className="garage-topbar">
        <p style={{color:'var(--text-muted)',fontSize:'0.875rem'}}>{vehicles.length} vehicle{vehicles.length !== 1 ? 's' : ''} registered</p>
      </div>

      {/* Add form */}
      {showAdd && (
        <div className="add-form">
          <div className="add-form-title">New Vehicle</div>
          <form onSubmit={handleAdd}>
            <div className="form-row">
              <div className="form-group">
                <label>Year</label>
                <input
                  type="number" placeholder="e.g. 2022"
                  value={form.year} min="1990" max="2030"
                  onChange={e => setForm({...form, year: e.target.value})} required
                />
              </div>
              <div className="form-group">
                <label>License Plate</label>
                <input
                  type="text" placeholder="e.g. MH01AB1234"
                  value={form.licensePlate}
                  onChange={e => setForm({...form, licensePlate: e.target.value.toUpperCase()})} required
                />
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" disabled={loading}>{loading ? 'Adding…' : 'Add Vehicle'}</button>
              <button type="button" className="btn-ghost" onClick={() => setShowAdd(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Vehicles */}
      {vehicles.length === 0 ? (
        <div className="empty">
<div className="empty-icon">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_RqNLdVQjNl5193L2WtJBBEfy0HQkJDxFw&s" alt="Vehicle" style={{width: '52px', height: '52px', objectFit: 'cover'}} />
</div>
          <h3>No vehicles yet</h3>
          <p style={{marginBottom:'1rem'}}>Add your first vehicle to start booking services</p>
          <button onClick={() => setShowAdd(true)}>+ Add Vehicle</button>
        </div>
      ) : (
        <div className="vehicle-grid">
          {vehicles.map(v => (
            <div key={v.id} className="vehicle-card">
<div className="v-icon">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_RqNLdVQjNl5193L2WtJBBEfy0HQkJDxFw&s" alt="Vehicle" style={{width: '40px', height: '40px', objectFit: 'cover'}} />
</div>
              <div className="v-year">{v.year}</div>
              <div className="v-plate">{v.licensePlate}</div>
              <div className="v-actions">
                <button className="btn-danger btn-sm" onClick={() => handleDelete(v.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
