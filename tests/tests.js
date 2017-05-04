mocha.setup("bdd");
//const chai = require("chai");
const { expect } = chai;
import validator from 'validator';

describe("test 1", () =>{
	it("2+2=4", () =>{
		let a=2;
		let b=4;
		expect("abdc").to.have.length(4);
		//chai.assert(2+2 === 4, "some error")
	})
}),
describe("Login tests", () => {
	it("expect user to be correct", () =>{
		expect(validator).to.exist;
	})

})


mocha.run();