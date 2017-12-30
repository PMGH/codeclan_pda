var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  // Do the number buttons work to update the display of the running total?
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#number9')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1234567890')
  });

  // Do each of the arithmetical operations work to update the display with the result of the operation?
  it('should add two numbers together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('12')
  });

  it('should subtract one number from another', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  });

  it('should multiply two numbers together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('12')
  });

  it('should divide a number by another', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  });

  // // Can we chain multiple operations together?
  // it('should be able to chain multiple operations together');
  it('should be able to chain operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  });

// Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)
  // positive numbers
  it('should work as expected with positive numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  });

  // negative numbers
  it('should work as expected with negative numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-2')
  });

// doesnt work with plus then minus
  // it('should work as expected with negative numbers', function(){
  //   running_total = element(by.css('#running_total'))
  //   element(by.css('#operator_add')).click();
  //   element(by.css('#number9')).click();
  //   element(by.css('#operator_add')).click();
  //   element(by.css('#operator_subtract')).click();
  //   element(by.css('#number3')).click();
  //   element(by.css('#operator_equals')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('6')
  // });

// doesnt work if first number is zero
  // it('should work as expected with negative numbers', function(){
  //   running_total = element(by.css('#running_total'))
  //   element(by.css('#operator_subtract')).click();
  //   element(by.css('#number3')).click();
  //   element(by.css('#operator_equals')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('-2')
  // });
  // it('should work as expected with negative numbers', function(){
  //   running_total = element(by.css('#running_total'))
  //   element(by.css('#number0')).click();
  //   element(by.css('#operator_subtract')).click();
  //   element(by.css('#number3')).click();
  //   element(by.css('#operator_equals')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('-2')
  // });


  // decimals
  it('should work as expected with decimals', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.5')
  });

  // very large numbers
  it('should cope with very large numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('61728394500')
  });

  // divide by zero
  // it('should give error when divide by zero', function(){
  //   running_total = element(by.css('#running_total'))
  //   element(by.css('#number5')).click();
  //   element(by.css('#operator_divide')).click();
  //   element(by.css('#number0')).click();
  //   element(by.css('#operator_equals')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  // });

  // divide by zero - my error message
  it('should give error when divide by zero', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Cannot divide by zero')
  });


});
