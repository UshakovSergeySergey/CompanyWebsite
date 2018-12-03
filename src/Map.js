import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import { Address } from './InternalDataTypes/Address';

const AnyReactComponent = ({ text }) => <div id='map-office-label'>{text}</div>;

class Map extends Component {
    render() {
        const address = this.props.address;

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '500px', width: '100%' }}>
                <GoogleMapReact
                    defaultCenter={ { lat: address.Latitude, lng: address.Longitude } }
                    defaultZoom={address.Zoom}
                >
                    <AnyReactComponent
                        lat={address.Latitude}
                        lng={address.Longitude}
                        text={address.MapLabel}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

Map.propTypes = {
    address: PropTypes.instanceOf(Address)
};

export { Map };
