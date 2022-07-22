function shipFactory(int){
  let ship = Object.create(shipActions)
  ship.length = int
  ship.name = ship.getName(int)
  ship.hull = Array.from(Array(int).keys())
  return ship
}

let shipActions = {
    getName(int){
         // eslint-disable-next-line default-case
         switch(int){
            case 1:
                return "test"
            case 2:
                return "Destroyer"
            case 3: 
                return "Submarine"
            case 4: 
                return "Cruiser"
            case 5: 
                return "Battleship"
        }
    },
    hit(int){
     this.hull = this.hull.map(item => item === int ? true : item)
     return this
    },
    isSunk(){
       const result = this.hull.every(element => {
        if(element === true){
            return true
        } else {
            return false
        }
       })
       return result 
    }
}

export default shipFactory