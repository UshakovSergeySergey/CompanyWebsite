import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div id='map-office-label'>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 55.871203,
            lng: 37.658275
        },
        zoom: 17
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '500px', width: '100%' }}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={55.871203}
                        lng={37.658275}
                        text={'Наш офис'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export { Map };
