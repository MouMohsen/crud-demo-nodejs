const chai = require('chai')
const should = chai.should()
const User = require("../models/user.model")
const sleep = require('sleep')
const chaiHttp = require('chai-http')
const server = require('../server')

chai.use(chaiHttp)

let mockUser

describe('Testing Users API', () => {
    User.collection.drop()

    beforeEach((done) => {
        mockUser = new User({
            username: 'test',
            password: 'data',
            email: 'testdata'
        })
        mockUser.save(function (err) {
            done()
        })
        sleep.sleep(5)
    })

    afterEach((done) => {
        User.collection.drop()
        done()
    })


    it('should create user', done => {
        chai.request(server)
            .post('/api/users')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                'username': 'user',
                'password': 'pass',
                'email': 'mail'
            })
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
    })

    it('should get all users', done => {
        chai.request(server)
            .get('/api/users')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send()
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.a('array')
                res.body[0].should.have.property('_id')
                res.body[0].should.have.property('username')
                res.body[0].should.have.property('password')
                res.body[0].should.have.property('email')
                res.body[0].username.should.equal(mockUser.username)
                res.body[0].password.should.equal(mockUser.password)
                res.body[0].email.should.equal(mockUser.email)
                done()
            })
    })

    it('should update an existing user', done => {
        chai.request(server)
            .put(`/api/users/${mockUser.id}`)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(
                {
                    'username': 'user'
                })
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.have.property('_id')
                res.body.should.have.property('username')
                res.body.should.have.property('password')
                res.body.should.have.property('email')
                res.body.username.should.equal('user')
                res.body.password.should.equal(mockUser.password)
                res.body.email.should.equal(mockUser.email)
                done()
            })
    })

    it('should delete user with id', (done) => {
        chai.request(server)
            .delete(`/api/users/${mockUser.id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.have.string(`Deleted User ${mockUser.id}`)
                done();
            });
    });


})