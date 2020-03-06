import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import loadingGif from '../assets/loading.gif';

export default () => (
  <View style={styles.container}>
    <Image source={loadingGif} style={styles.loader} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loader: {
    width: 150,
    height: 150
  }
});
