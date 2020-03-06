import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const PhotoItem = (props) => {
  const { photo, navigate } = props;

  return (

    <View style={styles.item}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigate('Photo', { photo: photo.urls.full })}
      >
        <Image
          source={{ uri: photo.urls.small, cache: 'only-if-cached' }}
          style={styles.itemImage}
        />
      </TouchableOpacity>
      <Text style={styles.itemText}>By: {photo.user.username}</Text>
      <Text style={styles.itemText}>{photo.description ? photo.description : 'No desc'}</Text>
    </View>
  );
};

const optimalWidth = (Dimensions.get('window').width / 3) - 10;
const optimalHeight = (Dimensions.get('window').height / 5) - 20;

const styles = StyleSheet.create({
  item: {
    maxWidth: optimalWidth,
    marginBottom: 10,
    marginHorizontal: 4,
    paddingHorizontal: 7,
    borderColor: '#dadada',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
  },
  itemImage: {
    width: optimalWidth,
    height: optimalHeight,
    alignSelf: 'center'
  },
  itemText: {
    marginBottom: 5
  }
});

export const photoProps = PropTypes.shape({
  id: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string
  }),
  urls: PropTypes.shape({
    raw: PropTypes.string,
    full: PropTypes.string,
    small: PropTypes.string
  })
});

PhotoItem.propTypes = {
  photo: photoProps.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default PhotoItem;
