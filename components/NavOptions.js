import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc'

export default function NavOptions() {

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

    return (
        <View>
            <FlatList
                data={DATA}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                        <View>
                            <Image
                                style={{ width: 120, height: 120, resizeMode: 'contain'}}
                                source={{uri: item.image}}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
