import React, { Component } from 'react';

class C extends Component {
    render() {
        return (
            <div>
                C页面
                {this.props.location.state.id}
            </div>
        );
    }
}

export default C;