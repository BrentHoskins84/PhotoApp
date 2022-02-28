import React, { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//Componets
import ImageGallery from '../Components/imageGallery';
import Logo from '../Components/logo';
import Search from '../Components/search/search';

const Root = () => {
  const [search, setSearch] = useState('random');

  const _ReloadData = useCallback((value) => {
    setSearch(value);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Search onPress={_ReloadData} />
      <ImageGallery search={search} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Root;
