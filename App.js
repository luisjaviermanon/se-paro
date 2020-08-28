import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from 'expo-ui-kit';
import { NavigationContainer } from '@react-navigation/native';

import Drawer from './MyDrawer/MyDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
      {/* <Block center middle>
        <Text>Open up App.js to start working on your app!</Text>
     </Block> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
