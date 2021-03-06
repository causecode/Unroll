var chai = require('chai');
var unroll = require('../../index.js');
var expect = chai.expect;

unroll.use(it);

describe('[mocha bdd] maximum of two numbers (without unroll)', function() {
  it('is performed correctly', function(done) {
    expect(Math.max(3, 5)).to.be.equal(5);
    expect(Math.max(7, 0)).to.be.equal(7);
    done();
  });
});

describe('[mocha bdd] maximum of two numbers (unrolled)', function() {
  unroll('maximum of #a and #b is #c',
    function(done, testArgs) {
      expect(
        Math.max(testArgs.a, testArgs.b)
      ).to.be.equal(testArgs.c);
      done();
    },

    [
      ['a', 'b', 'c'],
      [3, 5, 5],
      [7, 0, 7]
      /* change last entry to [7, 0, 0] to see failure */
    ]
  );
});
