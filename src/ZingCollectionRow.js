import React, { Component } from 'react';

class ZingCollectionRow extends Component {
    render() {
        return (<h4><i className="fa fa-list-ul"></i> <strong>{this.props.collection}</strong></h4>)
    }
}

export default ZingCollectionRow;
