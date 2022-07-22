import shipFactory from "./shipFactory"

function boardFactory() {
    let board = Object.create(boardActions)
    board.grid = board.createSpaces()
    return board
}

let boardActions = {
    ships : [5,4,3,2],
    placeShip(coor){
        while (this.ships.length > 0){

        }

    },
    recieveAttack(){
        console.log("attacked")
    },
    createSpaces() {
    let spaces = [];
    for(let x=0; x < 7; x++){
        const column = [];
        for(let y=0; y < 7; y++){
            let space = `${x}${y}`
            column.push(space);
        }
        spaces.push(column);
    }
    return spaces
    },
}

export default boardFactory

