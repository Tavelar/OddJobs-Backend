const app = require("../backend/app.js");
const request = require("supertest");
const dbClient = require("../backend/db/db.js");
const seed = require("../backend/db/seeds/seed.js");
const testData = require("../backend/db/data/test-data");
const mongoose = require("mongoose");
dbClient();

beforeEach(async () => {
  await seed(testData);
});
beforeAll(() => dbClient());
afterAll(() => mongoose.disconnect());

describe("General Errors", () => {

  test("404: Path Not Found", async () => {
    const res = await request(app).get("/api/not_a_path")
      .expect(404);

    expect(res.body.msg).toBe("Path Not Found");
  });
});



describe("GET /api/jobs", () => {

  test("200, return list of current jobs", async () => {
    const res = await request(app).get("/api/jobs").expect(200);
    console.log(res.body);
    res.body.forEach((job) => {
    
      expect(job).toMatchObject({
        _id: expect.any(String),
        title: expect.any(String),
        category: expect.any(String),
        price: expect.any(Number),
        user_id: expect.any(String),
        location: {
          latitude: expect.any(Number),
          longitude: expect.any(Number),
        },
      });
    });
  });
});
