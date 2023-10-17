import React from 'react';
import {
    FlatList,
    Text,
    SafeAreaView,
    StyleSheet,
    ImageBackground
} from 'react-native';
import ListItem from '../comps/ListItem';

const UpcomingWeather = ({ weatherData }) => {
    const renderItems = ({ item }) => (
        <ListItem
            dt_text={item.dt_txt}
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
                <FlatList data={weatherData} renderItem={renderItems} />
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
