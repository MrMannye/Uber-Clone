import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// VARIABLES DE ENTORNO
import { GOOGLE_MAPS_APIKEY } from '@env';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full mt-5`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 90, 
                        height: 80, 
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://links.papareact.com/gzs',
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where From ?'
                    neartyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />
                <NavOptions/>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
});
