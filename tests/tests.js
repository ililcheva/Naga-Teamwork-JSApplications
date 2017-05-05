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
			let DB_user_login;
			let DB_login_check;
			let cryptoJSStub;
			const passHash = 'SOME_PASS_HASH';

			beforeEach(() => {
				DB_create_user = sinon.stub(dataBase,"createUser");
				DB_user_login = sinon.stub(dataBase,"loginUser");
				DB_login_check = sinon.stub(dataBase,"checkIfLogged");
				
			});
			afterEach(() => {
				DB_user_login.restore();
				DB_login_check.restore();
				DB_create_user.restore();
				
			});
			it('expext db to exist', () => {
				expect(dataBase.loginUser).to.exist;
			});
			it("register user",() => {
				DB_create_user.returns(Promise.resolve());
			});
			it('expect register to make a POST request', (done) => {
				const user = {
					username: 'de',
					password: '123456'
				};

				const response = {
					result: {
						username: user.username,
						authKey: 'SOME_AUTH_KEY'
					}
				}
						
				DB_user_login.returns(Promise.resolve(response));

				DB_user_login(user)
					.then(() => {
						expect(DB_user_login).to.have.been.calledOnce;
					})
					.then(done, done);
			});
			it("expect to login a user", (done) => {
				const user ={};
				const response = {}; 
						
				DB_login_check.returns(Promise.resolve(response));

				DB_login_check(user)
					.then(() => {
						expect(DB_login_check).to.have.been.calledOnce;
					})
					.then(done, done);
			});
		});
	});
	it("2+2=4", () => {
		let console = sinon.stub(console);
		console("ttt")
		let a = 2;
		let b = 4;
		expect(console("ttt")).returns("ttt");
		sinon.restore(console);
		//console.log("ppp")
		//chai.assert(2+2 === 4, "some error")
	})
}),
	describe("Book model tests", () => {
		it("Expect a default filter", () => {
			expect(booksFilter.defaultFilter).to.exist;
		})

	})


mocha.run();