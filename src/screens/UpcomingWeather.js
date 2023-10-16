import React from 'react';
import {
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    ImageBackground
} from 'react-native';
import ListItem from '../comps/ListItem';

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

const UpcomingWeather = () => {
    const renderItems = ({ item }) => (
        <ListItem
            dt_text={item.dt_text}
            min={item.main.temp_min}
            max={item.main.temp_max}
            condition={item.weather[0].main}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/upcoming-background.jpg')}
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
    image: { flex: 1, padding: 10 }
});

export default UpcomingWeather;
