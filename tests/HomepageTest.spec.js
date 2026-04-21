const {test, expect} = require('@playwright/test')

test('Homepage', async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    var pageTitle = page.title;
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await page.close();
})