import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Camera} from 'expo-camera'
import CameraButton from '../Components/CameraButton';


function CameraPage() {

  const [hasCamPermission, setHasCamPermission] = useState(null);
  useEffect(() => {
    (async () => {
      const camPermission = await Camera.requestCameraPermissionsAsync();
      setHasCamPermission(camPermission === 'granted');
  })();
}, [])


  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} >
      
      </Camera>  
      <View style={{backgroundColor: 'black'}}>
        <CameraButton/>
        </View>      
    </View>
  );
}

const styles = StyleSheet.create({
 
});

export default CameraPage;
