import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'
import models from '../../setup/models'
import bcrypt from 'bcrypt';
import db from '../../setup/database';

describe("user queries", () => {
  let server = express();

  beforeAll(() => {
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  beforeEach(async() => {
    const user_data = {
      id: 1,
      name: "testUser",
      email: "test@example.com",
      password: bcrypt.hashSync('abc123', 10),
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date(),
      styleSummary: "comfy, but punk"
    };

    await models.User.create(user_data);
  })

  afterEach(async() => {
    await models.User.destroy({ where: {}})
  })

  afterAll(() => {
    db.close()
  })

  it("returns all users", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{users { name email password } }'})
      .expect(200)

    expect(response.body.data.users.length).toEqual(1)
  })

  it ("return a user with a specific id", async() => {
    const response = await request(server)
      .get('/')
      .send({ query: '{user(id: 1) { name email role } }'})
      .expect(200)

    expect(response.body.data.user.name).toEqual("testUser")
  })

  it ("authorizes a valid user", async() => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ userLogin(email: "test@example.com", password: "abc123") { user { id name role email } } }'})
      .expect(200)

      // console.log(response.body.data)
      expect(response.body.data.userLogin.user.name).toEqual("testUser")
  })

  it ("gets user genders", async() => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ userGenders { id name } }'})
      .expect(200)

      // console.log(response.body.data)
      expect(response.body.data.userGenders[0].name).toEqual('Male')
      expect(response.body.data.userGenders[1].name).toEqual('Female')
  })

  it ("gets style summary for a user", async() => {
    const response = await request(server)
      .get('/')
      .send({query: '{ user(id:1) { styleSummary } }'})
      .expect(200)

      expect(response.body.data.user.styleSummary).toEqual("comfy, but punk")
  })
})
