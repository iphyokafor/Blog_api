import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);

const url = "/api/auth";
describe("User authentication process", () => {
    describe("Register a user successfully", async() => {
        it("should return a validation error", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/register`)
                .send({
                    first_name: 'j',
                    last_name: 'j',
                    email: 'jasonjamesyahoo.com',
                    password: '123'
                });
            expect(res).to.have.status(400);
        });

        it("should return Email already exists", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/register`)
                .send({
                    first_name: "jason",
                    last_name: "james",
                    email: "jasonjames@yahoo.com",
                    password: "jjjasonjames"
                });
            expect(res).to.have.status(400);
            // expect(res.body).to.have.property(message);
        });

        it("should register a user successfully", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/register`)
                .send({
                    first_name: "jason",
                    last_name: "james",
                    email: "jasonjames@yahoo.com",
                    password: "jjjasonjames234"
                });
            // expect(res).to.have.status(201);
            // expect(res.body).to.have.property(message);
        });
    });

    describe("Testing the login process", () => {
        it("should return a validation error", async() => {
            const res = await chai.request(app)
                .post(`${url}/login`)
                .send({
                    email: 'jasonjamesyahoo.com',
                    password: '123'
                });
            expect(res).to.have.status(400);
        });

        it("should return Email doesn't exist", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/login`)
                .send({
                    email: 'jasonjonas6574@mail.com',
                    password: '654323'
                });
            expect(res).to.have.status(400);
        });

        it("should login a user successfully", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/login`)
                .send({
                    email: "jasonjames@yahoo.com",
                    password: "jjjasonjames234"
                });
            expect(res).to.have.status(201);
        });

        it("should return Invalid password", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/login`)
                .send({
                    email: "jasonjames@yahoo.com",
                    password: "ggstgsg234"
                });
            expect(res).to.have.status(400);
        });
    });
});