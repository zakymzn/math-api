const createServer = require("./createServer");
const FigureCalculator = require("./FigureCalculator");
const MathBasic = require("./MathBasic");

describe("A HTTP Server", () => {
  describe("when GET /add", () => {
    it("should respond with a status code of 200 and the payload value is addition result of a and b correctly", async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, "add");
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toHaveBeenCalledWith(a, b);
    });
  });

  describe("when GET /subtract", () => {
    it("should response with a status code of 200 and the payload value is subtraction result of a and b correctly", async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, "subtract");
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/subtract/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4); // a - b
      expect(spySubtract).toHaveBeenCalledWith(a, b);
    });
  });

  describe("when GET /multiply", () => {
    it("should response with a status code of 200 and the payload value is multiply result of a and b correctly", async () => {
      // Arrange
      const a = 2;
      const b = 3;
      const spyMultiply = jest.spyOn(MathBasic, "multiply");
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/multiply/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(6); // a * b
      expect(spyMultiply).toHaveBeenCalledWith(a, b);
    });
  });

  describe("when GET /divide", () => {
    it("should response with a status code of 200 and the payload value is divide result of a and b correctly", async () => {
      // Arrange
      const a = 20;
      const b = 5;
      const spyDivide = jest.spyOn(MathBasic, "divide");
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/divide/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4); // a / b
      expect(spyDivide).toHaveBeenCalledWith(a, b);
    });
  });

  describe("when GET /rectangle/perimeter", () => {
    it("should response with a staus code of 200 and the payload value is rectangle perimeter result of length and width correctly", async () => {
      // Arrange
      const length = 10;
      const width = 5;
      const spyAdd = jest.spyOn(MathBasic, "add");
      const spyMultiply = jest.spyOn(MathBasic, "multiply");
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/rectangle/perimeter/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 15);
    });
  });
});
