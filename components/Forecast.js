import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast(props) {
    return (
        <View style={styles.container1}>
            <Text style={styles.text1}>{props.main}</Text>
            <Text style={styles.text2}>{props.description}</Text>
            <View style={styles.container2}>
                <Text style={styles.text1}>{props.temp}</Text>
                <Text style={styles.text2}>°C</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        padding: 10,
        justifyContent: 'space-evenly',
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text1: {
        textAlign: 'center',
        padding: 10,
        fontSize: 24,
    },
    text2: {
        fontSize: 18,
    },
});