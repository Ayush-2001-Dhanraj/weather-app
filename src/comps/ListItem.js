import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ListItem = (props) => {
    const { dt_text, min, max, condition } = props;
    const { date, item, temp } = styles;
    return (
        <View style={item}>
            <Feather name="sun" size={50} color="white" />
            <Text style={date}>{dt_text}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
    temp: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});

export default ListItem;
