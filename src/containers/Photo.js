import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const Photo = (props) => {
  const { route } = props;
  const { params } = route;
  const { photo } = params;

  return (
    <View>
      <Image source={{ uri: photo }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});

Photo.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      photo: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Photo;
