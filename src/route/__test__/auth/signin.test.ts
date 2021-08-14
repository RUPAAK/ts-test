import request from "supertest";
import {app} from '../../../app'
import '../../../test/setup'

it("should not throw 404 while calling signin endpoint", async () => {
  const res = await request(app).post("/api/auth").send({});
  expect(res.status).not.toEqual(404);
});
