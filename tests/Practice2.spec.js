const{test , expect}=require('@playwright/test')
test('Myntra' , async({page})=>{
    await page.goto('https://www.myntra.com/');
    await page.locator("//input[@class='desktop-searchBar']"). fill('Black Shirt');
    await page.press("//span[contains(@class, ' desktop-iconSearch ')]" , "Enter"); 

    await page.waitForTimeout(5000);

    await page.screenshot({path:'ScreenShots/Myntra.png'});
    await page.close();
})