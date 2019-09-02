import axios from 'axios'
const instance = axios.create({
  baseURL: '/api',
  headers:{
    common:{
        utoken:'d879784e-ac04-4277-9054-16596caa464d'
    }
  }
})
export default instance
