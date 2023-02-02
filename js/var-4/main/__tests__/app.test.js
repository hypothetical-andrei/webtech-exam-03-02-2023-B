const app = require('./../app')

const orderInfo0 = {total: 90, items: 10}
const position0 = 1
const orderInfo1 = {total: 90, items: [{price: 20, quantity: 3}, {pric: 10, quanty: 3}]}
const orderInfo2 = {total: 150, items: [{price: 20, quantity: 3}, {price: 15, quantity: 2}, {price: 10, quantity: 4}]}
const position1 = 6
const position2 = 1
const orderInfo3 = {total: 120, items: [{price: 10, quantity: 3}, {price: 15, quantity: 2}, {price: 10, quantity: 4}, {price: 5, quantity: 4}]}
const position3 = 2


describe('Testing removeOrderItem function', () => {
    test('items parameter should be an array', (done)=> {
        expect(() => {
            app.removeOrderItem(orderInfo0, position0)
        }).toThrowError('Items should be an array')
        done()
    })

    test('all items should have quantity and price property', (done) => {
        expect(() => {
            app.removeOrderItem(orderInfo1, position0)
        }).toThrowError('Malformed item')
        done()
    })

    test('invalid position should throw an error', (done) => {
        expect(() => {
            app.removeOrderItem(orderInfo2, position1)
        }).toThrowError('Invalid position')
        done()
    })

    test('should remove the element', () => {
        var output = app.removeOrderItem(orderInfo2, position2)
        expect(output.items.length).toBe(2)
    })

    test('should update order total', () => {
        var output = app.removeOrderItem(orderInfo3, position3)
        expect(output.total).toBe(80)
    })
    
});