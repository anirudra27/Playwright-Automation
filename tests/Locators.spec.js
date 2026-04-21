const{test,expect}=require('@playwright/test')

test('Locators', async ({page})=>{
    await page.goto('https://www.demoblaze.com/');

    await page.click('id=login2');

    await page.fill('#loginusername','AMS');

    await page.fill('#loginpassword', 'test@123');

    await page.click("//button[normalize-space()='Log in']");

    const btnLogout = await page.locator('id=logout2');
    await expect(btnLogout).toBeVisible();

    await page.close();

})