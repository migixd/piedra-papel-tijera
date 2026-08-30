import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';
import GameScreen from './screens/GameScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <StatusBar style="light" />
        <Text style={styles.headerTitle}>PPT</Text>
        <GameScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 16,
    textAlign: 'left',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 18,
    backgroundColor: '#5005F2',
  },
});
