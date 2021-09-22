import React from "react";
import { StyleSheet,View, Text } from 'react-native';
import { AppButton } from "../AppButton";

import Scanner from "../Scanner";


export function CheckOutScreen({navigation}) {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Check-Out</Text>
        <Scanner type="checkout"/>
        <AppButton title="Go Back" onPress={() => navigation.goBack()}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 50
    },
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'space-evenly' 
    }
  })

  