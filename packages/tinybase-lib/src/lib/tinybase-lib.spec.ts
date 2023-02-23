import TinybaseLib from "./tinybase-lib";

describe("TinybaseLib", () => {
  it("exposes useRowWrapper as a function", () => {
    expect(typeof TinybaseLib.useRowWrapper).toBe("function");
  });
});
