import shipFactory from '../shipFactory'

let object = {
    length: 5, 
    name: "Battleship",
    hull: [0,1,2,3,4],
}
test('Expect ship length and name and hull', () => {
    expect(shipFactory(5)).toMatchObject(object)
})
let hitThis = shipFactory(5)

let hitObject = {
    length: 5, 
    name: "Battleship",
    hull: [0,1,true,3,4]
}

test('expect hit to mark specified area as hit', () => {
    expect(hitThis.hit(2)).toMatchObject(hitObject)
})

let sunkObject = shipFactory(1)
let sunked = sunkObject.hit(0)
console.log(sunked)

test('expect sunk to false', () => {
    expect(hitThis.isSunk()).toBe(false)
})

test('expect sunk to be true', () => {
    expect(sunked.isSunk()).toBe(true)
})

