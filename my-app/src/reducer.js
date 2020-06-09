import {combineReducers} from 'redux'
let num = (state = 0,action) => {
    console.log(state,action);
    switch(action.type){
        case "ADD":
            return state + action.x;
        case "REDUCE":
            return state-action.x;
        default: return state;
    }
}

export default combineReducers({
    num
})


