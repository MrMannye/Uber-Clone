import { View, Text } from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps'
import tw from 'twrnc'
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

// CONFIGURACION DE APP.JSON PARA LA API DE GOOGLE MAPS COMO SI FUERA 
// "AndroidManifest.xml" DOCUMENTACION EN: "https://docs.expo.dev/versions/latest/config/app/"

export default function Map() {

    const origin = useSelector(selectOrigin);

    return (
        <MapView
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
        </MapView>
    );
}
