/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import React from 'react';


const App: () => React$Node = () => {
  return <Routes />;
};

export default App;
