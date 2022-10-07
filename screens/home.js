import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] =  useState([
        {title: "Zelda, breathe of fresh air", rating: 5, body: "Lorium ipsum", key:1},
        {title: "Goota cathe them again", rating: 4, body: "Lorium ipsum", key:2},
        {title: "Not so final fantasy", rating: 3, body: "Lorium ipsum", key:3},

    ]);
   
    return (
        <View style={globalStyles.container}>
           {reviews && reviews.length > 0 ? reviews.map((item) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.textTitle} key={item.key}>{item.title}</Text>
                    </TouchableOpacity>
                )

            }): ""}
        </View>
    )
}
