import {test, expect } from '@playwright/test'

test('Auto sugesstion Box', async({page}) => {

    await page.goto("https://www.redbus.in/")
    await page.fill("//input[@id='src']",'Chennai')

    await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")
    const loc=await page.$$("//li[@class='sc-iwsKbI jTMXri']/div/text[1]")
    for(let l of loc)
    {
        const val=await l.textContent()
        const value=await val.trim()
        if(await val.includes('Guindy'))
        {
            await l.click();
        }
    }
    await page.waitForSelector("//text[@class='placeHolderMainText']")
    const fieldval=await page.locator("//text[@class='placeHolderMainText']")
    await expect.soft(await fieldval).toHaveText('Guindy')

    await page.waitForTimeout(2000)
}
)

test.only('Hidden',async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.fill("//input[@placeholder='Username']",'Admin')
    await page.fill("//input[@placeholder='Password']",'admin123')
    await page.click("//button[normalize-space()='Login']")
    await page.waitForSelector(".oxd-main-menu-item.active")
    const menuItem = page.locator(".oxd-main-menu-item.active");
    await menuItem.waitFor({ state: 'visible' });  // Wait until it becomes visible
    await menuItem.click();

    /*
    await page.click("div[class='oxd-select-text oxd-select-text--focus'] div[class='oxd-select-text-input']")
    await page.waitForSelector("//div[@class='oxd-select-option' and @role='option']")
    const dd=await page.$$("//div[@class='oxd-select-option' and @role='option']")
    for(let d of dd)
    {
        constval=await d.textContent()
        if(val.includes("Automaton Tester"))
        {
            await d.click();
        }
    }*/
    
    expect.soft(await page.locator("div[class='oxd-select-text oxd-select-text--focus'] div[class='oxd-select-text-input']")).toHaveText("Automaton Tester")
    await page.waitForTimeout(2000)
}
)