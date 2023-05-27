
import React, { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import styles from './Styles';
import Square from './components/Square';


function App(): JSX.Element {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winnersArray, setWinnersArray] = useState(Array(3).fill(null));

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function reset() {
    setWinnersArray(Array(3).fill(null));
    setSquares(Array(9).fill(null));
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    if (winner === 'draw') {
      status = "Match is Draw";
    } else {
      // setWinnersArray(winner);
      status = "Winner: " + squares[winner[0]];
    }
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <StatusBar backgroundColor={"#ffffff"} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <Text style={[status.includes("Winner") ? styles.winnerTxt : status.includes("Draw") ? styles.drawTxt : styles.darkTxt]}>{status}</Text>
        <View style={styles.board}>
          <View style={styles.board_row}>
            <Square
              value={squares[0]}
              onSquareClick={() => handleClick(0)}
              style={[styles.square_top, styles.square_left, styles.square_bottom, styles.square_right]}
              isWinner={Array.isArray(winner) && winner.includes(0)}
            />
            <Square
              value={squares[1]}
              onSquareClick={() => handleClick(1)}
              style={[styles.square_left, styles.square_right, styles.square_bottom]}
              isWinner={Array.isArray(winner) && winner.includes(1)}
            />
            <Square
              value={squares[2]}
              onSquareClick={() => handleClick(2)}
              style={[styles.square_bottom, styles.square_left, styles.square_right]}
              isWinner={Array.isArray(winner) && winner.includes(2)}
            />
          </View>
          <View style={styles.board_row}>
            <Square
              value={squares[3]}
              onSquareClick={() => handleClick(3)}
              style={[styles.square_top, styles.square_bottom]}
              isWinner={Array.isArray(winner) && winner.includes(3)}
            />
            <Square
              value={squares[4]}
              onSquareClick={() => handleClick(4)}
              style={[styles.square_bottom]}
              isWinner={Array.isArray(winner) && winner.includes(4)}
            />
            <Square
              value={squares[5]}
              onSquareClick={() => handleClick(5)}
              style={[styles.square_bottom]}
              isWinner={Array.isArray(winner) && winner.includes(5)}
            />
          </View>
          <View style={styles.board_row}>
            <Square
              value={squares[6]}
              onSquareClick={() => handleClick(6)}
              style={[styles.square_top, styles.square_right, styles.square_left, styles.square_bottom]}
              isWinner={Array.isArray(winner) && winner.includes(6)}
            />
            <Square
              value={squares[7]}
              onSquareClick={() => handleClick(7)}
              style={[styles.square_right, styles.square_left, styles.square_bottom]}
              isWinner={Array.isArray(winner) && winner.includes(7)}
            />
            <Square
              value={squares[8]}
              onSquareClick={() => handleClick(8)}
              style={[styles.square_bottom, styles.square_right, styles.square_left]}
              isWinner={Array.isArray(winner) && winner.includes(8)}
            />
          </View>
        </View>
        <Pressable style={styles.reloadContainer} onPress={reset}>
          <Text style={styles.reloadTxt}>Reset</Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
}



export default App;


function calculateWinner(squares: any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  if (!squares.includes(null)) {
    return "draw";
  }
  return null;
}