import{test,expect} from '@playwright/test'

test('HomePage',async({page})=>
{
    await page.goto("https://www.demoblaze.com/index.html")

    //login
    await page.click('#login2')
    await page.fill("#loginusername",'testuser_abc')
    await page.fill("#loginpassword",'test123')
    await page.click("//button[normalize-space()='Log in']")

    //home page
    await page.waitForSelector("//div[@id='tbodyid']//h4//a")
    const productloc=await page.$$("//div[@id='tbodyid']//h4//a")
    for(let pp of productloc)
    {
        const value =await pp.textContent()
        console.log(await value)
    }

    //logout
    await page.click("#logout2")
	
	await page.waitForTimeout(3000)
}
)

test.only('Cartpage',async({page})=>
    {
        await page.goto("https://www.demoblaze.com/index.html")
    
        //login
        await page.click('#login2')
        await page.fill("#loginusername",'testuser_abc')
        await page.fill("#loginpassword",'test123')
        await page.click("//button[normalize-space()='Log in']")
    
        //home page
        await page.waitForSelector('#cartur')
        await page.click('#cartur')
        await page.waitForSelector("//tbody//tr//td[2]")
        const cartproduct=await page.$$("//tbody//tr//td[2]")
        for(let cp of cartproduct)
        {
            const value=await cp.textContent()
            console.log(value)
        }
        //logout
        await page.click("#logout2")
        
        await page.waitForTimeout(3000)
    }
    )