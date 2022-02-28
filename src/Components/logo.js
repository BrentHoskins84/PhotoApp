import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';

const Logo = (props) => (
  <View style={{ height: 140, justifyContent: 'center', marginVertical: 30 }}>
    <Image source={require('../Images/3logo.jpg')} style={{ height: 140, width: '100%' }} />
    <Text style={{ textAlign: 'center' }}>Brent Hoskins</Text>
    <Text style={{ textAlign: 'center' }}>AppStem React Native Image Search</Text>
  </View>
);

export default Logo;
