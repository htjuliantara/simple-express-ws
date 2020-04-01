const supertest = require('supertest')
const request = supertest(`http://localhost:3000`)

module.exports = {
  sendMessage: async body => {
    const response = await request.post('/send')
      .send(body)
    return response
  },

  fetchMessages: async token => {
    const response = await request.get('/messages')
    return response
  }
}
