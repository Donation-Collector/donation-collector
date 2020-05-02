import React, {Component} from 'react';

class ResidentEntry extends Component {
    render() {
        return (
            <div className="resident-entry-body">
                <a href="/resident/drop" className="btn btn-primary btn-lg btn-block" role="button" aria-pressed="true">See Nearby Drop-off Locations</a>
                <a href="/resident/nearbyNgo" className="btn btn-primary btn-lg btn-block" role="button" aria-pressed="true">Schedule a Pick-up Request</a>
            </div>
        );
    }
}

export default ResidentEntry;