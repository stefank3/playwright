import { Page, expect } from '@playwright/test';


export default class ProductsPage {
    private page: Page;

    // Constructor to initialize the page object
    constructor(page: Page) {
        this.page = page;
    }


  async validateFirstProduct (expectedText: string): Promise<void> {
    
    const bakcpackImage = await this.page.$('img[alt="Sauce Labs Backpack"]');
    expect(bakcpackImage).not.toBeNull();
    const backpackTitle = await this.page.$("#item_4_title_link > div");
    expect(backpackTitle).not.toBeNull();
    const backpackDescr = await this.page.$("//*[@id='inventory_container']/div/div[1]/div[2]/div[1]/div");
    if (backpackDescr) {
        const actualText = await backpackDescr.textContent();
        console.log('Text extracted from element:', actualText);
        expect(actualText).toEqual(expectedText);
        }else{
        
            console.log('Element not found');
    
        }
    


   } 

   async validateSecondProduct (expectedText: string): Promise<void> {
    
    const bikeLightImage = await this.page.$('img[alt="Sauce Labs Bike Light"]');
    expect(bikeLightImage).not.toBeNull();
    const bikeLightTitle = await this.page.$("#item_0_title_link > div");
    expect(bikeLightTitle).not.toBeNull();
    const bikeLightkDescr = await this.page.$("//*[@id='inventory_container']/div/div[2]/div[2]/div[1]/div");
    if (bikeLightkDescr) {
    const actualText = await bikeLightkDescr.textContent();
    console.log('Text extracted from element:', actualText);
    expect(actualText).toEqual(expectedText);
    }else{
    
        console.log('Element not found');

    }

   }  


   async validateThirdProduct (expectedText: string): Promise<void> {
    
    const tShirtImage = await this.page.$('img[alt="Sauce Labs Bolt T-Shirt"]');
    expect(tShirtImage).not.toBeNull();
    const tShirtTitle = await this.page.$("#item_1_title_link > div");
    expect(tShirtTitle).not.toBeNull();
    const tShirtDescr = await this.page.$("//*[@id='inventory_container']/div/div[3]/div[2]/div[1]/div");
    
    if (tShirtDescr) {
        const actualText = await tShirtDescr.textContent();
        console.log('Text extracted from element:', actualText);
        expect(actualText).toEqual(expectedText);
        }else{
        
            console.log('Element not found');
    
        }
    
       }  

       async addProductToCart(): Promise<void>{
        const addBackPack = await this.page.waitForSelector("button[name=\"add-to-cart-sauce-labs-backpack\"]", { state: 'visible' });
        if(addBackPack){
            addBackPack.click();
        }else{
            console.log('Element not found');
        }

       }

       async navigateToCart(): Promise<void>{
        const navigateToCart = await this.page.waitForSelector("//*[@id=\"shopping_cart_container\"]/a", { state: 'visible' });
        if(navigateToCart){
            navigateToCart.click();
        }else{
            console.log('Element not found');
        }
       }

   } 
