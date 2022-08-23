import { View, SafeAreaView, Image } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MotiView, MotiText } from 'moti'

// VARIABLES DE ENTORNO
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <MotiView
                    from={{translateX: 0}}
                    animate={{translateX: 5}}
                    transition={{
                        repeatReverse: true,
                        type: 'timing',
                        duration: 2000
                    }}
                >
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
                </MotiView>
                    <GooglePlacesAutocomplete
                        placeholder='Where From ?'
                        styles={{
                            container: {
                                flex: 0,
                            },
                            textInput: {
                                fontSize: 18,
                            }
                        }}
                        onPress={(data, details = null) => {
                            dispatch(setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            dispatch(setDestination(null))
                        }}
                        query={{
                            key: 'AIzaSyDQU68xEBvQyLcJZ-dGSRpa15M4e1kOMn0',
                            language: 'en',
                        }}
                        minLength={2}
                        fetchDetails={true}
                        onFail={error => console.log(error)}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={10}
                    />
                <NavOptions/>
                <NavFavourites/>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
