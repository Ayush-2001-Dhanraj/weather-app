import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

function CurrentWeather() {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={styles.temp}>6</Text>
                <Text style={styles.feels}>Feels like 5</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.high}>High: 9</Text>
                    <Text style={styles.low}>Low: 2</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.description}>Its Sunny</Text>
                <Text style={styles.message}>Its perfect T-shirt weather</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink'
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
        fontSize: 40
    },
    message: {
        fontSize: 30
    }
});

export default CurrentWeather;
