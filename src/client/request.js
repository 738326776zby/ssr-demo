import axios from 'axios'
const instance = axios.create({
  baseURL: '/api',
  headers:{
    common:{
        utoken:'1e9154a7-e314-478e-8765-87aaefc52366'
    }
  }
})
export default instance
