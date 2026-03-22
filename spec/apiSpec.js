const request = require("request-promise");

let server;

describe("API Test", () => {
  beforeAll(() => {
    server = require("../app");
  });

  afterAll(() => {
    server.close();
  });

  it("should return hello world", async () => {
    const res = await request("http://localhost:3000/");
    expect(res).toEqual("hello world");
  });
});