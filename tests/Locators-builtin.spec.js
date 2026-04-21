const {test,expect}=require('@playwright/test')

test('Built-in Locators',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByAltText('orangehrm-logo');
    
    /*await page.waitForSelector("//input[@placeholder='Username']");

    await page.getByPlaceholder('Username').fill('Admin');
    
    await page.fill("//input[@placeholder='Password']", 'admin123');

    await page.getByRole('button',{type:'submit'}).click();

    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(page.getByText(name)).toBeVisible();
    console.log(name);*/

});