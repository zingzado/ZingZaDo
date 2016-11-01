import React, { Component } from 'react';

class ZingRow extends Component {
    render() {
        const {zing} = this.props;
        const {url, title, startDate, endDate, startTime, endTime, location} = zing;
        return (
            <div className="col-md-12">
                <div className="caption thumbnail">
                    <h4>{title}</h4>
                    <p><a href={url}>{url}</a></p>
                    <p><i className="fa fa-calendar"></i> {startDate} - {endDate}</p>
                    <p><i className="fa fa-clock-o"></i> {startTime} - {endTime}</p>
                    <p><i className="fa fa-map-marker"></i> {location}</p>

                </div>
            </div>
        );
    }
}

export default ZingRow;
