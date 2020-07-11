import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from '../../setup/schema'
import models from '../../setup/models'
import db from '../../setup/database';
const params = require('../../config/params');

describe("product queries", () => {
  let server = express();

  beforeAll(async() => {
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
    await models.Product.destroy({ where: {}})
  });

  beforeEach(async() => {
    const prodData1 = {
      id: 1,
      name: 'Belt for Women',
      slug: 'belt-for-women',
      description: 'A very nice belt for women.',
      type: params.product.types.accessory.id,
      gender: params.user.gender.female.id,
      image: '/images/stock/belt-female.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const prodData2 = {
      id: 2,
      name: 'Belt for Men',
      slug: 'belt-for-men',
      description: 'A very nice belt for men.',
      type: params.product.types.accessory.id,
      gender: params.user.gender.male.id,
      image: '/images/stock/belt-male.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const prodData3 = {
      id: 3,
      name: 'Watch for Women',
      slug: 'watch-for-women',
      description: 'A very nice watch for women.',
      type: params.product.types.accessory.id,
      gender: params.user.gender.female.id,
      image: '/images/stock/watch-female.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const prodData4 = {
      id: 4,
      name: 'Watch for Men',
      slug: 'watch-for-men',
      description: 'A very nice watch for men.',
      type: params.product.types.accessory.id,
      gender: params.user.gender.male.id,
      image: '/images/stock/watch-male.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const prodData5 = {
      id: 5,
      name: 'T-Shirt for Women - Black',
      slug: 't-shirt-for-women-black',
      description: 'A very nice black t-shirt for women.',
      type: params.product.types.cloth.id,
      gender: params.user.gender.female.id,
      image: '/images/stock/t-shirt-female-1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const prodData6 = {
      id: 6,
      name: 'T-Shirt for Women - Grey',
      slug: 't-shirt-for-women-grey',
      description: 'A very nice grey t-shirt for women.',
      type: params.product.types.cloth.id,
      gender: params.user.gender.female.id,
      image: '/images/stock/t-shirt-female-2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const prodData7 = {
      id: 7,
      name: 'T-Shirt for Men - White',
      slug: 't-shirt-for-men-white',
      description: 'A very nice white t-shirt for men.',
      type: params.product.types.cloth.id,
      gender: params.user.gender.male.id,
      image: '/images/stock/t-shirt-male-1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const prodData8 = {
      id: 8,
      name: 'T-Shirt for Men - Grey',
      slug: 't-shirt-for-men-grey',
      description: 'A very nice grey t-shirt for men.',
      type: params.product.types.cloth.id,
      gender: params.user.gender.male.id,
      image: '/images/stock/t-shirt-male-2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    await models.Product.create(prodData1);
    await models.Product.create(prodData2);
    await models.Product.create(prodData3);
    await models.Product.create(prodData4);
    await models.Product.create(prodData5);
    await models.Product.create(prodData6);
    await models.Product.create(prodData7);
    await models.Product.create(prodData8);
  })

  afterEach(async() => {
    await models.Product.destroy({ where: {}})
  })

  afterAll(() => {
    db.close()
  })

  it("returns all products", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{products { id name slug type gender description image } }'})
      .expect(200)

    // console.log(response.body.data)
    expect(response.body.data.products[0].name).toEqual('T-Shirt for Men - Grey')
    expect(response.body.data.products[1].type).toEqual(1)
    expect(response.body.data.products[2].description).toEqual("A very nice grey t-shirt for women.")
    expect(response.body.data.products[3].id).toEqual(5)
  })

  it("returns product by slug", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{product (slug: "t-shirt-for-men-grey") { id name slug type gender description image } }'})
      .expect(200)

    // console.log(response.body.data)
    expect(response.body.data.product.id).toEqual(8)
    expect(response.body.data.product.image).toEqual('/images/stock/t-shirt-male-2.jpg')
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
