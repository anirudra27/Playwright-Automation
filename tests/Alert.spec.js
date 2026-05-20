import {test, expect} from '@playwright/test'

test.skip('Alert message', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html')
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.click('//*[@id="alertBtn"]');
})

test.skip('Confirmation message', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html')
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
    })

    await page.click('//*[@id="confirmBtn"]');
    await expect(page.locator('//*[@id="demo"]')).toContainText('You pressed OK!');
    
})

test('Prompt message', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html')

    page.on('dialog',async (dialog)=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Anirudra');

    })

    await page.locator('//*[@id="promptBtn"]').click();
    await expect(page.locator('#demo')).toContainText('Hello Anirudra! How are you today?');

    await page.waitForTimeout(3000);

});

