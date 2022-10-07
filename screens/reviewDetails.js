import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({route, navigation}) {
   const { title, body, rating } = route.params;
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.textTitle}>{JSON.stringify(title)}</Text>
            <Text style={globalStyles.textTitle}>{JSON.stringify(body)}</Text>
            <Text style={globalStyles.textTitle}>ReviewDetail Screen</Text>

        </View>
    )
}
