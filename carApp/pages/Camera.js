import React, { useEffect, useState, useRef } from 'react';
import { View, Image, StyleSheet, Platform, Button } from 'react-native';
import { Camera } from 'expo-camera';
import CameraButton from '../Components/CameraButton';
import * as MediaLibrary from 'expo-media-library';

function CameraPage() {
  const [cameraRef, setCameraRef] = useState(null);
  const [hasCamPermission, setHasCamPermission] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCamPermission(cameraPermission.status === 'granted');

      if (Platform.OS === 'android') {
        const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
        setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
      } else {
        setHasMediaLibraryPermission(true); // Assume iOS has permission by default
      }
    })();
  }, []);

  const snapPhoto = async () => {
    if (cameraRef) {
      try {
        const photo = await cameraRef.takePictureAsync();
        saveToGallery(photo.uri);
      } catch (error) {
        console.log('Error taking picture:', error);
      }
    }
  };

  const saveToGallery = async (uri) => {
    try {
      const asset = await MediaLibrary.createAssetAsync(uri);
      setImageUri(asset.uri);
    } catch (error) {
      console.log('Error saving to gallery:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera 
        style={{ flex: 1 }} 
        type={Camera.Constants.Type.back} 
        ref={ref => setCameraRef(ref)}
      />
  
      <View  style={styles.buttonContainer}>
      <Button title="Take Picture" onPress={snapPhoto}  style={styles.button} />
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },

  buttonContainer: {
    height: 65,
    color:'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },


});

export default CameraPage;
