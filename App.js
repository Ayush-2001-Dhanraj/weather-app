import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/tabs';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading)
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={'large'} color={'blue'} />
            </View>
        );

    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

export default App;
