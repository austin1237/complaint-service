const request = require("supertest");
const app = require("../api.js");
const _ = require("lodash");
const expect = require("chai").expect;

describe('GET /products', function() {
    it('return valid products', function(done) {
      request(app)
        .get('/products')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          _.each(res.body, (product)=>{
            expect(product.productId).to.be.a("number");
            expect(product.name).to.be.a("string");
          })
          done();
        });
    });
});

describe('GET /products/totals', function() {
  it('return valid totals', function(done) {
    request(app)
      .get('/products/totals')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        _.each(res.body, (total)=>{
          expect(total.productId).to.be.a("number");
          expect(total.total).to.be.a("number");
        })
        done();
      });
  });
})