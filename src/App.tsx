import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import RootNavigator from './modules/navigation/rootNavigator';

const App = () => {
  return (
    <SafeAreaProvider style={styles.area}>
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
});
