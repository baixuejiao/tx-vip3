function setLoginAction(){
    return {
        type:'SET_LOGIN'
    }
}
function setInfoAction(data){
    console.log('action---',data)
    return {
        type:'SET_INFO',
        data
    }
}

export {
    setLoginAction,
    setInfoAction
}