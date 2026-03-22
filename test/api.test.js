import fetch from "node-fetch";
import * as chai from "chai";

const { expect } = chai;

describe("API Test", () => {
  let data;

  before(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
  });

  it("should return array", () => {
    expect(data).to.be.an("array");
  });

  it("should have length > 0", () => {
    expect(data.length).to.be.greaterThan(0);
  });

  it("should return objects", () => {
    expect(data[0]).to.be.an("object");
  });
});