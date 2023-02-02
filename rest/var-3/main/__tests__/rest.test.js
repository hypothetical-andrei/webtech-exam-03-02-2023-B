const request = require('supertest');
const app = require('./../app');

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})
test('POST /device: If request body is empty server should respond with status code 400 and {"message": "bad request"}', (done) => {
    request(app).post('/device').send({}).expect(400).then(res => {
        expect(JSON.parse(res.text).message).toBe('bad request')
        done();
    })
})
test('POST /device: If request body contains price lower than 0 server should respond with status code 400 and {"message": "bad request"}', (done) => {
    request(app).post('/device').send({name: "Iphone X", price: -200}).expect(400).then(res => {
        expect(JSON.parse(res.text).message).toBe('bad request')
        done();
    })
})
test('POST /device: If request body contains name with length < 4 characters server should respond with status code 400 and {"message": "bad request"}', (done) => {
    request(app).post('/device').send({name: "asd", price: 200}).expect(400).then(res => {
        expect(JSON.parse(res.text).message).toBe('bad request')
        done();
    })
})

test('POST /device: If request body is valid, the device should be added in the database and server should respond with status code 201 and {"message": "device created"}', (done) => {
    request(app).post('/device').send({name: "Iphone X", price: 2001}).expect(201).then(res => {
        expect(JSON.parse(res.text).message).toBe('device created')
        request(app).get('/device').then(res => {
            expect(JSON.parse(res.text).length).toBe(11);
            done();
        })
    })
})

test('DELETE /device/:id: If id is valid the device should be deleted from the database', (done) => {
    request(app).delete('/device/7').expect(202).then(res => {
        expect(JSON.parse(res.text).message).toBe('device deleted')
        request(app).get('/device').then(res => {
            expect(JSON.parse(res.text)[7].id).toBe(9);
            expect(JSON.parse(res.text).length).toBe(10);
            done();
        })
    })
})
