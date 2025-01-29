import{test,expect}from '@playwright/test'

test('Alert',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.on('dialog',async dialog=>{
        await expect(dialog.type()).toContain('alert')
        await expect(dialog.message()).toContain('I am an alert box!')

        await dialog.accept()
    })
    await page.click("#alertBtn")

    await page.waitForTimeout(3000)
}
)

test('Confirm',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.on('dialog',async dialog=>
    {
        await expect.soft(await dialog.type()).toContain('confirm')
        await expect.soft(await dialog.message()).toContain("Press a button!")
        await dialog.accept()
        //await dialog.dismiss()
    }
    )

    await page.click("#confirmBtn")
    await expect.soft(await page.locator("//p[@id='demo']")).toHaveText("You pressed OK!")

    await page.waitForTimeout(3000)
}
)

test.only('prompt',async({page})=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/")
        await page.on('dialog',async dialog=>
        {
            await expect.soft(await dialog.type()).toContain('prompt')
            await expect.soft(await dialog.message()).toContain("Please enter your name:")
            expect.soft(await dialog.defaultValue()).toContain("Harry Potter")
            await dialog.accept("Ramesh")
            //await dialog.dismiss()
        }
        )
    
        await page.click("#promptBtn")
        await expect.soft(await page.locator("//p[@id='demo']")).toHaveText("Hello Ramesh! How are you today?")
    
        await page.waitForTimeout(3000)
    }
    )