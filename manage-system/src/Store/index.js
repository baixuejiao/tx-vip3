import {createStore} from 'redux'
import reducer from './reducer'
let state = {
    isLogin:false,//记录用户登录状态
    userInfo:{
        name:'',
        image:''
    }
}
let store = createStore(reducer,state);
export default store;