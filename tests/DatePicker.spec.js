import{test,expect} from '@playwright/test'

test('Date Picker', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html')

    //Hardcoded date in input
    //await page.fill('#datepicker', '05/20/2026')

    //Date selected from Date picker calender using loops
    const year="2026";
    const month="June";
    const day="15";

    await page.click('#datepicker');
    //Selecting year and month
    while(true){
        const currentMonth=await page.locator('.ui-datepicker-month').textContent();
        const currentYear=await page.locator('.ui-datepicker-year').textContent();

        if(currentMonth==month && currentYear==year){
            break;
        }

        await page.click('.ui-icon.ui-icon-circle-triangle-e');
    }
    //Selecting date
    const dates=await page.$$('.ui-state-default');
    for(const dt of dates){
        const number=await dt.textContent();
        if(await number===day){
            await dt.click();
        }
    }
    await page.waitForTimeout(3000);
});     