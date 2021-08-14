import request from "supertest";
import {app} from '../../../app'
import '../../../test/setup'

it("should not throw 404 while calling signup endpoint", async () => {
  const res = await request(app).post("/api/auth").send({});
  expect(res.status).not.toEqual(404);
});

it("should throw 400 when name is absent", async()=>{
  await request(app)
    .post("/api/auth")
    .send({
      "email": "test@gmail.com",
      "pass": "kathmandu"
    })
    .expect(400)
})

it("should throw 400 when email is absent", async()=>{
  await request(app)
    .post("/api/auth")
    .send({
      "name": "test",
      "pass": "kathmandu"
    })
    .expect(400)
})

it("should throw 400 when pass is absent", async()=>{
  await request(app)
    .post("/api/auth")
    .send({
      "name": "test",
      "email": "test@gmail.com"
    })
    .expect(400)
})

it("should throw 400 when user already exist", async()=>{
  await request(app)
    .post("/api/auth")
    .send({
      "name": "test",
      "email": "test@gmail.com",
      "pass": "kathmandu"
    })
    .expect(201)
  
  await request(app)
    .post("/api/auth")
    .send({
      "name": "test",
      "email": "test@gmail.com",
      "pass": "kathmandu"
    })
    .expect(400)
})

it("should throw 201 when user created successfully", async()=>{
  await request(app)
    .post("/api/auth")
    .send({
      "name": "test",
      "email": "test@gmail.com",
      "pass": "kathmandu"
    })
    .expect(201)
})