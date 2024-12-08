const Block = require("./block");
describe("Block", () => {
  const timestamp = Date.now();
  const lastHash = "test-hash";
  const hash = "bar-hash";
  const data = ["blockchain", "data"];
  const block = new Block({ timestamp, lastHash, hash, data });

  it("has a timestamp, lastHash, hash and data", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
