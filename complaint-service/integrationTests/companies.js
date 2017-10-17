const request = require("supertest");
const app = require("../api.js");
const _ = require("lodash");
const expect = require("chai").expect;

describe('GET /v1/companies', function() {
    it('return valid states', function(done) {
      request(app)
        .get('/v1/companies')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          _.each(res.body, (company)=>{
            expect(company.companyId).to.be.a("number");
            expect(company.name).to.be.a("string");
          })
          done();
        });
    });
});