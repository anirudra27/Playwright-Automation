import{test,expect} from "@playwright/test"
import { Loginpage } from "../pages/Login"
import { Homepage } from "../pages/HomePage"
import { Cart } from "../pages/Cart"

test('Paje Object Model Test', async({page})=>{

    //Login
    const login=new Loginpage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123');
    await page.waitForTimeout(3000);

    //Add product
    const Home=new Homepage(page);
    await Home.addproduct('Nokia lumia 1520');
    await page.waitForTimeout(3000)
    await Home.gotoCart();


    //Check Product from Cart
    const CartItem = new Cart(page);
    await page.waitForTimeout(3000)
    /* const item = await CartItem.checkCartItem('Nokia lumia 1520')
    await expect(item).toBe(true);*/ 
    await CartItem.deleteCartItem('Nokia lumia 1520');
    await page.waitForTimeout(3000)
}); 

