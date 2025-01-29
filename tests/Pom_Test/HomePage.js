const { expect } = require("@playwright/test");

exports.HomePage=class HomePage{

    constructor(page){
        this.page=page;
        this.productsloc="//*[@id='tbodyid']/div/div/div/h4/a";
        this.addTocart="//a[normalize-space()='Add to cart']";
        this.cartButton="#cartur";
    }

    async product_Name(productName){
        await this.page.waitForSelector(this.productsloc)
        const products=await this.page.$$(this.productsloc)
        for(let prod of products)
        {
            const value=await prod.textContent()
            if(value==productName)
            {
                await prod.click()
                break;
            }
        }

        this.page.on('dialog',async dialog=>
        {
            await expect.soft(dialog.type()).toContain('alert')
            await dialog.accept()
        })
        await this.page.waitForSelector(this.addTocart)
        await this.page.click(this.addTocart)
        await this.page.click(this.cartButton)

    }
}