import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
// import CurrentWeather from './src/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <CurrentWeather /> */}
            {/* <UpcomingWeather /> */}
            <City />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: StatusBar.currentHeight }
});

export default App;
