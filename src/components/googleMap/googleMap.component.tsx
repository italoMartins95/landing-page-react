import './googleMap.component.scss';
import markerIcon from './../../images/icons/marker.icon.svg'
import { useState, useEffect } from 'react';

import { GoogleMap, Marker } from '@react-google-maps/api';
import { IGoogleMaps } from '../../interfaces/googleMaps.interface';

function GoogleMaps(props: IGoogleMaps){
    const [positionMarker, setPositionMarker] = useState<google.maps.LatLng>(new google.maps.LatLng(
        props.lat,
        props.lng       
    ));

    const geocoder: google.maps.Geocoder = new google.maps.Geocoder();

    const findCoordinates = async () =>{
        await geocoder.geocode({ address: props.street }, async (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results) {
                setPositionMarker(new google.maps.LatLng(
                    results[0].geometry.location.lat(),
                    results[0].geometry.location.lng()       
                ))
            }
        });
    }
    
    const options: google.maps.MapOptions = {
        styles: [
            {
                featureType: "poi",
                stylers: [
                    { visibility: "off" }
                ]
            },
            {
                featureType: 'transit.station.bus',
                stylers: [
                    { visibility: 'off' }
                ],
            }
        ],
        mapTypeControl: false
    }  
    
    return (
        <GoogleMap mapContainerStyle={{
                        height: '100%',
                        width: '100%'
                   }}
                   center={positionMarker}
                   zoom={16}
                   options={options}
        >
            <Marker position={positionMarker}
                    animation={google.maps.Animation.DROP}
                    icon={markerIcon}
                    draggable={props.draggable}
            />
        </GoogleMap>
    )
}

export default GoogleMaps;