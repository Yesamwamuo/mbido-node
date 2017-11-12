const testFiles = require('./app');
var expect = require('chai').expect;

it('should add two numbers',()=>{
    var res = testFiles.add(32, 43);
    expect(res).to.equal(75);

});