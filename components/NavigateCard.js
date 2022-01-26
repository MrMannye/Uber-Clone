import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'

import NavFavourites from './NavFavourites';

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
                        debounce={10}
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
                <NavFavourites/>
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-8 mt-auto border-gray-200`}>
                <TouchableOpacity
                onPress={() => navigation.navigate("RideOptionsCard")}
                style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name='car' type='font-awesome' color="white" size={16}></Icon>
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => navigation.navigate("RideOptionsCard")}
                style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name='fast-food-outline' type='ionicon' color="black" size={16}></Icon>
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 6, 
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 17,
    },
    textInputContainer: {
        paddingHorizontal: 20, 
        paddingBottom: 0,
    }
})