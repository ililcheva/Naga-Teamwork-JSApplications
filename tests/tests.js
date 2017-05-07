mocha.setup("bdd");
//const chai = require("chai");
const { expect } = chai;
import dataBase from 'database';

describe("Login tests", () => {
	const LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username',
		LOCAL_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';

	const clearLocalStorage = () => {
		localStorage.removeItem(LOCAL_STORAGE_USERNAME_KEY);
		localStorage.removeItem(LOCAL_STORAGE_AUTHKEY_KEY);
	};
	beforeEach(clearLocalStorage);
	afterEach(clearLocalStorage);

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
					email: "m",
					password: "222"
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

	});
});



mocha.run();