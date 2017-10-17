const request = require("supertest");
const app = require("../api.js");
const _ = require("lodash");
const expect = require("chai").expect;

describe('GET /v1/complaints', function() {
    it('return valid complaints', function(done) {
      request(app)
        .get('/v1/complaints?complaintId=1')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          expect(res.body.length).to.equal(1);
          complaint = res.body[0]
          expect(complaint.complaintId).to.equal(1);
          expect(complaint.companyId).to.be.a("number");
          expect(complaint.stateId).to.be.a("number");
          expect(complaint.issueId).to.be.a("number");
          expect(complaint.productId).to.be.a("number");
          expect(complaint.timely).to.be.a("boolean");
          expect(complaint.disputed).to.be.a("boolean");
          expect(complaint.narrative).to.be.a("string");
          expect(complaint.publicResponse).to.be.a("string");
          done();
        });
    });
});