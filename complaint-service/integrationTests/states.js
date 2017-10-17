const request = require("supertest");
const app = require("../api.js");
const _ = require("lodash");
const expect = require("chai").expect;

describe('GET /v1/states', function() {
    it('return valid states', function(done) {
      request(app)
        .get('/v1/states')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          _.each(res.body, (state)=>{
            expect(state.id).to.be.a("number");
            expect(state.name).to.be.a("string");
            expect(state.abbreviation).to.be.a("string");
          })
          done();
        });
    });
});