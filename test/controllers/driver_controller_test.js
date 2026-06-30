const assert = require("assert");
const request = require("supertest");
const app = require("../../app");
const mongoose = require("mongoose");
const Driver = mongoose.model("driver");

describe("the express app", () => {
  it("Post to /api/drivers create a new Driver", async () => {
    const count = await Driver.countDocuments();
    const response = await request(app)
      .post("/api/drivers")
      .send({ email: "abc@gmail.com" });

    const newCount = await Driver.countDocuments();

    assert(count + 1 === newCount);

    console.log(response.body);
  });
});
