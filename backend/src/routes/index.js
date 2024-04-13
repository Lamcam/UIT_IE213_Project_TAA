// import middlewares
// const middlewares = require("../middlewares");

// import router
// const site = require("./site.router");
// const product = require("./products.router");
// const auth = require("./auth.router");
// const account = require("./account.router");
// const news = require("./news.router");
// const { hello } = require("../controllers/demo.controller");
const {
    getProducts,
    getProductById,
} = require("../controllers/products.controller");

const route = (app) => {
    // app.use(middlewares.authenticate);

    // app.use("/", site)

    // app.use("/auth", auth)

    // app.use("/products", product)

    // app.use('/account', middlewares.authenticate, account)

    // app.use('/news', news)

    app.get("/products", getProducts);
    app.get("/products/:id", getProductById);
};

// app.get("/products", controllers.product.queryProduct);
// app.post("/login", controllers.auth.loginPost);

module.exports = route;
