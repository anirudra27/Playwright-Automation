import {test, expect} from '@playwright/test'

test('Alert message', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html')
    
    await page.locator('#field1').clear();

    await page.type('#field1', 'Hello Anirudra')

    //Ctrl+A
    await page.keyboard.press('Meta+A');

    //Ctrl+C
    await page.keyboard.press('Meta+C');

    //Tab
    await page.keyboard.down('Tab');

    //Ctrl+V
    await page.keyboard.press('Meta+V');

    await page.waitForTimeout(3000)
});