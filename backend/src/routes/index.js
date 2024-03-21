const routes = (app) => {
  app.get("/user", (req, res) => {
    res.send("user page");
  });
};

module.exports = routes;
