import React, { useState , useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios'

export default function App() {
  const [ hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState("Not scanned yet")

  const askForCameraPermission = () => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted")
    })()
  }

  useEffect(() => {
    askForCameraPermission()
  },[])

  const handleBarCodeScanner = ({type, data}) =>{
    const user = "vinibilk4@gmail.com"
    
      axios.post('http://localhost:5432/reserve', { user })
      .then(response => {
        setData({data: response.data})
      }).catch(() => {
        console.log('Error retrieving data')
      })

    setScanned(true)
    setText(res.data)
    console.log("Type :" + type + "\nData :" + data)
  }

  if(hasPermission === null) {
    return(    
      <View style={styles.container}>
        <Text>Request for camera permission</Text>
      </View>)
  }

  if(hasPermission === false){
    return(
      <View style={styles.container}>
        <Text style={{margin: 10}}>No access to camera</Text>
       <Button title={"Allow Camera"} onPress={() => askForCameraPermission()}></Button>
      </View>
      )
  }

  

  return (
    <View style={styles.container}>
      <Button onPress={}></Button>
      <View style={styles.barcodebox}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
        style={{height: 400, width: 400}}/>
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {scanned && <Button title={"Scan Again?"} onPress={() => setScanned(false)} color={"tomato"}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});
