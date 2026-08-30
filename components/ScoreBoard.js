import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScoreBoard = ({ playerScore, computerScore }) => (
  <View style={styles.row}>
    <View style={styles.column}>
      <Text style={styles.label}>Jugador</Text>
      <Text testID="playerScore" style={styles.score}>
        {playerScore}
      </Text>
      <View style={styles.underline} />
    </View>
    <View style={styles.column}>
      <Text style={styles.label}>Computadora</Text>
      <Text testID="computerScore" style={styles.score}>
        {computerScore}
      </Text>
      <View style={styles.underline} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  column: {
    alignItems: 'center',
    minWidth: 120,
  },
  label: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 6,
  },
  score: {
    fontSize: 22,
    color: '#8a8a8a',
    marginBottom: 6,
  },
  underline: {
    height: 1,
    width: '100%',
    backgroundColor: '#d0d0d0',
  },
});

export default ScoreBoard;
