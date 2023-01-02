const express = require("express");
const app = express();

const getRoutes = require("./src/routes");

getRoutes(app);

const portConfig = require("./src/config/port.config");
const consoleMessage = require("./src/utils/consoleMessage");

app.listen(portConfig, consoleMessage(portConfig));
