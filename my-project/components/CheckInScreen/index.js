import React from "react";
import { StyleSheet ,View, Text } from 'react-native';
import { hotelServices } from "../../src/services/hotelServices";
import { AppButton } from "../AppButton";

import Scanner from "../Scanner";

export function CheckInScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Check-In</Text>
        <Scanner type="checkin"/>
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

  
  