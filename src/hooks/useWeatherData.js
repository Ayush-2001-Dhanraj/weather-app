import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { API_KEY } from '@env';

export default function useGetWeatherData() {
    const [isLoading, setIsLoading] = useState(true);
    const [errroMessage, setErrorMsg] = useState(null);
    const [weatherData, setweatherData] = useState(null);

    const fetchWeatherData = async (location) => {
        const { latitude, longitude } = location.coords;

        try {
            const res = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );
            const data = await res.json();
            setweatherData(data);
        } catch (error) {
            setErrorMsg('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            fetchWeatherData(location);
        })();
    }, [Location]);

    return [isLoading, errroMessage, weatherData];
}
