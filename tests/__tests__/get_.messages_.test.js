require('jest-extended')
const service = require('../services/message')

describe('Get Messages API test', () => {

  test('Should return 200', async () => {
    const response = await service.fetchMessages()
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeArray()
  })
})
