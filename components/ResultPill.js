import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LABELS = {
  JUGADOR: 'R: JUGADOR',
  COMPUTADORA: 'R: COMPUTADORA',
  EMPATE: 'R: EMPATE',
};

const ResultPill = ({ winner }) => (
  <View style={styles.pill}>
    <Text testID="resultLabel" style={styles.text}>
      {winner ? LABELS[winner] : 'R: -'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  pill: {
    alignSelf: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    letterSpacing: 0.5,
  },
});

export default ResultPill;
