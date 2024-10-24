import nguoiDung from "./nguoiDung.routes.js";

const route = "/api/v1";

function routes(app) {
  app.use(`${route}/user`, nguoiDung);

  app.get(route, (req, res, next) => {
    res.json("Hello word!");
  });
}

export default routes;
