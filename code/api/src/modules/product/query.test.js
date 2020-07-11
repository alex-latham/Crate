import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'

describe("product queries", () => {
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

  it("returns all products", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{products { id name slug type gender description image } }'})
      .expect(200)

    // console.log(response.body.data)
    expect(response.body.data.products[0].id).toEqual(8)
    expect(response.body.data.products[1].type).toEqual(1)
    expect(response.body.data.products[2].description).toEqual("A very nice grey t-shirt for women.")
  })

  it("returns product by slug", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{product (slug: "t-shirt-for-men-grey") { id name slug type gender description image } }'})
      .expect(200)

    // console.log(response.body.data)
    expect(response.body.data.product.id).toEqual(8)
    expect(response.body.data.product.name).toEqual("T-Shirt for Men - Grey")
  })

  it("returns product by id", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{productById (productId: 4) { id name slug type gender description image } }'})
      .expect(200)

    // console.log(response.body.data)
    expect(response.body.data.productById.id).toEqual(4)
    expect(response.body.data.productById.name).toEqual("Watch for Men")
  })

  it("returns related products", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{productsRelated (productId: 3) { id name slug type gender description image } }'})
      .expect(200)

    // console.log(response.body.data)
    expect(response.body.data.productsRelated.length).toEqual(3)
    expect(response.body.data.productsRelated[0].id).not.toEqual(3)
    expect(response.body.data.productsRelated[1].id).not.toEqual(3)
    expect(response.body.data.productsRelated[2].id).not.toEqual(3)
  })

  it("returns product types", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{productTypes  { id } }'})
      .expect(200)

    // console.log(response.body.data)
    expect(response.body.data.productTypes.length).toEqual(2)
    expect(response.body.data.productTypes[0].id).toEqual(1)
  })




})
