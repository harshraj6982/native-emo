import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Header () {
    const openMenu = () => {
        // nagivation.openDrawer();
    }
    return (
        <View style={styles.header}>
            {/* <MaterialIcons name='menu' size={28} onPress={() => openMenu()} style={styles.icon} /> */}
            <View>
                <Text style={styles.headerText}>Gamezone</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16
    }
})
