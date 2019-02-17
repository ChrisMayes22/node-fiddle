const app = require('./index');
const expect = require('chai').expect

describe('When add function is called', function(){
    it('executes as expected', function(){
        const sum = app.add(3, 4);

        expect(sum).to.equal(7);
    })
})
describe('When square function is called', function(){
    it('executes as expected', function(){
        const product = app.square(3);

        expect(product).to.equal(9);
    })
})
describe('When setName function is called', function(){
    it('executes as expected', function(){
        const user = {
            location: 'here',
            address: '0000 here apt 0'
        }

        app.setName(user, "Chris Mayes");
        expect(user.firstName === "Chris").to.be.true;
        expect(user.lastName === "Mayes").to.be.true;
    })
})
describe('When asyncAdd function is called', function(){
    it('executes as expected', function(done){
        app.asyncAdd(3, 4, (sum)=>{
            expect(sum).to.equal(7);
            done();
        });
        
    })
})
describe('When asyncAdd function is called', function(){
    it('executes as expected', function(done){
        app.asyncSquare(5, (square)=>{
            expect(square).to.equal(25);
            done();
        });
        
    })
})