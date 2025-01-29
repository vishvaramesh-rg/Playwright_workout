const {test,expect}= require('@playwright/test')
//import{test,expect} from '@playwright/test'

test('Dropdown with select',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //select
   
    const dd1 =await page.locator('#country')
     
    await dd1.selectOption({lebal:'India'})
    await dd1.selectOption({value:'germany'})
    await dd1.selectOption({index:5}) 
    await dd1.selectOption('China')

    //assertion 1. count
   // expect.soft(await page.locator('#country option')).toHaveCount(10)
    expect.soft((await page.$$('#country option')).length).toBe(10)

    //2.specific value
    const dropdow=await dd1.textContent()
    await expect.soft(await dropdow.includes('France')).toBeTruthy();

    //multi select dropdown
    const clr= await page.locator('#colors')
    await clr.selectOption(["Red",'Blue','White'])

    const options =await page.$$('#colors option')
    for(let opt of options)
    {
        console.log(await opt.textContent())
    }

    await page.waitForTimeout(2000)
}
)

test.only('Boot Strap',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const pet=await page.$$('#animals option')
    for(let pp of pet)
    {
        const val=await pp.textContent()
        const value=await val.trim()
        if(value.includes('Dog')||value.includes('Cat'))
        {
            await pp.click();
        }
    }

    //assertion
    expect.soft(await pet.length).toBe(10)  //length / count
    const pet1=await page.locator('#animals')
    const value=await pet1.textContent()
    const val=await value.trim()
    expect.soft(await val.includes('Zebra')).toBeTruthy() //specify value

    await page.waitForTimeout(2000)
}
)