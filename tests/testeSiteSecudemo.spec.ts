import { test, expect } from '@playwright/test';
import { setBaseUrl } from '../Utils/setBaseUrl';

test.describe('CN001 - Realizando compras', () => {

    const adicionaProduto = "Sauce Labs Bolt T-Shirt";
    const usuario = "visual_user";
    const senha = "secret_sauce";
    const baseUrl = setBaseUrl();

    test('CN001 - CT001 -Realizando uma compra', async ({ page }) => {

      try{

        await page.goto(`https://${baseUrl}`);
        await page.locator(`//input[@placeholder="Username"]`).fill(`${usuario}`);
        await page.locator(`//input[@placeholder="Password"]`).fill(`${senha}`);
        await page.locator(`//input[@name="login-button"]`).click();
        await page.locator(`//*[text()="${adicionaProduto}"]//..//..//..//..//*[text()="Add to cart"]`).click();
        await page.locator(`//*[@class="shopping_cart_link"]`).click();
        await page.isVisible(`//*[text()="${adicionaProduto}"]`);
        await page.locator(`//button[@name="checkout"]`).click();
        await page.locator(`//input[@placeholder="First Name"]`).fill(`Teste`);
        await page.locator(`//input[@placeholder="Last Name"]`).fill('Teste');
        await page.locator(`//input[@placeholder="Zip/Postal Code"]`).fill(`8000100`);
        await page.locator(`//input[@name="continue"]`).click();
        await page.isVisible(`//*[text()="${adicionaProduto}"]`);
        await page.locator(`//button[@name="finish"]`).click();
        await page.locator(`//*[text()="Thank you for your order!"]`);

      }catch(error){

        console.error('Ocorreu um erro durante a execução do teste:', error);

            // Marca o teste como falho explicitamente
        throw error; // Isso garante que o teste falhe no relatório

      } 
    
    
    });

    test('CN001 - CT002 -Removendo uma compra do carrinho', async ({ page }) => {

        try{
  
          await page.goto(`https://${baseUrl}`);
          await page.locator(`//input[@placeholder="Username"]`).fill(`${usuario}`);
          await page.locator(`//input[@placeholder="Password"]`).fill(`${senha}`);
          await page.locator(`//input[@name="login-button"]`).click();
          await page.locator(`//*[text()="${adicionaProduto}"]//..//..//..//..//*[text()="Add to cart"]`).click();
          await page.locator(`//*[@class="shopping_cart_link"]`).click();
          await page.isVisible(`//*[text()="${adicionaProduto}"]`);
          await page.locator(`//button[@class="btn btn_secondary btn_small cart_button"]`).click();
          await page.locator(`//button[@name="continue-shopping"]`).click();
          await page.isVisible(`//*[text()="${adicionaProduto}"]//..//..//..//..//*[text()="Add to cart"]`);

        }catch(error){

             
         console.error('Ocorreu um erro durante a execução do teste:', error);

         // Marca o teste como falho explicitamente
          throw error; // Isso garante que o teste falhe no relatório
        }  

    });

    test('CN001 - CT003 -Acessando Menu realzindo logout', async ({ page }) => {

        try{
  
          await page.goto(`https://${baseUrl}`);
          await page.locator(`//input[@placeholder="Username"]`).fill(`${usuario}`);
          await page.locator(`//input[@placeholder="Password"]`).fill(`${senha}`);
          await page.locator(`//input[@name="login-button"]`).click();
          await page.locator(`//button[text()="Open Menu"]`).click();
          await page.locator(`//*[text()="Logout"]`).click();
          await page.isVisible(`//*[text()="Swag Labs"]`);

        }catch(error){

             
         console.error('Ocorreu um erro durante a execução do teste:', error);

         // Marca o teste como falho explicitamente
          throw error; // Isso garante que o teste falhe no relatório
        }  

    });

})

