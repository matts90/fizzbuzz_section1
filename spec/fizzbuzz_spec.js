var fb = require('../fizzbuzz');

describe("A fizzbuzz program", function(){

	it("can count from 1 to 5",  function(){
		expect(fb.count(1,5)).toBe("1 2 3 4 5");
	});
});