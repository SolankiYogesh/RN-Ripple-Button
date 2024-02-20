# Ripple Effect Using Reanimated
<div align="center">
<h2>Simple Ripple Effect Button</h2>

<img src="images/android.gif" width="300" />
<img src="images/ios.gif" width="300" />
</div>

## Installation

```sh
npm install rn-ripple-button

# or with yarn

yarn add rn-ripple-button
```

## Usage
>  Note that for iOS you have to try on real device

```js
import { RippleButton } from 'rn-ripple-button';

// ...

<RippleButton color="#8867E6">
  <Text>Press me</Text>
 </RippleButton>
```
```js
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

```
