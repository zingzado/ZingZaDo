import React, { Component } from 'react';
import ZingTable from './ZingTable';

class FilterableZingTable extends Component {
    render() {
        return (
            <div>
                <ZingTable zings={this.props.zings} />
            </div>

        );
    }
}

export default FilterableZingTable;
