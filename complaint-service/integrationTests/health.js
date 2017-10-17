const request = require("supertest");
const app = require("../api.js");
const _ = require("lodash");
const expect = require("chai").expect;

describe('GET /health', function() {
    it('return a 200', function(done) {
      request(app)
        .get('/health')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
});