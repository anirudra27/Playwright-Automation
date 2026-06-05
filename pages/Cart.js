exports.Cart=class Cart{

    constructor(page){
        this.page=page
        this.cartItem="//tbody[@id='tbodyid']/tr/td[2]"
        this.deleteBtn="//a[normalize-space()='Delete']"
    }
    
    /* async checkCartItem(productName){
        const products=await this.page.$$(this.cartItem)
        for(const product of products){
            if(productName===await product.textContent()){
                return true;
            }
        }
    } */

    async deleteCartItem(productName){
        const products=await this.page.$$(this.cartItem)
        for(const product of products){
            if(productName===await product.textContent()){
                this.page.locator(this.deleteBtn).click();
            }
        }
    }
}