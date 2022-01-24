import { View, Text } from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps'
import tw from 'twrnc'

// CONFIGURACION DE APP.JSON PARA LA API DE GOOGLE MAPS COMO SI FUERA 
// "AndroidManifest.xml" DOCUMENTACION EN: "https://docs.expo.dev/versions/latest/config/app/"

export default function Map() {
    return (
        <MapView
        style={tw`flex-1`}
        mapType="standard"
        showsMyLocationButton
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            <Marker
                coordinate = {{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
                title="Mi ubicación"
                description='San Diego'
                identifier='origin'
            >
            </Marker>
        </MapView>
    );
}
