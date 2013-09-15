var isFinite = require('..');

describe('isFinite(value)', function() {
  it('should return true for finites', function() {
    isFinite(-101).should.be.true;
    isFinite('10').should.be.true;
  });
  it('should return false for not finites', function() {
    isFinite(true).should.be.false;
    isFinite('').should.be.false;
    isFinite(Infinity).should.be.false;
  });
});