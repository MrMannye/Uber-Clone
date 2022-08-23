import React, { useEffect, useRef } from 'react';
import MapView, {Marker} from 'react-native-maps'
import tw from 'twrnc'
import { useSelector } from 'react-redux';
import { selectOrigin, selectDestination, settravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { useDispatch } from 'react-redux';

// CONFIGURACION DE APP.JSON PARA LA API DE GOOGLE MAPS COMO SI FUERA 
// "AndroidManifest.xml" DOCUMENTACION EN: "https://docs.expo.dev/versions/latest/config/app/"

export default function Map() {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination)
    const dispatch = useDispatch();
    const mapRef = useRef(null);

    useEffect(() => {
        if(!origin || !destination) return;
        
        // ZOOM AND FIT THE MARKERS
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top:50, right: 50, bottom: 50, left:50 }
        })
    },[origin, destination])

    useEffect(() => {
        if(!origin || !destination) return;

        const getTravelTime = async() => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=AIzaSyDQU68xEBvQyLcJZ-dGSRpa15M4e1kOMn0`)
            .then(response => response.json())
            .then(data => {
                dispatch(settravelTimeInformation(data.rows[0].elements[0]));
            })
        }
        getTravelTime();
    },[origin, destination])

    return (
        <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType="standard"
        showsMyLocationButton
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >   
        {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey='AIzaSyDQU68xEBvQyLcJZ-dGSRpa15M4e1kOMn0'
                    strokeColor="black"
                    strokeWidth={3}
                >
                </MapViewDirections>
            )}
            {origin?.location && (
                <Marker
                    coordinate = {{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Mi ubicación"
                    description={origin.description}
                    identifier='origin'
                >
                </Marker>
            )}
            {destination?.location && (
                <Marker
                    coordinate = {{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title="Destino"
                    description={destination.description}
                    identifier='destination'
                >
                </Marker>
            )}
        </MapView>
    );
}
