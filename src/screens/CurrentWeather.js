import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utility/weatherTypes';

function CurrentWeather({ weatherData }) {
    const {
        main: { temp: temperature, feels_like, temp_max, temp_min },
        weather
    } = weatherData;

    const weatherCondition = weather[0].main;

    return (
        <SafeAreaView
            style={[
                styles.wrapper,
                {
                    backgroundColor:
                        weatherType[weatherCondition].backgroundColor
                }
            ]}
        >
            <View style={styles.container}>
                <Feather
                    name={weatherType[weatherCondition].icon}
                    size={100}
                    color="white"
                />
                <Text style={styles.temp}>{temperature}°</Text>
                <Text style={styles.feels}>Feels like {feels_like}</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.high}>High: {temp_max}°</Text>
                    <Text style={styles.low}>Low: {temp_min}°</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.description}>{weather[0].description}</Text>
                <Text style={styles.message}>
                    {weatherType[weatherCondition].message}
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    temp: {
        fontSize: 48
    },
    feels: {
        fontSize: 30
    },
    highLowWrapper: {
        flexDirection: 'row',
        padding: 10
    },
    high: {
        flex: 1,
        textAlign: 'center'
    },
    low: {
        flex: 1,
        textAlign: 'center'
    },
    bottomContainer: {
        padding: 10
    },
    description: {
        fontSize: 30,
        textAlign: 'center'
    },
    message: {
        fontSize: 20,
        textAlign: 'center'
    }
});

export default CurrentWeather;
