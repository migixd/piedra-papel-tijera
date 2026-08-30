import { useState } from 'react';
import GameManager from '../models/managers/GameManager';
import MoveVO from '../models/valueobjects/MoveVO';

const WINNING_SCORE = 5;

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

    const updatedPlayerScore =
      result.winner === GameManager.WINNERS.JUGADOR ? playerScore + 1 : playerScore;
    const updatedComputerScore =
      result.winner === GameManager.WINNERS.COMPUTADORA ? computerScore + 1 : computerScore;

    setPlayerScore(updatedPlayerScore);
    setComputerScore(updatedComputerScore);
    setLastResult(result);

    if (manager.isMatchOver(updatedPlayerScore, updatedComputerScore, WINNING_SCORE)) {
      setMatchWinner(manager.getMatchWinner(updatedPlayerScore, updatedComputerScore));
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
    winningScore: WINNING_SCORE,
    play,
    resetMatch,
  };
};

export default useGameController;
