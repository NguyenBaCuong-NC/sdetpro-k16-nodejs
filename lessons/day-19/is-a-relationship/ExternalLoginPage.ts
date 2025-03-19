import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage {

    private usernameSelector: string = "#ext-username";
    private passwordSelector: string = "#ext-password";
    private loginButtonSelector: string = "#ext-loginButton";

    public inputUsername(username: string): void {
        console.log(`Input username: ${username} for selector ${this.usernameSelector}`);
    }

    public inputPassword(password: string): void {
        console.log(`Input password: ${password} for selector ${this.passwordSelector}`);
    }

    public clickOnLoginButton(): void {
        console.log(`Click on login button for selector ${this.loginButtonSelector}`);
    }

}