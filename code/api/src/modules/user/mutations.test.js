import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'

describe("user mutations", () => {
  let server;

  beforeAll(() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

it ("can update a user's style summary from a style survey", async() => {
  const data = {
    query: `mutation {
      userStyleSummaryUpdate(
        id: 2,
        styleSurvey: ["comfy", "comfy", "punk", "punk", "comfy"]
      )
      { styleSummary }
    }`
  }

  const response = await request(server)
    .post('/')
    .send(data)
    .expect(200)

    expect(response.body.data.userStyleSummaryUpdate.styleSummary).toEqual("comfy, but punk")
  })
})
