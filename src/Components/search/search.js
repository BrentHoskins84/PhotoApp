import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

//Components
import SearchIcon from './search-icon';

// Search Filter
import inputFilter from './filter';

//API
import { useGetUnixWordsQuery } from '../../Redux/ApiSlices/unixWordsSlice';

const Search = (props) => {
  const [inputText, setInputText] = useState();
  const { data: words } = useGetUnixWordsQuery();

  const _searchUnsplash = () => {
    const filterText = inputFilter({ inputText, words });
    setInputText(filterText);
    props.onPress?.(filterText);
  };

  return (
    <View style={StyleSheet.searchForm}>
      <Input
        containerStyle={StyleSheet.searchInput}
        placeholder="Search UnSplash"
        value={inputText}
        onChangeText={(value) => setInputText(value)}
      />
      <Button
        title="Search"
        icon={<SearchIcon />}
        iconRight
        loading={false}
        titleStyle={{ fontWeight: '700', textTransform: 'uppercase' }}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
          marginHorizontal: 10,
        }}
        containerStyle={styles.searchBtn}
        onPress={() => _searchUnsplash()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    width: '100%',
  },
  searchBtn: {
    height: 50,
  },
});

export default Search;
