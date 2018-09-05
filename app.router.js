const Express = require("express"),
    Router = Express.Router();
const PageController = require(`${process.cwd()}/controllers/page`);

/**
 * router config
 */
Router.route("/").get(PageController.index);

module.exports = Router;
