import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-f3cc9.firebaseio.com/'
})

export default instance
