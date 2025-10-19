const Hapi = require("@hapi/hapi");
const FigureCalculator = require("./FigureCalculator");

const createServer = ({ mathBasic }) => {
  const server = Hapi.server({
    host: "localhost",
    port: 5000,
  });

  server.route([
    {
      method: "GET",
      path: "/add/{a}/{b}",
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.add(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: "GET",
      path: "/subtract/{a}/{b}",
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.subtract(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: "GET",
      path: "/multiply/{a}/{b}",
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.multiply(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: "GET",
      path: "/divide/{a}/{b}",
      handler: (request) => {
        const { a, b } = request.params;
        const value = mathBasic.divide(Number(a), Number(b));
        return { value };
      },
    },
    {
      method: "GET",
      path: "/rectangle/perimeter/{length}/{width}",
      handler: (request) => {
        const { length, width } = request.params;
        const figureCalculator = new FigureCalculator(mathBasic);
        const value = figureCalculator.calculateRectanglePerimeter(
          Number(length),
          Number(width),
        );
        return { value };
      },
    },
  ]);

  return server;
};

module.exports = createServer;
