//CheckoutPage
import { test } from '@playwright/test';
import ProductsPage from '../pages/ProductsPage';
import LoginPage from '../pages/LoginPage';
import CheckoutPage from '../pages/CheckoutPage';


test('Verify Checkout successfully', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const loginPage = new LoginPage(page);
    const checkoutPage = new CheckoutPage(page);


        // Navigate to the website URL
        await page.goto('https://www.saucedemo.com');
        
        await loginPage.login('standard_user', 'secret_sauce');

        await productsPage.addProductToCart();

        await productsPage.navigateToCart();

        await checkoutPage.navigateToCheckoutScreen();
       
        await checkoutPage.enterCheckoutDetails("Stefan","Kajchevski","7000");
 
        await checkoutPage.navigateToConfirmationScreen();

        await checkoutPage.finishCheckout();

        await checkoutPage.checkoutComplete("Your order has been dispatched, and will arrive just as fast as the pony can get there!");

        }
    );