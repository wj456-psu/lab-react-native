import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
    });
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text style={styles.text}>Zip Code is {props.zipCode}</Text>
            <Forecast {...forecastInfo} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 22,
    },
});