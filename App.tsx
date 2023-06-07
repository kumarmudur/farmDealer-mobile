import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native Mobile App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3cee5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
