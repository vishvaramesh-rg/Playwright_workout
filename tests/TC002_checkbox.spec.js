const { test, expect } = require('@playwright/test')

test('Check Box', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //single check
    const mon = await page.locator("//input[@id='monday']")
    await mon.check()
    expect.soft(await mon.isChecked()).toBeTruthy()
    await page.waitForTimeout(1000)
    await mon.uncheck()


    //multiple box check
    const checkboxs = ["//input[@id='saturday']",
        "//input[@id='friday']", "//input[@id='thursday']"
    ]

    for (let ch of checkboxs) {
        await page.locator(ch).check()
    }

    await page.waitForTimeout(2000)

    //uncheck
    for (let ch of checkboxs) {

        if (await page.locator(ch).isChecked()) {
            await page.uncheck(ch);
        }
    }

    await page.waitForTimeout(2000)
}
)