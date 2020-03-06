import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { photosGetList } from '../actions/photos';
import PhotoItem, { photoProps } from '../components/PhotoItem';
import Loading from '../components/Loading';

class PhotoList extends React.Component {
  componentDidMount() {
    const { getPhotos } = this.props;

    getPhotos();
  }

  render() {
    const { photos, navigation, loading, recived, getPhotos } = this.props;

    return (
      <View style={styles.container}>
        {loading ? <Loading /> : (
          <ScrollView contentContainerStyle={styles.gallery}>
            {photos.map((photo) => (
              <PhotoItem photo={photo} key={photo.id} navigate={navigation.navigate} />
            ))}
          </ScrollView>
        )}
        {!recived && Alert.alert(
          'Something went wrong',
          'Press OK to try again',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            { text: 'OK', onPress: () => getPhotos() },
          ],
          { cancelable: true },
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(photoProps).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  getPhotos: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  recived: PropTypes.bool.isRequired
};

const mapStateToProps = ({ photos }) => ({
  photos: photos.photos,
  loading: photos.photosLoading,
  recived: photos.recived
});

const mapDispatchToProps = (dispatch) => ({
  getPhotos: () => dispatch(photosGetList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    pure: false
  }
)(PhotoList);
