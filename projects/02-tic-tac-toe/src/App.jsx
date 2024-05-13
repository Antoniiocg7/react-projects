import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  // NULL ES QUE NO HAY GANADOR, FALSE QUE HAY EMPATE
  const [winner, setWinner] = useState(null)


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  

  const updateBoard = (index) => {
    // NO ACTUALIZAR LA POSICIÓN SI YA TIENE ALGO
    if( board[index] || winner ) return

    // ACTUALIZAR EL TABLERO
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // CAMBIAR EL TURNO
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // COMPROBAR SI HAY GANADOR
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false) // EMPATE
    }
  }

  return (

    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <button onClick={resetGame}>Reset del Juego</button>

      <section className='game'>
        {
          board.map( (square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          } )
        }
      </section>

      <section className='turn'>
        <Square isSelected={ turn === TURNS.X }>
          {TURNS.X}
        </Square>
        <Square isSelected={ turn === TURNS.O }>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>

    </main>

  )
}

export default App
