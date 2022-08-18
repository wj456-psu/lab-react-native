import React from "react";
import { View } from "react-native";
import Weather from "../components/Weather";

export default function WeatherScreen({route}) {
    return (
        <View>
            <Weather zipPlace={route.params.zipPlace} zipCode={route.params.zipCode} />
        </View>
    );
}