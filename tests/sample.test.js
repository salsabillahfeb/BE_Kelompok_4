const app = require('./server')
const request = require('supertest')

let token = ''

describe('Sample Test', () => {
    test('should be 4', () => {
        expect(2+2).toBe(4)
    })

    test('Login', async () => {
        const res = await request(app).post('/api/login').send({
            email: "user@example.com",
            password: '12345'
        })
        
        expect(res.statusCode).toBe(200)
        //console.log(res)
        token = res.body.data.token
        console.log(token)
    })
})