import React, { Component } from 'react';
import ZingCollectionRow from './ZingCollectionRow';
import ZingRow from './ZingRow';

class ZingTable extends Component {
    render() {
        const rows = [];
        const {zings} = this.props;
        let lastCollection = null;

        zings.forEach(function(zing){
            if (zing.collection !== lastCollection){
                rows.push(<ZingCollectionRow collection={zing.collection} key={zing.collection} />);
            }
            rows.push(<ZingRow zing={zing} key={zing.title} />);
            lastCollection = zing.collection;
        });
        return(
            <div>
                {rows}
            </div>
        );
    }
}

export default ZingTable;
