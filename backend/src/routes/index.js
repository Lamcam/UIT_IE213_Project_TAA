// import middlewares
// const middlewares = require("../middlewares");
// import router
// const site = require("./site.router");
const product = require("./products.router");
const account = require("./account.router")
// const auth = require("./auth.router");
const auth = require("./auth.router");
const news = require("./news.router");
const cart = require("./cart.router");
const order = require("./order.router");
const route = (app) => {
    app.use('/news', news)
    app.use("/products", product);
    app.use("/", auth);
    app.use("/api/account", account)
    app.use("/cart", cart),
    app.use("/order", order)
    
};



module.exports = route;
