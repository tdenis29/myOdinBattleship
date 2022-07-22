import boardFactory from './boardFactory'
import shipFactory from './shipFactory'

let match = boardFactory()

test('expect boardFactory to work', () => {
    expect(boardFactory()).toMatchObject(match)
})

