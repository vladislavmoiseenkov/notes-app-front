import axios from 'axios'
import store from '@/store'

export default () => {
  return axios.create({
    baseURL: 'https://notes-app-vue-server.herokuapp.com:8081',
    headers: {
      Authorization: `Bearer ${store.state.auth.token}`
    }
  })
}
