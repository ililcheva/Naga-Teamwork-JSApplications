mocha.setup("bdd");
//const chai = require("chai");
const { expect } = chai;
import dataBase from 'database';
import events from 'events';

describe("Events tests", () => {

	it("Expect to be a signup form", () => {
		let signForm = events.signUpForm;
		expect(signForm).to.exist;
	});

	/*it("calls the original function", function () {

		console.log(events.signUpForm)

		let spyFunction = sinon.spy();

		spyFunction();
		spyFunction(2, 3, 4);
		spyFunction(7, 6, [1, 'asdf', {}]);


		function sum(...numbers) {
			if (numbers.length === 0) {
				throw 'No numbers';
			}

			return numbers.reduce((a, b) => a + b);
		}

		let s = sum(1, 6, 8, 9, 13);
		console.log(s);

		let sumSpied = sinon.spy(sum);

		let obj = {};

		sumSpied(4, 3, 2, 1);
		try {
			sumSpied();
		}
		catch (e) { }

		sumSpied(1);

		console.log(sumSpied.calledWithExactly(4, 3, 2, 7, 1));


	});*/
});


describe("Login tests", () => {

	describe("User tests", () => {
		describe("Register user", () => {
			let createUser;
			beforeEach(() => {
				createUser = sinon.stub(dataBase, "createUser");
			});
			afterEach(() => {
				createUser.restore();

			});
			it('Expext create user to make a request', (done) => {
				let user = {
					email: "testovUser",
					password: "Parola-123"
				};
				let response = {
					result: {
						username: user.username,
						authKey: 'SOME_AUTH_KEY'
					}
				}

				createUser.returns(Promise.resolve(response));

				createUser(user)
					.then(() => {
						expect(createUser).to.have.been.calledOnce;
					})
					.then(done, done);

			});
			it('Expect createUser function to return a Promise', () => {
				const user = {
					username: 'testuser',
					password: '123456'
				};

				const response = {
					result: {
						username: user.username,
						authKey: 'SOME_AUTH_KEY'
					}
				};

				createUser.returns(Promise.resolve(response));

				const promise = createUser(user);
				expect(promise).to.be.an.instanceof(Promise);
			});

		});
		describe("Login tests", () => {
			it("Test if current user is set in localstorge", (done) => {
				let loginUser = sinon.stub(dataBase, "loginUser");
				const user = {
					username: 'testuser',
					password: '123456'
				};

				const response = {
					result: {
						username: user.username,
						authKey: 'SOME_AUTH_KEY'
					}
				};
				loginUser.returns(Promise.resolve(response));

				loginUser(user)
					.then(() => {
						expect(localStorage.getItem('currentUser')).to.equal(user.username);
					})
					.then(done, done);
			});
		});

	});
});



mocha.run();