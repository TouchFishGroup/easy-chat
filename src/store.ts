import { createStore,Commit } from 'vuex';
import axios from 'axios'
export interface UserProps {
  avatarImg?:string,
  name?:string,
  islogin:boolean
}
export interface GlobalDataProps {
  user:UserProps
}
const testdata =await axios.get('http://81.70.81.69:3000/auth')
const store = createStore<GlobalDataProps>({
  state:{
    user: {...testdata,islogin:true}
  },
  mutations: {
  },
  actions:{
  },
  getters:{
  }
})
// console.log(store.state.user)
export default store