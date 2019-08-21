import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://posting-api.jiedaibao.com',
  headers:{
    common:{
        utoken:'9fca6114-97e4-4dce-a424-6cfc835b65b6'
    }
  }
})
export default instance
