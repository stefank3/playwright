import { Page, expect } from '@playwright/test';


export default class CheckoutPage {
    private page: Page;

    // Constructor to initialize the page object
    constructor(page: Page) {
        this.page = page;
    }

    
    async navigateToCheckoutScreen(): Promise<void> {
    const checkoutButton = await this.page.$('checkout');
    if(checkoutButton){
        checkoutButton.click();
    }else{
        console.log('Element not found');
        }
    
    }

    async enterCheckoutDetails(firstName:string, lastName:string, zipCode:string): Promise<void>{
        //Fill in FirstName
         await this.page.fill('#first-name', firstName);
       //Fill in LastName
         await this.page.fill('#last-name', lastName);
       //Fill in ZipCode
         await this.page.fill('#postal-code', zipCode);
  
     }

    async navigateToConfirmationScreen(): Promise<void> {
        const continueButton = await this.page.$('continue');
        if(continueButton){
            continueButton.click();
        }else{
            console.log('Element not found');
            }
        
        }

        async finishCheckout(): Promise<void> {
            const finishButton = await this.page.$('finish');
            if(finishButton){
                finishButton.click();
            }else{
                console.log('Element not found');
                }
            
            }

            async checkoutComplete(expectedText:string): Promise<void>{
                const checkoutMessage = await this.page.$("//*[@id='checkout_complete_container']/div");
    
                if (checkoutMessage) {
                    const actualText = await checkoutMessage.textContent();
                    console.log('Text extracted from element:', actualText);
                    expect(actualText).toEqual(expectedText);
                    }else{
                    
                        console.log('Element not found');
                
                    }
            }

}
