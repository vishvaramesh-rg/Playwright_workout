import{test,expect} from '@playwright/test'

test('Check Box',async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    //AP-1 frame object
    const frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2.html"})
    await frame1.fill("//input[@name='mytext2']","Ramesh")
    //assertion
    await expect.soft(await frame1.locator("//input[@name='mytext2']")).toHaveValue("Ramesh")

    //AP-2 frame locator
    const frame2=await page.frameLocator("frame[src='frame_3.html']")
    await frame2.locator("//input[@name='mytext3']").fill("Ramesh")
    //Assertion
    await expect.soft(await frame2.locator("//input[@name='mytext3']")).toHaveValue("Ramesh")

    //no of Frame
    const totalFrmae=await page.frames()
    console.log("Total frame : "+totalFrmae)

    //nested Frame
    const frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    const childf=await frame3.childFrames()
    await childf[0].locator("//*[@id='i21']/div[2]").check()
    await expect.soft(await childf[0].locator("//*[@id='i21']/div[2]")).toBeChecked()
    await page.waitForTimeout(3000)
}
)