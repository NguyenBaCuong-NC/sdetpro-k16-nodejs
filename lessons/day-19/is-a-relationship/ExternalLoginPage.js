"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LoginPage_1 = require("./LoginPage");
var ExternalLoginPage = /** @class */ (function (_super) {
    __extends(ExternalLoginPage, _super);
    function ExternalLoginPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.usernameSelector = "#ext-username";
        _this.passwordSelector = "#ext-password";
        _this.loginButtonSelector = "#ext-loginButton";
        return _this;
    }
    ExternalLoginPage.prototype.inputUsername = function (username) {
        console.log("Input username: ".concat(username, " for selector ").concat(this.usernameSelector));
    };
    ExternalLoginPage.prototype.inputPassword = function (password) {
        console.log("Input password: ".concat(password, " for selector ").concat(this.passwordSelector));
    };
    ExternalLoginPage.prototype.clickOnLoginButton = function () {
        console.log("Click on login button for selector ".concat(this.loginButtonSelector));
    };
    return ExternalLoginPage;
}(LoginPage_1.default));
exports.default = ExternalLoginPage;
