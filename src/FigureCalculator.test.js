const FigureCalculator = require("./FigureCalculator");
const MathBasic = require("./MathBasic");

describe("A FigureCalculator", () => {
  it("should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, CalculateTriangleArea functions", () => {
    const figureCalculator = new FigureCalculator({});

    expect(figureCalculator).toHaveProperty("calculateRectanglePerimeter");
    expect(figureCalculator).toHaveProperty("calculateRectangleArea");
    expect(figureCalculator).toHaveProperty("calculateTrianglePerimeter");
    expect(figureCalculator).toHaveProperty("calculateTriangleArea");
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(
      Function,
    );
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(
      Function,
    );
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe("A calculateRectanglePerimeter", () => {
    it("should throw error when not given 2 parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrow();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrow();
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(1, 2, 3),
      ).toThrow();
    });

    it("should throw error when given with non-number parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() =>
        figureCalculator.calculateRectanglePerimeter(true, {}),
      ).toThrow();
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(null, "2"),
      ).toThrow();
      expect(() =>
        figureCalculator.calculateRectanglePerimeter([], {}),
      ).toThrow();
    });

    it("should return correct value based on rectangle perimeter formula", () => {
      // Arrange
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, "add");
      const spyMultiply = jest.spyOn(MathBasic, "multiply");
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateRectanglePerimeter(
        length,
        width,
      );

      // Assert
      expect(result).toEqual(60); // 2 x (length + width)
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 30); // 2 * (length + width)
    });
  });

  describe("A calculateRectangleArea", () => {
    it("should throw error when not given two parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea()).toThrow();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrow();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrow();
    });

    it("should throw error when given with non-number parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrow();
      expect(() =>
        figureCalculator.calculateRectangleArea(null, "2"),
      ).toThrow();
      expect(() => figureCalculator.calculateRectangleArea([], {})).toThrow();
    });

    it("should return correct value based on rectangle area formula", () => {
      // Arrange
      const length = 20;
      const width = 10;
      const spyMultiply = jest.spyOn(MathBasic, "multiply");
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateRectangleArea(length, width);

      // Assert
      expect(result).toEqual(200);
      expect(spyMultiply).toHaveBeenCalledWith(20, 10);
    });
  });

  describe("A calculateTrianglePerimeter", () => {
    it("should throw error when not given three parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrow();
      expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrow();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrow();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4),
      ).toThrow();
    });

    it("should throw error when given with non-number parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() =>
        figureCalculator.calculateTrianglePerimeter(true, [], {}),
      ).toThrow();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(null, "2", false),
      ).toThrow();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter("A", {}, null),
      ).toThrow();
    });

    it("should return correct value based on triangle perimeter formula", () => {
      // Arrange
      const sideA = 10;
      const sideB = 20;
      const base = 30;
      const spyAdd = jest.spyOn(MathBasic, "add");
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateTrianglePerimeter(
        sideA,
        sideB,
        base,
      );

      // Assert
      expect(result).toEqual(60);
      expect(spyAdd).toHaveBeenCalledWith(30, 30);
    });
  });

  describe("A calculateTriangleArea", () => {
    it("should throw error when not given two parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea()).toThrow();
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrow();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrow();
    });

    it("should throw error when given with non-number parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrow();
      expect(() => figureCalculator.calculateTriangleArea(null, "2")).toThrow();
      expect(() => figureCalculator.calculateTriangleArea([], {})).toThrow();
    });

    it("should return correct value based on triangle area formula ", () => {
      // Arrange
      const base = 20;
      const height = 10;
      const spyMultiply = jest.spyOn(MathBasic, "multiply");
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateTriangleArea(base, height);

      // Assert
      expect(result).toEqual(100);
      expect(spyMultiply).toHaveBeenCalledWith(0.5, 200);
    });
  });
});
