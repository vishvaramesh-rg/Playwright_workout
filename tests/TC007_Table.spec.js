import{test,expect}from '@playwright/test'

test('table',async({page})=>{

    //row and col 
    await page.goto('https://testautomationpractice.blogspot.com/')
    const row=await page.locator("//table[@name='BookTable']//tr")
    const col=await page.locator("//table[@name='BookTable']//th")

    console.log('Row : '+await row.count())
    console.log('col : '+await col.count())

    //specific value
    const rowval=2
    const val=await row.nth(rowval)
    const tds= await val.locator('td')

    for(let j=0; j<await tds.count(); j++){
        const spevalue=await tds.nth(j).textContent()
        console.log("spe value "+ spevalue)
    }


    //table data
    for(let i=1; i<=await row.count(); i++){
       const val=await row.nth(i)
       const td=await val.locator('td')
       for(let j=0; j<await td.count(); j++){
        const value=await td.nth(j).textContent()
        console.log(value)
       }
    }
    await page.waitForTimeout(2000)
})

test('table 2',async({page})=>{

    //row and col
    await page.goto('https://testautomationpractice.blogspot.com/')
    const row=await page.locator("//table[@id='productTable']//tbody//tr")
    const col=await page.locator("//table[@id='productTable']//th")

    console.log('Row : '+await row.count()+"   "+'col : '+await col.count())

    //specific table data
    const tab=await row.filter(
        {
            has: page.locator('td'),
            hasText:'Laptop'
        }
    )
    await tab.locator('input').check();
    await table(page,row,'Smartwatch')
    await table(page,row,'Tablet')
    await page.waitForTimeout(1000)
    await tab.locator('input').uncheck();

    //pagination data 
    const pages=await page.locator("//ul[@id='pagination']//li")
    for(let p=0; p<await pages.count(); p++){
        if(p>0){
            await pages.nth(p).click()
        }

        for(let i=0; i<await row.count();i++){
            const rows=await row.nth(i)
            const tds=await rows.locator('td')
            for(let j=0; j<await tds.count()-1; j++){
                const value=await tds.nth(j).textContent()
                console.log(value)
            }
        }
    }


    await page.waitForTimeout(2000)

})

async function table(page,row,name){
    const tabs = await row.filter({
        has: await page.locator('td'),
        hasText:name
    })
    await tabs.locator('input').check()
}

test.only('tables',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const row=await page.locator("//table[@name='BookTable']//tr")
    const col=await page.locator("//table[@name='BookTable']//th")

    //specific value
    const idex=3
    const mac=await row.nth(idex)
    const team=await mac.locator('td')

    for(let i=0; i<await team.count(); i++){
        console.log(await team.nth(i).textContent())
    }

    //total value
    for(let i=1; i<=await row.count();i++)
    {
        const val=await row.nth(i)
        const values=await val.locator('td')
        for(let j=0; j<await values.count(); j++)
        {
            console.log(await values.nth(j).textContent())
        }
    }
    await page.waitForTimeout(3000)
}
)