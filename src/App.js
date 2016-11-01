import React, { Component } from 'react';
import {
    Grid,
    Jumbotron
} from 'react-bootstrap';
import ZingNavbar from './ZingNavbar';
import ZINGS from './zings';
import FilterableZingTable from './FilterableZingTable';
import FontAwesome from 'react-fontawesome';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ZingNavbar />
                <Jumbotron />
                <Grid>
                    <div className="well clearfix">
                        <FilterableZingTable zings={ZINGS}/>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default App;
