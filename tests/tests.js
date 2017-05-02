mocha.setup("bdd");
//const chai = require("chai");
const { expect } = chai;

describe("test 1", () =>{
	it("2+2=4", () =>{
		let a=2;
		let b=4;
		expect("abdc").to.have.length(4);
		//chai.assert(2+2 === 4, "some error")
	})
})


mocha.run();