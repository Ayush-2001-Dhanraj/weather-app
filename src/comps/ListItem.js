import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utility/weatherTypes';
import moment from 'moment';

const ListItem = (props) => {
    const { dt_text, min, max, condition } = props;
    const { date, item, temp } = styles;
    return (
        <View style={item}>
            <Feather
                name={weatherType[condition].icon}
                size={30}
                color="white"
            />
            <View>
                <Text style={date}>{moment(dt_text).format('dddd')}</Text>
                <Text style={date}>{moment(dt_text).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>
                {Math.round(min)}°/{Math.round(max)}°
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 3,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: '#000',
        shadowOpacity: 1.0,
        shadowRadius: 5,
        backgroundColor: '#000',
        borderRadius: 8
    },
    date: { color: 'white', fontSize: 16 },
    temp: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});

export default ListItem;
