import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/tabs';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import useGetWeatherData from './src/hooks/useWeatherData';
import ErrorItem from './src/comps/ErrorItem';

const App = () => {
    const [isLoading, errroMessage, weatherData] = useGetWeatherData();

    if (weatherData && weatherData.list && !isLoading)
        return (
            <NavigationContainer>
                <Tabs weatherData={weatherData} />
            </NavigationContainer>
        );

    return (
        <View style={styles.loadingContainer}>
            {errroMessage ? (
                <ErrorItem />
            ) : (
                <ActivityIndicator size={'large'} color={'blue'} />
            )}
        </View>
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
