import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Root from './root';
import { store } from '../Redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Provider store={store}>
        <Root />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
