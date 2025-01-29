import{test,expect}from '@playwright/test'

test('Field test',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect.soft(page).toHaveTitle("Automation Testing Practice")

    const nameField=await page.locator('#name')
    await expect.soft(nameField).toBeVisible()
    await expect.soft(nameField).toBeEmpty()
    await expect.soft(nameField).toBeEditable()
    await expect.soft(nameField).toBeEnabled()

    //fill the field - 3 approach
    await nameField.fill('Vishva')
    await page.locator('#email').fill('abc@gm.com')
    await page.fill('#phone','2837291932')

    await page.waitForTimeout(2000)
}
)

test.only('Radio button',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#male').check()
    await expect.soft(page.locator('#male')).toBeChecked() 

    await expect.soft(await page.locator('#female').isChecked()).toBeFalsy() //#female
    await page.waitForTimeout(2000)
}
)