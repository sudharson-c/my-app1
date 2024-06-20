import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PlanWithAi = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Plan Your Trip with AI✨</Text>
    </SafeAreaView>
  );
};

export default PlanWithAi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
