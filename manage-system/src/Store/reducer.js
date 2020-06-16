function reducer(state= {},action){
    switch(action.type){
        case 'SET_LOGIN':
            return Object.assign({},state,{
                isLogin:!state.isLogin
            });
        case 'SET_INFO':
            return Object.assign({},state,{
                userInfo:action.data
            })
        default: return state
    }
}

export default reducer;