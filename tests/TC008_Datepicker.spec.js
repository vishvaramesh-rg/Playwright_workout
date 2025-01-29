import{test,expect}from '@playwright/test'

test('date picker',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.click("#datepicker")

    const mon="August"
    const year="2024"
    const date="25"

    while(true){
        const cmon=await page.locator('.ui-datepicker-month').textContent()
        const cyear=await page.locator(".ui-datepicker-year").textContent()

        if(cmon==mon && cyear==year){
            break;
        }

        await page.click("//a[@title='Prev']")
        //await page.click("//a[@title='Next']")
    }

    //date
    /*
    const da=await page.$$("//a[@class='ui-state-default']")
    for(let d of da){
        const value=await d.textContent()
        if(value==date){
            await d.click()
        }
    }*/

    await page.locator(`//a[@class='ui-state-default'][normalize-space()=${date}]`).click()
    await page.waitForTimeout(3000)

}
)