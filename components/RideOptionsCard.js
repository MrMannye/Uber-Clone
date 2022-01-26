import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selecttravelTimeInformation } from '../slices/navSlice';

export default function RideOptionsCard() {

    const navigation = useNavigation();
    const travelTimeInformation = useSelector(selecttravelTimeInformation);
    const [selected, setSelected] = useState(null);

    const DATA = [
        {
            id: 'Uber-X-123',
            title: 'UberX',
            multiplier: 1,
            image: 'https://links.papareact.com/3pn',
        },
        {
            id: 'Uber-X-456',
            title: 'Uber XL',
            multiplier: 1.25,
            image: 'https://links.papareact.com/5w8',
        },
        {
            id: 'Uber-X-789',
            title: 'Uber LUX',
            multiplier: 1.75,
            image: 'https://links.papareact.com/7pf',
        }
    ]

    const SURGE_CHARGE_RATE = 1.5;

    return (    
        <SafeAreaView style={tw`bg-white flex-grow mt-2`}>
            <View>
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate("NavigateCard")
                }}
                style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
                    <Icon name='chevron-left' type='fontawesome'/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 pb-6 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>

            <FlatList
                style={tw`-mt-4 mr-2 -ml-2`}
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                    onPress={() => {
                        setSelected(item)
                    }}
                    style={tw`flex-row justify-between px-10 items-center -my-[5px] ${item.id === selected?.id && 'bg-gray-200'}`}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                marginTop: -5,
                                resizeMode: "contain"
                            }}
                            source={{uri: item.image}}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                            <Text>{travelTimeInformation?.duration?.text} Time</Text>
                        </View>
                        <Text style={tw`text-lg`}>${
                            // new Intl.NumberFormat('en-gb', {
                            //     style: "currency",
                            //     currency: 'GBP'
                            // }).format(
                                ((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * item.multiplier) / 100).toFixed(2)
                            // )
                        }</Text>
                    </TouchableOpacity>
                )}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity 
                    // onPress={() => {
                    //     navigation.navigate("NavigateCard")
                    // }}
                    disabled={!selected}
                    style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
                >
                    {/* <Icon name='chevron-left' type='fontawesome'/> */}
                    <Text style={tw`text-center text-white text-lg`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
