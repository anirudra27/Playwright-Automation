import {test, expect} from '@playwright/test'

test.skip('Mouse Action', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');

    const homebtn=await page.locator("//div[@class='tabs-outer']//li[1]")
    const Udemy=await page.locator("//a[normalize-space()='Udemy Courses']")

    //Hover 
    await homebtn.hover();
    await Udemy.hover();

    //Right-Click
    await homebtn.click({button:right})

});
//Double Click
test.skip('Mouse Double click Action', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');

    const btn= page.locator("//button[normalize-space()='Copy Text']")

    await btn.dblclick();
    await expect(page.locator("//input[@id='field2']")).toHaveValue('Hello World!')

    
});


//Drag and Drop 
test('Mouse Drag-Drop Action', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');

    const DragItem = page.locator('#draggable');
    const DropBox = page.locator('#droppable');

    await DragItem.dragTo(DropBox)

    await page.waitForTimeout(3000);
});