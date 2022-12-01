import {MainStackParams} from '@myapp/navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';

type MainStackNavigationFunction = StackNavigationProp<MainStackParams>;

interface MainStackNavigator {
    navigation: MainStackNavigationFunction;
}

export type {MainStackNavigator, MainStackNavigationFunction};
