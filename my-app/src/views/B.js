import React, { Component } from 'react';

class B extends Component {
    render() {
        return (
            <div>
                B页面
                {this.props.location.query.id}
            </div>
        );
    }
}

export default B;