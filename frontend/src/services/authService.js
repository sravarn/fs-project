import api from './api'

export const authService = {
  login: async (username, password) => {
    const response = await api.post('/auth/login', { username, password })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('refreshToken', response.data.refreshToken)
    }
    return response.data
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
  },

  refreshToken: async () => {
    const refreshToken = localStorage.getItem('refreshToken')
    if (!refreshToken) return null
    try {
      const response = await api.post('/auth/refresh', { refreshToken })
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('refreshToken', response.data.refreshToken)
      }
      return response.data
    } catch (error) {
      authService.logout()
      return null
    }
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token')
  }
}