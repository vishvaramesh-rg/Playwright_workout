import{test,expect} from '@playwright/test'

test('screenshot',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //normal screenshot
    await page.screenshot({path:'.//tests/screenshots/'+Date.now()+'_normalss.png'})
	
    //full screenshot
    await page.screenshot({path:'.//tests/screenshots/'+Date.now()+'_full.png',fullPage:true})

    //element screenshot
    await page.locator('#textarea').screenshot({path:'.//tests/screenshots/'+Date.now()+'_element.png'})
	await page.waitForTimeout(2000)
}
)