
export const saveGameToStorage = ({ newBoard, newTurn }) => {
    // GUARDAR PARTIDA
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
}

export const resetGameStorage = () => {
    // RESETEAR LA PARTIDA DEL STORAGE
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
}