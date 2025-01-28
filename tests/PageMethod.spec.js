const{test , expect} = require('@playwright/test')
test, ('PageMethod' ,async({page})=>{
    await page.goto('https://www.facebook.com/login.php/');

    await page.waitForTimeOut(3000);

    await page.locator('id=username'). fill('ashwin');

    await page.locator('id=password'). fill(5555);
    
    await page.waitForTimeOut(3000);

    await page.locator("//button[@name='login']").click();

    await page.waitForTimeOut(3000);
})