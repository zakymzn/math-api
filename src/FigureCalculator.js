class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error("fungsi hanya menerima dua parameter");
    }

    const [length, width] = args;

    if (typeof length !== "number" || typeof width !== "number") {
      throw new Error("fungsi hanya menerima parameter number");
    }

    // formula: (2 * (length + width))
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }
  calculateRectangleArea(...args) {
    if (args.length !== 2) {
      throw new Error("fungsi hanya menerima dua parameter");
    }

    const [length, width] = args;

    if (typeof length !== "number" || typeof width !== "number") {
      throw new Error("fungsi hanya menerima parameter number");
    }

    // formula: length * width
    return this._mathBasic.multiply(length, width);
  }
  calculateTrianglePerimeter(...args) {
    if (args.length !== 3) {
      throw new Error("fungsi hanya menerima tiga parameter");
    }

    const [sideA, sideB, base] = args;

    if (
      typeof sideA !== "number" ||
      typeof sideB !== "number" ||
      typeof base !== "number"
    ) {
      throw new Error("fungsi hanya menerima parameter number");
    }

    // formula: side1 + side2 + side3
    return this._mathBasic.add(this._mathBasic.add(sideA, sideB), base);
  }
  calculateTriangleArea(...args) {
    if (args.length !== 2) {
      throw new Error("fungsi hanya menerima dua parameter");
    }

    const [base, height] = args;

    if (typeof base !== "number" || typeof height !== "number") {
      throw new Error("fungsi hanya menerima parameter number");
    }

    // formula: 1/2 * base * height
    return this._mathBasic.multiply(
      0.5,
      this._mathBasic.multiply(base, height),
    );
  }
}

module.exports = FigureCalculator;
