import { testFunction } from "./index";

describe("index", () => {
  it("does something", () => {
    expect(testFunction()).toMatchInlineSnapshot(`"---start---"`);
  });
});
