import React from 'react';
import {
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    ImageBackground
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const DATA = [
    {
        dt_text: '2023-02-18 12:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [{ main: 'Clear' }]
    },
    {
        dt_text: '2023-02-18 15:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [{ main: 'Clouds' }]
    },
    {
        dt_text: '2023-02-18 18:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [{ main: 'Rain' }]
    }
];

const Item = (props) => {
    const { dt_text, min, max, condition } = props;
    return (
        <View style={styles.item}>
            <Feather name="sun" size={50} color="white" />
            <Text style={styles.date}>{dt_text}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    );
};

const UpcomingWeather = () => {
    const renderItems = ({ item }) => (
        <Item
            dt_text={item.dt_text}
            min={item.main.temp_min}
            max={item.main.temp_max}
            condition={item.weather[0].main}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../assets/upcoming-background.jpg')}
                style={styles.image}
            >
                <Text>Upcoming weather</Text>
                <FlatList data={DATA} renderItem={renderItems} />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 3,
        backgroundColor: 'pink',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    date: { color: 'white', fontSize: 16 },
    temp: { color: 'white', fontSize: 16, fontWeight: 'bold' },
    image: { flex: 1, padding: 10 }
});

export default UpcomingWeather;
