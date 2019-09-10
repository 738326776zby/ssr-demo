import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://posting-api.jiedaibao.com',
  headers:{
    common:{
        utoken:'1f0fa93c-e05b-4b8b-af01-d0bcf3fd2df4'
    }
  }
})
export default instance
