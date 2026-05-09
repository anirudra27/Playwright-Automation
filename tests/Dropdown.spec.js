import  {test,expect} from '@playwright/test'

test('Dropdown test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //select options of dropdown from different methods
    //await page.locator('#country').selectOption({label:"United States"})
    //await page.locator('#country').selectOption({value:'uk'});
    // await page.locator('#country').selectOption("Australia");

    //select options from dropdown and check value
    /* const content =  page.locator('#country');
    await content.selectOption({index:3});
    await expect(content).toHaveValue("germany");*/

    //Assertion:Check number of options in dropdown
   /* const country=await page.locator('#country option')
    await expect(country).toHaveCount(10);*/
    
    //Assertion to check the presence of value
    /* const country=await page.locator("#country").textContent();
    await expect(country.includes("Germany")).toBeTruthy();*/

    //await expect(page.locator('#country')).toContainText('Germany');

    //Assertion to check the presence of value using loop

    const options = await page.$$("#country option")
    let status=false;
    for(const option of options){
        let value=await option.textContent();
        if(value.includes("France")){
            status=true;
            break;
        }
    }
    await expect(status).toBeTruthy();

    await page.waitForTimeout(2000);
})