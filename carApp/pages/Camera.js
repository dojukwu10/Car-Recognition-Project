import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

function Camera() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.choice}>
        <Text>Coolio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choice: {
    backgroundColor: 'rgb(255, 80, 162)',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgb(255, 255, 255)',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Camera;
