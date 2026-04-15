import React, { useState } from 'react'
import api from '../services/api'
import { SymptomIcon, WrenchIcon } from '../components/Icons'

const SYMPTOMS = [
  { id:'squeaky-brakes',      label:'Squeaky Brakes'       },
  { id:'engine-overheat',     label:'Engine Overheating'   },
  { id:'battery-not-start',   label:'Battery Not Starting' },
  { id:'flat-tire',           label:'Flat Tire'            },
  { id:'oil-leak',            label:'Oil Leak'             },
  { id:'strange-noise',       label:'Strange Noise'        },
  { id:'check-engine-light',  label:'Check Engine Light'   },
  { id:'ac-not-cooling',      label:'A/C Not Cooling'      },
]

export default function ServiceEstimator() {
  const [selected, setSelected]   = useState([])
  const [estimate, setEstimate]   = useState(null)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')

  const toggle = (id) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
    setEstimate(null)
  }

  const handleEstimate = async () => {
    if (selected.length === 0) return
    setLoading(true); setError('')
    try {
      const symptoms = selected.map(id => SYMPTOMS.find(s => s.id === id)?.label)
      const res = await api.post('/estimator', { symptoms })
      setEstimate(res.data.estimatedCost)
    } catch {
      const baseMap = {
        'squeaky-brakes': 2200, 'engine-overheat': 5000, 'battery-not-start': 3500,
        'flat-tire': 800, 'oil-leak': 4000, 'strange-noise': 3000,
        'check-engine-light': 6000, 'ac-not-cooling': 4500,
      }
      const total = selected.reduce((sum, id) => sum + (baseMap[id] || 1500), 0)
      setEstimate(total * (0.85 + Math.random() * 0.3))
    } finally {
      setLoading(false)
    }
  }

  const selectedSymptoms = SYMPTOMS.filter(s => selected.includes(s.id))

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Service Estimator</h1>
        <p>Select your vehicle's symptoms to get an instant cost estimate</p>
      </div>

{error && <div className="alert alert-error">Error: {error}</div>}

      <div className="estimator-layout">
        <div className="est-panel">
          <h2>Select Symptoms</h2>
          <div className="symptom-grid">
            {SYMPTOMS.map(s => (
              <button
                key={s.id}
                className={`symptom-btn${selected.includes(s.id) ? ' active' : ''}`}
                onClick={() => toggle(s.id)}
              >
                <span style={{ marginRight: '0.4rem', fontSize: '1.2rem' }}>⚠</span>
                {s.label}
              </button>
            ))}
          </div>

          {selectedSymptoms.length > 0 && (
            <div className="selected-list">
              <h3>Selected ({selectedSymptoms.length})</h3>
              <div>
                {selectedSymptoms.map(s => (
                  <span key={s.id} className="symptom-tag">
                    <span style={{ marginRight: '0.3rem', fontSize: '1rem' }}>⚠</span>
                    {s.label}
                    <button onClick={() => toggle(s.id)}>×</button>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div style={{marginTop:'1.5rem'}}>
            <button
              onClick={handleEstimate}
              className="btn-full"
              disabled={loading || selected.length === 0}
            >
              {loading ? 'Calculating…' : `Get Estimate (${selected.length} symptom${selected.length !== 1 ? 's' : ''})`}
            </button>
          </div>
        </div>

        <div className="est-panel">
          <h2>Estimated Cost</h2>
          {estimate !== null ? (
            <div className="estimate-display">
              <div className="est-amount">₹{Math.round(estimate).toLocaleString('en-IN')}</div>
              <div className="est-note">Rough estimate · Actual cost may vary</div>
              <button
                className="btn-secondary"
                style={{marginTop:'1.5rem'}}
                onClick={() => { setSelected([]); setEstimate(null) }}
              >
                Start Over
              </button>
            </div>
          ) : (
            <div style={{textAlign:'center',padding:'3rem 1rem',color:'var(--text-muted)'}}>
<div style={{marginBottom:'0.75rem', fontSize:'3rem', opacity: 0.5}}>🔧</div>
              <p>Select symptoms on the left and click <strong style={{color:'var(--text)'}}>Get Estimate</strong></p>
            </div>
          )}

          {estimate !== null && (
            <div style={{marginTop:'1.5rem'}}>
              <div style={{fontSize:'0.78rem',color:'var(--text-muted)',marginBottom:'0.75rem',textTransform:'uppercase',letterSpacing:'0.06em',fontWeight:600}}>Breakdown</div>
              {selectedSymptoms.map(s => {
                const baseMap = { 'squeaky-brakes': 2200, 'engine-overheat': 5000, 'battery-not-start': 3500, 'flat-tire': 800, 'oil-leak': 4000, 'strange-noise': 3000, 'check-engine-light': 6000, 'ac-not-cooling': 4500 }
                const val = baseMap[s.id] || 1500
                return (
                  <div key={s.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 0',borderBottom:'1px solid var(--border)',fontSize:'0.875rem'}}>
                    <span style={{display:'flex',alignItems:'center',gap:'0.4rem'}}>
                      <span style={{fontSize: '1.1rem'}}>⚠</span>
                      {s.label}
                    </span>
                    <span style={{color:'var(--text-dim)'}}>~₹{val.toLocaleString('en-IN')}</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
