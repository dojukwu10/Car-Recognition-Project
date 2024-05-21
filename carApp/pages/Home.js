//import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import * as tf1 from '@tensorflow/tfjs';
import * as tfn from '@tensorflow/tfjs-react-native';
const model = await tfn.loadModel('./assets/tfjs_model');


const tf = require('@tensorflow/tfjs-node');

const imagePath = './images/2013-toyota-4runner-sr5-4x4-v6-suv-angular-front'; // Replace with your image path
const desiredWidth = 180;
const desiredHeight = 180;

async function preprocessImage() {
const image = await tf.node.decodeImage(imagePath);
 const resizedImage = tf.image.resizeBilinear(image, [desiredHeight, desiredWidth]);
 // You can normalize the pixel values if needed (e.g., between 0 and 1)
const preprocessedData = resizedImage.dataSync(); // Get the image data as a tensor
// Use the preprocessedData for your model prediction logic
console.log('Preprocessed image data:', preprocessedData);
const predictions = await model.predict(preprocessedData);

}

preprocessImage();/*
const predictions = await model.predict(inputData);



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
*/