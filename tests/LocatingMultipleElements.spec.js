const {test,expect} = require('@playwright/test')

test('MultipleLocators', async ({page})=>{
    await page.goto('https://www.demoblaze.com/')

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")

    const elements = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(const element of elements){
        const productName = await  element.textContent();
        console.log(productName);
    }
})