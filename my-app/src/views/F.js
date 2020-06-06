import React from 'react';

const F = (props) => {
    return (
        <div>
            F页  编程式导航 函数组件
            <button onClick={()=>{
                // console.log(props)
                props.history.push('/')
            }}>首页</button>
        </div>
    );
};

export default F;