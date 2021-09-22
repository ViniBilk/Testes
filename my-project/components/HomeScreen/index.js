import React from "react";
import { Button, StyleSheet, View, Text } from 'react-native';
import { AppButton } from "../AppButton";

export function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <AppButton title="Check-in" onPress={() => navigation.navigate('Check-in')}/>
        <AppButton title="Check-Out" onPress={() => navigation.navigate('Check-Out')}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'space-evenly' 
    },
    title: {
      color: "black",
      fontSize: 50
    },
  });