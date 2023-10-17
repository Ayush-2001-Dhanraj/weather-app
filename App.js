import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/tabs';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { API_KEY } from '@env';

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [errroMessage, setErrorMsg] = useState(null);
    const [weatherData, setweatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
            console.log(long);
            console.log(lat);
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`
            );
            const data = await res.json();
            console.log(data);
            setweatherData(data);
            console.log('done');
        } catch (error) {
            console.log(error);

            setErrorMsg('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, [long, lat]);

    useEffect(() => {
        console.log('weatherData', weatherData);
    }, [weatherData]);

    useEffect(() => {
        console.log('Hi');
        console.log('API_KEY', API_KEY);
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
            setLat(location.coords.latitude);
            setLong(location.coords.longitude);
        })();
    }, []);

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
