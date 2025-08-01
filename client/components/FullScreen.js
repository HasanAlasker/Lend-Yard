import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../client/config/AppText'

function FullScreen({children}) {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
})

export default FullScreen;