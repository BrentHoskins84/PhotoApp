import React, { useState } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import { Image, Overlay, Avatar } from 'react-native-elements';

//API
import { useSearchPhotoQuery } from '../Redux/ApiSlices/unsplashSlice';

// Components
import Loading from '../Components/loading';

const ImageGallery = (props) => {
  const { search } = props;
  const [visible, setVisible] = useState(false);
  const [overlayImageUri, setOverlayImageUri] = useState();
  const { data, error, isLoading, isFetching } = useSearchPhotoQuery(search);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const renderImage = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setOverlayImageUri(item.urls.regular);
          toggleOverlay();
        }}
      >
        <ImageBackground
          source={{ uri: item.urls.thumb }}
          resizeMode="cover"
          style={styles.galleryImage}
          imageStyle={{ borderRadius: 3 }}
        >
          <View style={styles.galleryDetails}>
            <Avatar rounded source={{ uri: item.user.profile_image.medium }} />
            <Text style={styles.galleryDetailsText}>{item.user.name}</Text>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading && isFetching ? (
        <Loading />
      ) : data ? (
        <View>
          <FlatList
            data={data.results}
            style={styles.gallery}
            horizontal={true}
            contentContainerStyle={{
              height: '100%',
              borderRadius: 5,
            }}
            keyExtractor={(photo) => photo.id}
            renderItem={renderImage}
          />

          <Overlay
            isVisible={visible}
            fullScreen
            overlayStyle={styles.overlay}
            onBackdropPress={toggleOverlay}
          >
            <ImageBackground
              source={{ uri: overlayImageUri }}
              resizeMode="cover"
              style={styles.overlayBackground}
              blurRadius={35}
            >
              <Image
                source={{ uri: overlayImageUri }}
                containerStyle={styles.overlayImage}
                PlaceholderContent={<ActivityIndicator />}
                onPress={() => toggleOverlay()}
              />
            </ImageBackground>
          </Overlay>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  gallery: {
    marginHorizontal: 10,
    borderRadius: 5,
  },
  galleryImage: {
    aspectRatio: 1,
    height: 450,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  galleryDetails: {
    marginHorizontal: 15,
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  galleryDetailsText: {
    marginLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  overlay: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlayBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  overlayImage: {
    height: 500,
    width: 300,
    borderRadius: 30,
  },
});

export default ImageGallery;
