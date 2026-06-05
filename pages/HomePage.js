const { expect } = require('@playwright/test');

exports.Homepage=class HomePage{

    constructor(page){
        this.page=page;
        this.productItems='//*[@id="tbodyid"]/div/div/div/h4/a'
        this.cartBtn="//a[normalize-space()='Add to cart']"
        this.cartPageLink="#cartur"
    }

    /* async addproduct(productname) {
        const products=await this.page.$$(this.productItems)
        for(const product of products){
            const item= await product.textContent();
            if( productname===item){
                await product.click();
                break;
            }
        }
        await this.page.on('dialog', async  dialog=>{
            await expect(dialog.message()).toContain('Product added.');
            await dialog.accept();
        })

        await this.page.locator(this.cartBtn).click();

        }
    async gotoCart(){
        await this.page.locator(this.cartPageLink).click();
    }
    } */
    
    //different approach
    async addproduct(productname) {
    await this.page.locator(this.productItems, { hasText: productname }).click();

    const dialogPromise = this.page.waitForEvent('dialog');

    await this.page.getByRole('link', { name: 'Add to cart' }).click();


    const dialog = await dialogPromise;
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
    }

    async gotoCart(){
        await this.page.getByRole('link',{name: 'Cart', exact:true}).click(); //exact:true used because there are multiple link with name 'Cart'
    }

};
    


