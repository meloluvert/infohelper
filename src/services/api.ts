import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fisrtapi.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api