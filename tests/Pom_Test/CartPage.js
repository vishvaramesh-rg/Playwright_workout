exports.CartPage=class CartPage{

    constructor(page){
        this.page=page;
        this.cartProduct="//tbody[@id='tbodyid']//td[2]"
    }

    async cartProducts(productName){
        const product=await this.page.$$(this.cartProduct)
        for(let pro of product)
        {
            const value=await pro.textContent()
            if(value==productName)
            {
                return true;
                break
            }
        }
    }
}