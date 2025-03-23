"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExternalLoginPage_1 = require("./ExternalLoginPage");
var InternalLoginPage_1 = require("./InternalLoginPage");
var LoginTestFlow_1 = require("./LoginTestFlow");
var internalLoginPage = new InternalLoginPage_1.default();
var externalLoginPage = new ExternalLoginPage_1.default();
var internalLoginData = {
    username: "teo",
    password: "123"
};
var externalLoginData = {
    username: "ti",
    password: "321"
};
LoginTestFlow_1.default.login(internalLoginPage, internalLoginData.username, internalLoginData.password);
LoginTestFlow_1.default.login(externalLoginPage, externalLoginData.username, externalLoginData.password);
