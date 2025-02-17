import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { BigbluebuttonMobile } from 'bigbluebutton-mobile-sdk';

export default function App() {
  return (
    <View style={styles.container}>
      <BigbluebuttonMobile
        url="https://mobile.bbb.imdt.dev"
        style={styles.bbb}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bbb: {
    marginTop: 48,
    flex: 1,
  },
});
