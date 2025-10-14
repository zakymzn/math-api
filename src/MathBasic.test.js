const MathBasic = require("./MathBasic.js");

describe("A MathBasic", () => {
  it("should contains add, subtract, multiply, and divide function", () => {
    expect(MathBasic).toHaveProperty("add");
    expect(MathBasic).toHaveProperty("subtract");
    expect(MathBasic).toHaveProperty("multiply");
    expect(MathBasic).toHaveProperty("divide");
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe("A add function", () => {
    it("should throw error when not given 2 parameters", () => {
      expect(() => MathBasic.add()).toThrow();
      expect(() => MathBasic.add(1)).toThrow();
      expect(() => MathBasic.add(1, 2, 3)).toThrow();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrow();
    });

    it("should throw error when given non-number parameters", () => {
      expect(() => MathBasic.add("1", "2")).toThrow();
      expect(() => MathBasic.add(true, {})).toThrow();
      expect(() => MathBasic.add(null, false)).toThrow();
    });

    it("should return a + b when given two number parameters", () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(16, 8)).toEqual(24);
      expect(MathBasic.add(3, 7)).toEqual(10);
    });
  });
});
