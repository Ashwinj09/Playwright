const{test , expect}=require('@playwright/test')
test('Screen shot' , async({page})=>{
    await page.goto('https://www.meesho.com/');
    await page.waitForTimeout(10000);
    await page.screenshot({path:'C:/Users/ashwi/Vs code/Playwright/ScreenShots/' +Date.now()+ 'mesho.jpg' , fullPage:true});
   
    await page.waitForTimeout(5000);

    await page.locator("//img[@alt='Meesho Logo']") .screenshot({path:'C:/Users/ashwi/Vs code/Playwright/ScreenShots/' +Date.now()+ 'meshologo.jpg'})

})