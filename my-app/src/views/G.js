import React from 'react';
import {withRouter} from 'react-router-dom'

const G = (props) => {
    return (
        <div>
            G页面 子组件编程式导航
            <button onClick={()=>{
                // console.log(props)  //{}
                props.history.push('/')
            }}>首页</button>

            <button onClick={()=>{
               props.history.goBack();
            }}>上一页</button>
        </div>
    );
};

export default withRouter(G);