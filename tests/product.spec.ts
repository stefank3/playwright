//ProductsPage
import { test, expect } from '@playwright/test';
import ProductsPage from '../pages/ProductsPage';
import LoginPage from '../pages/LoginPage';

test('Verify Backback Product successfully', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const loginPage = new LoginPage(page);

        // Navigate to the website URL
        await page.goto('https://www.saucedemo.com');
        
        await loginPage.login('standard_user', 'secret_sauce');

        await productsPage.validateFirstProduct("Sauce Labs Backpack with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."); 

        }
    );

    test('Verify Bike Light Product successfully', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const loginPage = new LoginPage(page);
    
            // Navigate to the website URL
            await page.goto('https://www.saucedemo.com');
            
            await loginPage.login('standard_user', 'secret_sauce');
       
            await productsPage.validateSecondProduct("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
        
    
            }
        );

        test('Verify Bolt T-Shirt Product successfully', async ({ page }) => {
            const productsPage = new ProductsPage(page);
            const loginPage = new LoginPage(page);
        
                // Navigate to the website URL
                await page.goto('https://www.saucedemo.com');
                
                await loginPage.login('standard_user', 'secret_sauce');
           
                await productsPage.validateThirdProduct("Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.");
            
        
                }
            );