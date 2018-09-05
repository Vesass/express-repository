const Express = require('express');
const I18n = require("i18n");
const CookieParser = require("cookie-parser")
const ErrorHandler = require("./helpers/error-handler")
const Router = require('./app.router');
Engine = require("express-hbs")

const app = Express();


/**
 * Configurer i18n module
 */

I18n.configure({
    locales: ["en", "fr"],
    cookie: "movie-app-locales",
    directory: __dirname + "/locales"
})


/**
 * Expose cookies on req.cookies
 */

app.use(CookieParser());

/**
 * Set i18n middleware on app
 */

app.use(I18n.init);


/**
 * Set Router on /
 */
app.use("/", Router);


/**
 * configure render engine
 */


app.engine("hbs", Engine.express4({

}));

app.set("view engine", "hbs");

Engine.registerHelper("t", function () {
    return I18n.__.apply(this, arguments);
});

module.exports = app;