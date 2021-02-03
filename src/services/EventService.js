import axios from 'axios'

// apiClient constant, which holds our singular Axios instance
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/mwen00/vue-playground',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  }
}
