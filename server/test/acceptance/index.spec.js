const chai = require('chai');
const server = require('../../index');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

describe('API v1', () => {
  desribe('/GET feed', () => {
    it('should return 400 bad request when no url is specified', () => {
      chai.request(server)
        .get('/v1/feed')
        .end((err, res) => {

        });
    });
  });
});