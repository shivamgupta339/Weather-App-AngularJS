//importing required dependencies
let express=require('express');
let supertest=require('supertest');
let chai=require('chai');
const should=chai.should();
const expect=require('chai').expect;
let app=require('../app');
let user=require('../routes/users');
let t = supertest(app);
let sinon=require('sinon');
let url = supertest("http://localhost:1337");
let model = require('../model/SchemaDetails');
//stubbing the required mongoDB function
let modelStub=sinon.stub(model,'find');
let postStub=sinon.stub(model,'insertMany');
let putStub=sinon.stub(model,'update');
let delStub=sinon.stub(model,'remove');
//Test for checking data fetching
/*describe('GET', () => {	
	beforeEach(()=>{		
		modelStub.yields(null,[{name: 'Shivam', age: 25, mobile: 9988789098}]);
	})
	it('Fetching data', (done) => {
    url.get('/')        
	  .expect('Content-Type', /json/)
    .end((err, res) => {
    	if (err) {return done(err)}
    	else{
       	expect(res.body.data[0].name).to.be.equal("Shivam");
      	expect(res.body.data[0].age).to.be.equal(25);
      	expect(res.body.data[0].mobile).to.be.equal(9988789098);
       	done();
      }
    });
	});
});*/
//Test for checking data insertion
describe('POST', ()=>{
	let user = {userName: 'Ankur', phoneNumber: 9090907867, emailId: 'ankur@gmail.com', password: 'ankur'};
	beforeEach(()=>{		
			postStub.yields(null,[user]);
	})
	it('inserting data', (done)=>{
		url.post('/users/register')
		.expect('Content-Type', "application/json; charset=utf-8")
		.send(user)
		.end((err, res) =>{
			if (err) {
				
				return done(err);
			}
      else{
      	console.log(res.body);
        expect(res.body[0].userName).to.be.equal("Ankur");
        done();
      }
		});
	});
});
//Test for checking data updation
describe('PUT', ()=>{
	//let update = {age:25};
	beforeEach(()=>{		
		putStub.yields(null,[{ok:1, nModified: 1, n:1 }])
	})
	it('updating data', (done)=>{
		url.put('/updates/09-07-2017/delhi/38/23/35/78')
		.expect('Content-Type', /json/)
		.send()
		.end((err, res)=>{
			if (err) {
				return done(err);
			}
      else{
      	console.log(res.body.data);
        expect(res.body.data.ok).to.be.equal(1);
        expect(res.body.data.nModified).to.be.equal(0);
        expect(res.body.data.n).to.be.equal(0);
        done();
      }
		})
	})
});
//Test for checking data deletion
describe('Delete',()=>{
	//let del = {name: 'Shivam'};
	beforeEach(()=>{		
		delStub.yields(null,[{ok:1, n:0}]);
	})
	it('deleting data', (done)=>{
		url.delete('/deletes/09-07-2017/delhi')
		.expect('Content-Type', "application/json; charset=utf-8")
		.send()
		.end((err, res)=>{
			if (err) {
				return done(err);
			}
      else{
      	console.log(res.body);
       	expect(res.body.ok).to.be.equal(1);
       	expect(res.body.n).to.be.equal(0);
       	done();
      }
		})
	})
});

describe('POST', ()=>{
	let user = {userName: 'Ankur', phoneNumber: 9090907867, emailId: 'ankur@gmail.com', password: 'ankur'};
	beforeEach(()=>{		
			postStub.yields(null,[user]);
	})
	it('inserting data', (done)=>{
		url.post('/users/register')
		.expect('Content-Type', "application/json; charset=utf-8")
		.send(user)
		.end((err, res) =>{
			if (err) {
				
				return done(err);
			}
      else{
      	console.log(res.body);
        expect(res.body[0].phoneNumber).to.be.equal(9090907867);
        done();
      }
		});
	});
});
