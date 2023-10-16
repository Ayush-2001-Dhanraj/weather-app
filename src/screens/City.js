import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.imageBG}
                source={require('../../assets/upcoming-background.jpg')}
            >
                <View style={styles.cityContainer}>
                    <Text style={[styles.state, styles.cityText]}>
                        Uttar Pradesh
                    </Text>
                    <Text style={[styles.country, styles.cityText]}>India</Text>
                </View>
                <View style={styles.populationWrapper}>
                    <Feather name="user" size={50} />
                    <Text style={styles.populationCount}>180000</Text>
                </View>
                <View style={styles.sunWrapper}>
                    <View style={styles.sun}>
                        <Feather name="sunrise" color="white" size={25} />
                        <Text style={styles.sunText}>10:46:58 am</Text>
                    </View>
                    <View style={styles.sun}>
                        <Feather name="sunset" color="white" size={25} />
                        <Text style={styles.sunText}>17:46:58 pm</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },
    imageBG: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cityContainer: {
        alignItems: 'center',
        marginBottom: 20
    },
    state: {
        fontSize: 50
    },
    country: {
        fontSize: 25
    },
    cityText: {
        color: 'white',
        fontWeight: 'bold'
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    populationCount: {
        fontSize: 20
    },
    sunWrapper: {
        flexDirection: 'row'
    },
    sun: {
        flex: 1,
        alignItems: 'center'
    },
    sunText: {
        color: 'white',
        fontSize: 18
    }
});

export default City;
