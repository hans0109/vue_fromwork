import axios from 'axios'

export function request(config) {
  const instance1 = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
  })

  instance1.interceptors.request.use(config => {
    return config
  }, error => {
  })

  instance1.interceptors.response.use(res => {
    return res.data
  }, error => {
  })

  return instance1(config)
}
