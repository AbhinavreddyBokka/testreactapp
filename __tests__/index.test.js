const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return the MESSAGE from env', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe(process.env.MESSAGE || 'Hello World');
  });
});
