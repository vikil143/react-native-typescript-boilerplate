import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';
import {useLocaliztion} from '@myapp/hooks';
import {LoginScreen} from '@myapp/screens/login_flow';
import {MainStackNavigationFunction} from '@myapp/screens/types';
import {MainStackParams} from './types';

const MainStack = createStackNavigator<MainStackParams>();

const HomeScreen = () => {
    const t = useLocaliztion();
    return (
        <View>
            <Text>{t('hello')}</Text>
        </View>
    );
};

interface ScreenOptionsParams {
    route: RouteProp<MainStackParams>;
    navigation: MainStackNavigationFunction;
}

export default function MainNavigator() {
    const screenOptions = ({}: ScreenOptionsParams): StackNavigationOptions => {
        return {
            headerShown: false,
        };
    };

    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={screenOptions}>
                <MainStack.Group>
                    <MainStack.Screen name="Login" component={LoginScreen} />
                </MainStack.Group>
                <MainStack.Screen name="Home" component={HomeScreen} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}
