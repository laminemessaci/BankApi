import axios from 'axios'
import { BASE_URL } from './../constants'

const api = axios.create({
  BASE_URL,
})

export default api
