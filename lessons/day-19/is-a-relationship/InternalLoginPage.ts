import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage {

    private usernameSelector: string = "#username";
    private passwordSelector: string = "#password";
    private loginButtonSelector: string = "#loginButton";

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