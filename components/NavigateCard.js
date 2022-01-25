import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

export default function NavigateCard() {

    const dispatch = useDispatch();
    const navigation = useNavigation();


    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center pt-8 pb-2 text-xl`}>Good Moorning, Manu</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete 
                        styles={toInputBoxStyles}
                        placeholder='Where To?'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={100}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        minLength={2}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en"
                        }}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            navigation.navigate("RideOptionsCard");
                        }}
                    >
                    </GooglePlacesAutocomplete>
                </View>
            </View>
        </SafeAreaView>
    );
}

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 8, 
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20, 
        paddingBottom: 0,
    }
})