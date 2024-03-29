import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements'
import tw from 'twrnc'

const NavFavourites = () => {

    const DATA = [
        {
            id: '123',
            icon: 'home',
            location: "Home",
            destination: 'Code Street, London, UK',
        },
        {
            id: '456',
            icon: 'briefcase',
            location: "Work",
            destination: 'London Eye, London, UK',
        }
    ]

    return (
        <View>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => (
                    <View
                        style={[tw`bg-gray-300`, {height: 0.5}]}
                    />
                )}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={tw`flex-row items-center p-5`}
                    >
                        <Icon
                            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                            name={item.icon}
                            type="ionicon"
                            color="white"
                            size={18}
                        />
                        <View>
                            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                            <Text style={tw`text-gray-500`}>{item.destination}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            >

            </FlatList>
        </View>
    );
};

export default NavFavourites;

