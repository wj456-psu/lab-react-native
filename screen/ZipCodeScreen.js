import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ImageBackground, StatusBar, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Yala', code: '90210' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
];
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {navigation.navigate('Weather', {zipPlace: place, zipCode: code})}}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
);
const _keyExtractor = item => item.code;

export default function ZipCodeScreen() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigation={navigation}/>} 
                />
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%',
    },
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        opacity: 0.6,
        marginHorizontal: 5,
        marginVertical: 5,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    zipPlace: {
        fontSize: 22,
    },
    zipCode: {
        fontSize: 22,
    },
})