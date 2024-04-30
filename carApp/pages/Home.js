import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  const navigateToCamera = () => {
    navigation.navigate('Camera');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/background.jpg')} style={styles.backgroundImage}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.choice} onPress={navigateToCamera}>
            <Text style={styles.choiceText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.choiceText}>Gallery</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choice: {
    width: '50%',
    marginBottom: 5,
    borderRadius: 4,
    marginTop: '10%',
    height: 155,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 80, 162)',
    borderWidth: 2,
    borderColor: 'rgb(255, 255, 255)',
  },
  choiceText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Home;
