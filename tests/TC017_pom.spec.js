import{test,expect}from '@playwright/test'
import { Loginpage } from './Pom_Test/LoginPage'
import { HomePage } from './Pom_Test/HomePage'
import { CartPage } from './Pom_Test/CartPage'


test('end to end',async({page})=>
{
    //url hit
    const lp=await new Loginpage(page)
    await lp.gotoapplication()

    //login
    await lp.login('testuser_abc','test123')
    await page.waitForTimeout(1000)

    //add product
    const hp = await new HomePage(page)
    await hp.product_Name('Nokia lumia 1520')
    await page.waitForTimeout(1000)

    //cart product check
    const cp = await new CartPage(page)
    const status=await cp.cartProducts('Nokia lumia 1520')
    await expect.soft(status).toBe(true)
    await page.waitForTimeout(2000)

    //logout
    await lp.logout_page()
}
)