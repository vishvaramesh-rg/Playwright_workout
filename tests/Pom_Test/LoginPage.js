exports.Loginpage=class Loginpage{

    constructor(page){
        this.page=page;
        this.loginLink="#login2";
        this.userField="#loginusername";
        this.passwordField="#loginpassword";
        this.clickLogin="//button[normalize-space()='Log in']";
        this.logout="#logout2"
        
    }

    async gotoapplication () {
        await this.page.goto('https://www.demoblaze.com/index.html')
    }

    async login(username, password){
        await this.page.click(this.loginLink)
        await this.page.fill(this.userField,username)
        await this.page.fill(this.passwordField,password)
        await this.page.click(this.clickLogin)
    }

    async logout_page(){
        await this.page.waitForSelector(this.logout)
        await this.page.click(this.logout)
    }

}