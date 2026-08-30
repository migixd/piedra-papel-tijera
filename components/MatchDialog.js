import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TITLES = {
  JUGADOR: '¡Ganaste la partida!',
  COMPUTADORA: 'La computadora ganó la partida',
};

const MatchDialog = ({ visible, winner, playerScore, computerScore, onPlayAgain }) => (
  <Modal visible={visible} transparent animationType="fade" onRequestClose={onPlayAgain}>
    <View style={styles.overlay}>
      <View testID="matchDialog" style={styles.card}>
        <Text style={styles.title}>{winner ? TITLES[winner] : ''}</Text>
        <Text style={styles.subtitle}>
          Marcador final: {playerScore} - {computerScore}
        </Text>
        <TouchableOpacity testID="playAgainButton" style={styles.button} onPress={onPlayAgain}>
          <Text style={styles.buttonText}>JUGAR DE NUEVO</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 24,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f1f1f',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#5a5a5a',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5005F2',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default MatchDialog;
