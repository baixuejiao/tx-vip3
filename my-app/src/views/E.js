import React, { Component } from 'react';
// props  history  match location 
class E extends Component {
    render() {
        return (
            <div>
                E页面 编程式导航
                <button onClick={() => {
                    // console.log(this.props)
                    this.props.history.push('/')
                }
                }>首页</button>
            </div>
        );
    }
}

export default E;