import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    // REVISAMOS TODAS LAS COMBINACIONES GANADORAS PARA SABER SI GANO X u O
    for( const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      )
      return boardToCheck[a]
    }
    return null
}

export const checkEndGame = (newBoard) => {
// REVISAMOS SI HAY EMPATE SI NO HAY ESPACIOS VACÍOS EN EL TABLERO
return newBoard.every((square) => square !== null)
}