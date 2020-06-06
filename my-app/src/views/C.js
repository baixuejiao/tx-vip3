import React, { Component } from 'react';
import {
    Prompt
} from 'react-router-dom';
class C extends Component {
    constructor(){
        super()
        this.state = {
            num:1
        }
    }
    render() {
        return (
            <div>
                C页面
                {this.props.location.state.id}
                <Prompt when={this.state.num == 1} message="确定跳转吗？"></Prompt>
            </div>
        );
    }
}

export default C;