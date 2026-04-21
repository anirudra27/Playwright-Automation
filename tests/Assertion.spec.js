import {test,expect} from '@playwright/test'

test('Assertion', async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const checkBox =await page.locator("//input[@id='gender-male']");
    await checkBox.click();
    await expect(checkBox).toBeChecked();

    const newsLetter = await page.locator("//input[@id='NewsLetterSubscriptions_0__IsActive']")
    await expect(newsLetter).toBeChecked();
    await newsLetter.uncheck()
    await expect(newsLetter).not.toBeChecked();

    const searchBtn = await page.getByRole('button', { name: 'Search' })
    await expect(searchBtn).toHaveAttribute('type','submit'); 
});