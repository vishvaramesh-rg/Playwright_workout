import{test,expect} from '@playwright/test'

test('File upload',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //single file
    await page.locator('#singleFileInput').setInputFiles('.//tests/upload/Body.txt')
    await page.click("//button[normalize-space()='Upload Single File']")
    await expect.soft(await page.locator('#singleFileStatus')).toContainText('Body.txt')

    //multiple file
    await page.locator('#multipleFilesInput').setInputFiles(['.//tests/upload/HostID.txt','.//tests/upload/Body.txt'])
    await page.click("//button[normalize-space()='Upload Multiple Files']")
    expect.soft(await page.locator('#multipleFilesStatus')).toBeVisible()

    //remove filess
    await page.locator('#multipleFilesInput').setInputFiles([])
	
	await page.waitForTimeout(3000)
}
)