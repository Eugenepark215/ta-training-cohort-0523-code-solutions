/* global Transaction, expect */

describe('Transaction', function () {
  beforeEach(function () {
    expect(Transaction).to.be.a('function');
  });

  describe('new Transaction(type, amount)', function () {
    it('returns a Transaction object', function () {
      const withdrawal = new Transaction('withdrawal', 53);
      expect(withdrawal).to.be.an('object').and.be.an.instanceof(Transaction);
    });

    it('has a type property that matches the type argument', function () {
      const deposit = new Transaction('deposit', 10);
      expect(deposit).to.have.property('type').that.equals('deposit');

      const withdrawal = new Transaction('withdrawal', 10);
      expect(withdrawal).to.have.property('type').that.equals('withdrawal');
    });

    it('has an amount property that matches the amount argument', function () {
      const withdrawal23 = new Transaction('withdrawal', 23);
      expect(withdrawal23).to.have.property('amount').that.equals(23);

      const withdrawal67 = new Transaction('withdrawal', 67);
      expect(withdrawal67).to.have.property('amount').that.equals(67);
    });
  });
});
