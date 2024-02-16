import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {RippleButton} from 'rn-ripple-button';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RippleButton color="#8867E6" style={styles.button}>
        <Text>App</Text>
      </RippleButton>
      <RippleButton color="red" style={styles.button}>
        <Text>App</Text>
      </RippleButton>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20,
  },
  button: {
    backgroundColor: '#9D7AFA',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 30,
    width: '80%',
  },
});
