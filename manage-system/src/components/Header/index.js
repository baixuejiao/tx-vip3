import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLoginAction, setInfoAction } from './../../Store/action'
import { Button } from 'antd';
import axios from 'axios'
import './index.css';
// store中的state映射props
function mapStateToProps(state) {
    return {
        isLogin: state.isLogin,  //props.isLogin
        userInfo: state.userInfo
    };
}
// action映射props
function mapDispatchToProps(dispatch) {
    return {
        setLogin: () => {
            dispatch(setLoginAction())
        },
        setInfo: (data) => {
            dispatch(setInfoAction(data))
        }
    };
}

class index extends Component {
    constructor() {
        super();
        this.loginHandle = this.loginHandle.bind(this);
    }
    loginHandle() {
        // 发送登录请求 修改登录状态
        axios.get('http://www.qmtech.com/login').then(res => {
            // console.log(res.data);
            // 判断登录成功 修改登录状态
            if(res.data.errno*1 === 0){
                this.props.setLogin();
                this.props.setInfo(res.data.data);
            }else{
                console.log(res.data.errmsg);
            }
        }).catch(err => {
            console.log(err)
        })

    }
    render() {
        console.log(this.props);
        return (
            <div className="header">
                {
                    this.props.isLogin?(
                        <div>
                            <span>{this.props.userInfo.name}</span>
                            <img src={this.props.userInfo.image} />
                        </div>
                    ):(
                    <Button type="primary" onClick={this.loginHandle}>点击登录</Button>
                    )
                }
                
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);