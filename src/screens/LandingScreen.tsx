import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image, ImageBackground,} from 'react-native'

export const LandingScreen = () => {
    return (
        <ImageBackground
      source={require('../images/LandingScreen.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text></Text>
      </View>
    </ImageBackground>
)}

const styles = StyleSheet.create({ 
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' if you want to stretch the image
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // Add additional styling for your page content if needed
      },
})
