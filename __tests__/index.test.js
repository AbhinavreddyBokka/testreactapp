const request = require('supertest');
const { app, server } = require('../index');

describe('GET /', () => {
  it('should return the MESSAGE from env and fail if MESSAGE is missing', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe(process.env.MESSAGE);  // NO fallback here
  });
});

afterAll(done => {
  if (server) {
    server.close(done);
  } else {
    done();
  }
});
