import{test,expect} from '@playwright/test'

test('Keyboard action',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //
    await page.fill("#name",'Automation test')
    await page.keyboard.press("Control+A")

    //
    await page.keyboard.press("Control+C")

    //
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //
    await page.keyboard.press("Control+V")
    await expect.soft(await page.locator("#email")).toHaveValue('Automation tester')

    await page.waitForTimeout(3000)

}
)