import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

export default function NavOptions() {

    const origin = useSelector(selectOrigin);
    const DATA = [
        {
            id: '123',
            title: 'Get a ride',
            image: 'https://links.papareact.com/3pn',
            screen: 'MapScreen'
        },
        {
            id: '456',
            title: 'Order Food',
            image: 'https://links.papareact.com/28w',
            screen: 'EatsScreen'
        }
    ]

    const navigation = useNavigation();

    return (
        <View>
            <FlatList
                data={DATA}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={tw`p-2 pl-6 pb-8 pt-2 bg-gray-200 m-2 w-40`}
                        onPress={() => navigation.navigate(item.screen)}
                        disabled={!origin}
                    >
                        <View style={tw`${!origin && "opacity-20"}`}>
                            <Image
                                style={{ width: 120, height: 120, resizeMode: 'contain'}}
                                source={{uri: item.image}}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                            <Icon 
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            type='antdesign' 
                            name='arrowright' color='white'/>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
