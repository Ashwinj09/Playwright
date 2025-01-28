const{test , expect} = require('@playwright/test')
test('amazon' , async({page})=>{
await page.goto('https://www.amazon.in/');

await page.locator("//input[@type='text']"). fill('iphone15')
await page.press("//input[@type='submit']", "Enter");
await page.waitForTimeout(4000)

await page.screenshot({path:'ScreenShots/abc.png'});
await page.pause();


})