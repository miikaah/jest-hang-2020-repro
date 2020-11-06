const { justSomeFunction } = require("./example");

describe("Example test", () => {
  beforeEach(() => {
    global.fetch = jest
      .fn()
      .mockResolvedValue({ json: async () => ({ baz: "baz" }) });
  });

  it("should fetch", async () => {
    await justSomeFunction();
    expect(global.fetch).toHaveBeenCalled();
  });
});
