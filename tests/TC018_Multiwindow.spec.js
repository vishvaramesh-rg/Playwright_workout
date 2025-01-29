import{test,expect,chromium} from '@playwright/test'

test('multi-tab',async()=>
{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const pagePromise=context.waitForEvent('page')
    await page.click("//a[normalize-space()='OrangeHRM, Inc']")

    const newPage=await pagePromise;
    await newPage.waitForSelector("//div[@class='d-flex web-menu-btn']//li[1]//a[1]")
    await newPage.click("//div[@class='d-flex web-menu-btn']//li[1]//a[1]")
    await newPage.fill("//input[@id='Form_getForm_FullName']",'Ramesh')

    await page.waitForTimeout(3000)
}
)