import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useGameController from '../hooks/useGameController';
import MoveVO from '../models/valueobjects/MoveVO';
import MoveButton from '../components/MoveButton';
import ScoreBoard from '../components/ScoreBoard';
import ResultPill from '../components/ResultPill';
import MatchDialog from '../components/MatchDialog';

const ICONS = {
  [MoveVO.TYPES.PIEDRA]: require('../assets/icons/rock.png'),
  [MoveVO.TYPES.PAPEL]: require('../assets/icons/paper.png'),
  [MoveVO.TYPES.TIJERAS]: require('../assets/icons/scissors.png'),
};

const GameScreen = () => {
  const { playerScore, computerScore, lastResult, matchWinner, play, resetMatch } =
    useGameController();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piedra, Papel, Tijeras</Text>

      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />

      <View style={styles.board}>
        <View style={styles.topRow}>
          <MoveButton
            testID="piedraButton"
            icon={ICONS[MoveVO.TYPES.PIEDRA]}
            onPress={() => play(MoveVO.TYPES.PIEDRA)}
            style={styles.topButton}
          />
        </View>
        <View style={styles.bottomRow}>
          <MoveButton
            testID="papelButton"
            icon={ICONS[MoveVO.TYPES.PAPEL]}
            onPress={() => play(MoveVO.TYPES.PAPEL)}
          />
          <MoveButton
            testID="tijerasButton"
            icon={ICONS[MoveVO.TYPES.TIJERAS]}
            onPress={() => play(MoveVO.TYPES.TIJERAS)}
          />
        </View>
      </View>

      <View style={styles.resultWrapper}>
        <ResultPill winner={lastResult ? lastResult.winner : null} />
      </View>

      <MatchDialog
        visible={Boolean(matchWinner)}
        winner={matchWinner}
        playerScore={playerScore}
        computerScore={computerScore}
        onPlayAgain={resetMatch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f1f1f',
    textAlign: 'center',
    marginBottom: 24,
  },
  board: {
    marginBottom: 40,
  },
  topRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  topButton: {
    marginLeft: '25%',
    marginRight: '25%',
  },
  bottomRow: {
    flexDirection: 'row',
    gap: 12,
  },
  resultWrapper: {
    marginTop: 'auto',
    marginBottom: 40,
  },
});

export default GameScreen;
