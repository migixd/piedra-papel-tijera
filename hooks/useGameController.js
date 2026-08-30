import { useState } from 'react';
import GameManager from '../models/managers/GameManager';
import MoveVO from '../models/valueobjects/MoveVO';

const useGameController = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [lastResult, setLastResult] = useState(null);
  const [matchWinner, setMatchWinner] = useState(null);
  const manager = GameManager();

  const play = (moveType) => {
    if (matchWinner) {
      return;
    }

    const playerMove = new MoveVO(moveType);
    const computerMove = manager.getRandomMove();
    const result = manager.playRound(playerMove, computerMove);
    const updatedScores = manager.applyRoundResult(playerScore, computerScore, result);

    setPlayerScore(updatedScores.playerScore);
    setComputerScore(updatedScores.computerScore);
    setLastResult(result);

    if (manager.isMatchOver(updatedScores.playerScore, updatedScores.computerScore)) {
      setMatchWinner(manager.getMatchWinner(updatedScores.playerScore, updatedScores.computerScore));
    }
  };

  const resetMatch = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setLastResult(null);
    setMatchWinner(null);
  };

  return {
    playerScore,
    computerScore,
    lastResult,
    matchWinner,
    winningScore: GameManager.WINNING_SCORE,
    play,
    resetMatch,
  };
};

export default useGameController;
