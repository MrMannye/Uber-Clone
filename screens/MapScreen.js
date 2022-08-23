import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    return (
        <SafeAreaView>

            <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate('HomeScreen')}
                style={tw`absolute top-16 bg-gray-100 z-50 left-8 p-3 rounded-full shadow-lg`}>
                    <Icon name='menu'></Icon>
                </TouchableOpacity>
            </View>

            <View style={tw`h-1/2`}>
                <Map></Map>
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='NavigateCard'
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='RideOptionsCard'
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </SafeAreaView>
    );
};

export default MapScreen;
