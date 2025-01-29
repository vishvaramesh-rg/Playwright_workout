import{test,expect} from '@playwright/test'

test('mouse action',async({page})=>
{
    await page.goto("https://vinothqaacademy.com/mouse-event/")

    //drag and drop
    const sou=await page.locator('#draggableElement')
    const des=await page.locator('#droppableElement')

    await sou.dragTo(des)
    await page.waitForTimeout(1000)

    //on-hover
    await page.locator("#droppableElement").hover()
    await page.waitForTimeout(1000)

    //double click
    await page.locator("#dblclick").dblclick()
    await page.waitForTimeout(1000)
    
    //right click
    await page.locator("#rightclick").click({button:'right'})

    await page.waitForTimeout(2000)
}
)