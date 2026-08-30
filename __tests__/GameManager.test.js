const MoveVO = require('../models/valueobjects/MoveVO');
const RoundResultVO = require('../models/valueobjects/RoundResultVO');
const GameManager = require('../models/managers/GameManager');

describe('GameManager', () => {
  test('piedra vs piedra results in a tie', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('PIEDRA');
    const computerMove = new MoveVO('PIEDRA');
    // WHEN
    const winner = manager.determineWinner(playerMove, computerMove);
    // THEN
    expect(winner).toBe('EMPATE');
  });

  test('piedra vs papel results in computer winning', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('PIEDRA');
    const computerMove = new MoveVO('PAPEL');
    // WHEN
    const winner = manager.determineWinner(playerMove, computerMove);
    // THEN
    expect(winner).toBe('COMPUTADORA');
  });

  test('piedra vs tijeras results in player winning', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('PIEDRA');
    const computerMove = new MoveVO('TIJERAS');
    // WHEN
    const winner = manager.determineWinner(playerMove, computerMove);
    // THEN
    expect(winner).toBe('JUGADOR');
  });

  test('papel vs piedra results in player winning', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('PAPEL');
    const computerMove = new MoveVO('PIEDRA');
    // WHEN
    const winner = manager.determineWinner(playerMove, computerMove);
    // THEN
    expect(winner).toBe('JUGADOR');
  });

  test('papel vs papel results in a tie', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('PAPEL');
    const computerMove = new MoveVO('PAPEL');
    // WHEN
    const winner = manager.determineWinner(playerMove, computerMove);
    // THEN
    expect(winner).toBe('EMPATE');
  });

  test('papel vs tijeras results in computer winning', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('PAPEL');
    const computerMove = new MoveVO('TIJERAS');
    // WHEN
    const winner = manager.determineWinner(playerMove, computerMove);
    // THEN
    expect(winner).toBe('COMPUTADORA');
  });

  test('tijeras vs piedra results in computer winning', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('TIJERAS');
    const computerMove = new MoveVO('PIEDRA');
    // WHEN
    const winner = manager.determineWinner(playerMove, computerMove);
    // THEN
    expect(winner).toBe('COMPUTADORA');
  });

  test('tijeras vs papel results in player winning', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('TIJERAS');
    const computerMove = new MoveVO('PAPEL');
    // WHEN
    const winner = manager.determineWinner(playerMove, computerMove);
    // THEN
    expect(winner).toBe('JUGADOR');
  });

  test('tijeras vs tijeras results in a tie', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('TIJERAS');
    const computerMove = new MoveVO('TIJERAS');
    // WHEN
    const winner = manager.determineWinner(playerMove, computerMove);
    // THEN
    expect(winner).toBe('EMPATE');
  });

  test('playRound returns a RoundResultVO with both moves and the winner', () => {
    // GIVEN
    const manager = GameManager();
    const playerMove = new MoveVO('PIEDRA');
    const computerMove = new MoveVO('TIJERAS');
    // WHEN
    const result = manager.playRound(playerMove, computerMove);
    // THEN
    expect(result).toBeInstanceOf(RoundResultVO);
    expect(result.playerMove).toBe(playerMove);
    expect(result.computerMove).toBe(computerMove);
    expect(result.winner).toBe('JUGADOR');
  });

  test('getRandomMove always returns a valid MoveVO', () => {
    // GIVEN
    const manager = GameManager();
    // WHEN
    const move = manager.getRandomMove();
    // THEN
    expect(move).toBeInstanceOf(MoveVO);
    expect(GameManager.ALL_MOVES).toContain(move.type);
  });

  test('getRandomMove picks PIEDRA when Math.random returns the lowest value', () => {
    // GIVEN
    const manager = GameManager();
    const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0);
    // WHEN
    const move = manager.getRandomMove();
    // THEN
    expect(move.type).toBe('PIEDRA');
    randomSpy.mockRestore();
  });

  test('getRandomMove picks TIJERAS when Math.random returns the highest value', () => {
    // GIVEN
    const manager = GameManager();
    const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.999);
    // WHEN
    const move = manager.getRandomMove();
    // THEN
    expect(move.type).toBe('TIJERAS');
    randomSpy.mockRestore();
  });

  test('isMatchOver returns false when no score reached the winning score', () => {
    // GIVEN
    const manager = GameManager();
    // WHEN
    const isOver = manager.isMatchOver(2, 3, 5);
    // THEN
    expect(isOver).toBe(false);
  });

  test('isMatchOver returns true when the player reached the winning score', () => {
    // GIVEN
    const manager = GameManager();
    // WHEN
    const isOver = manager.isMatchOver(5, 3, 5);
    // THEN
    expect(isOver).toBe(true);
  });

  test('isMatchOver returns true when the computer reached the winning score', () => {
    // GIVEN
    const manager = GameManager();
    // WHEN
    const isOver = manager.isMatchOver(3, 5, 5);
    // THEN
    expect(isOver).toBe(true);
  });

  test('getMatchWinner returns JUGADOR when the player has the higher score', () => {
    // GIVEN
    const manager = GameManager();
    // WHEN
    const winner = manager.getMatchWinner(5, 3);
    // THEN
    expect(winner).toBe('JUGADOR');
  });

  test('getMatchWinner returns COMPUTADORA when the computer has the higher score', () => {
    // GIVEN
    const manager = GameManager();
    // WHEN
    const winner = manager.getMatchWinner(3, 5);
    // THEN
    expect(winner).toBe('COMPUTADORA');
  });

  test('getMatchWinner returns null when the scores are tied', () => {
    // GIVEN
    const manager = GameManager();
    // WHEN
    const winner = manager.getMatchWinner(4, 4);
    // THEN
    expect(winner).toBe(null);
  });
});