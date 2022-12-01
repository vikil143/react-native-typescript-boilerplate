/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootContext} from '@myapp/context';
import {MainNavigator} from '@myapp/navigation';

const App = () => {
    return (
        <GestureHandlerRootView style={[styles.container]}>
            <SafeAreaView style={[styles.container]}>
                <RootContext>
                    <MainNavigator />
                </RootContext>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
