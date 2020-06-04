import React, { Component } from 'react';

class A extends Component {
    render() {
        return (
            <div>
                A页面
                {
                    this.props.match.params.id
                }
            </div>
        );
    }
}

export default A;