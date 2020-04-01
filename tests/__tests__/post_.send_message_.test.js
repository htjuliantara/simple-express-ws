require('jest-extended')
const service = require('../services/message')

describe('Post Send Message API test', () => {
  test('Should return 200', async () => {
    const response = await service.sendMessage({ message: 'Hello World'})
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeObject()
    expect(response.body).toContainKey('message')
  })
})
