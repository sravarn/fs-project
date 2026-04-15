import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authService } from '../services/authService'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(''); setLoading(true)
    try {
      await authService.login(username, password)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <div className="login-logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5KxkpVbGK2FE1bw6JOLQg1u-LI4Gea2X0w&s"
              alt="AutoServe logo"
            />
          </div>
          <h1>Login</h1>
          <p>Secure access to your service dashboard</p>
        </div>

        {error && (
          <div className="alert alert-error">
            <span>⚠</span> {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username" type="text"
              value={username} onChange={e => setUsername(e.target.value)}
              placeholder="Enter your username" required autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password" type="password"
              value={password} onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password" required
            />
          </div>
          <button type="submit" className="btn-full" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In →'}
          </button>
        </form>

        <div className="login-hint">
          <strong>Demo credentials</strong><br />
          Username: <strong>user</strong> &nbsp;·&nbsp; Password: <strong>password</strong>
        </div>
      </div>
    </div>
  )
}
