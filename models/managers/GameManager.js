const MoveVO = require('../valueobjects/MoveVO');
const RoundResultVO = require('../valueobjects/RoundResultVO');

const WINNERS = Object.freeze({
  JUGADOR: 'JUGADOR',
  COMPUTADORA: 'COMPUTADORA',
  EMPATE: 'EMPATE',
});

const WINNING_SCORE = 5;

const ALL_MOVES = Object.values(MoveVO.TYPES);

const BEATS = Object.freeze({
  [MoveVO.TYPES.PIEDRA]: MoveVO.TYPES.TIJERAS,
  [MoveVO.TYPES.PAPEL]: MoveVO.TYPES.PIEDRA,
  [MoveVO.TYPES.TIJERAS]: MoveVO.TYPES.PAPEL,
});

const GameManager = () => {
  function getRandomMove() {
    const randomIndex = Math.floor(Math.random() * ALL_MOVES.length);
    return new MoveVO(ALL_MOVES[randomIndex]);
  }

  function determineWinner(playerMove, computerMove) {
    if (playerMove.type === computerMove.type) {
      return WINNERS.EMPATE;
    }

    if (BEATS[playerMove.type] === computerMove.type) {
      return WINNERS.JUGADOR;
    }

    return WINNERS.COMPUTADORA;
  }

  function playRound(playerMove, computerMove) {
    const winner = determineWinner(playerMove, computerMove);
    return new RoundResultVO(playerMove, computerMove, winner);
  }

  function applyRoundResult(playerScore, computerScore, roundResult) {
    if (roundResult.winner === WINNERS.JUGADOR) {
      return { playerScore: playerScore + 1, computerScore };
    }

    if (roundResult.winner === WINNERS.COMPUTADORA) {
      return { playerScore, computerScore: computerScore + 1 };
    }

    return { playerScore, computerScore };
  }

  function isMatchOver(playerScore, computerScore, winningScore = WINNING_SCORE) {
    return playerScore >= winningScore || computerScore >= winningScore;
  }

  function getMatchWinner(playerScore, computerScore) {
    if (playerScore === computerScore) {
      return null;
    }

    return playerScore > computerScore ? WINNERS.JUGADOR : WINNERS.COMPUTADORA;
  }

  return {
    getRandomMove,
    determineWinner,
    playRound,
    applyRoundResult,
    isMatchOver,
    getMatchWinner,
  };
};

GameManager.WINNERS = WINNERS;
GameManager.ALL_MOVES = ALL_MOVES;
GameManager.WINNING_SCORE = WINNING_SCORE;

module.exports = GameManager;
