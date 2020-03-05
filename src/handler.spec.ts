import { hello } from "./handler";

describe("hello", () => {
  it("returns a promise", (): void => {
    const result = hello({});

    expect(typeof result.then).toBe("function");
  });
});
