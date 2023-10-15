import React from 'react';

import { Text, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
});
