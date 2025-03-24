import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Эфир</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    color: '#8A2BE2',
    fontWeight: 'bold',
  },
});

export default LiveScreen; 