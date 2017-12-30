var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should have a previous total that starts at zero', function(){
    assert.strictEqual(0, calculator.previousTotal);
  });

  it('should have a running total that starts at zero', function(){
    assert.strictEqual(0, calculator.runningTotal);
  });

  // calculator.add()
  it('should be able to add to the previous total', function(){
    calculator.add(5);

    assert.strictEqual(5, calculator.runningTotal);
  });

  // calculator.subtract()
  it('should be able to subtract from the previous total', function(){
    calculator.subtract(2);

    assert.strictEqual(-2, calculator.runningTotal);
  });

  // calculator.multiply()
  it('should be able to multiply numbers', function(){
    calculator.previousTotal = 10;
    calculator.multiply(2);

    assert.strictEqual(20, calculator.runningTotal);
  });

  // calculator.divide()
  it('should be able to divide numbers', function(){
    calculator.previousTotal = 10;
    calculator.divide(2);

    assert.strictEqual(5, calculator.runningTotal);
  });

  // calculator.numberClick()
  it('should be able to select a number', function(){
    calculator.numberClick(2);
    calculator.numberClick(4);

    assert.strictEqual(24, calculator.runningTotal);
  });

  // calculator.operatorClick()
  it('should be able to add to the running total', function(){
    calculator.operatorClick(calculator.add(3));
    calculator.operatorClick(calculator.subtract(1));
    calculator.operatorClick(calculator.multiply(5));
    calculator.operatorClick(calculator.divide(2));

    assert.strictEqual(5, calculator.runningTotal);
  });

  // calculator.clearClick()
  it('should be able to clear the running total', function(){
    calculator.operatorClick(calculator.add(3));
    calculator.operatorClick(calculator.subtract(1));
    calculator.operatorClick(calculator.multiply(5));
    calculator.operatorClick(calculator.divide(2));
    calculator.clearClick();

    assert.strictEqual(0, calculator.runningTotal);
  });


});
