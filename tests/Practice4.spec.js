const{test , expect}=require('@playwright/test')
test('Xpath' , async({page})=>{
await page.goto('https://selectorshub.com/xpath-practice-page/');
await page.locator("//input[@name='email']") .fill('ashwinjo2002@gmail.com');
await page.locator("//input[@title='Password']") .fill('012346');
await page.locator("//input[@name='company'][1]") .fill('ABC');
await page.locator("//input[@name='mobile number'][1]") .fill('987563789');
await page.press("//button[@value='Submit']");
await page.locator("//input[@placeholder='First Crush']") .fill('10r')
await page.waitForTimeout(3000);

await page.locator("//input[@value='16']") .check

await page.waitForTimeout(3000);
await page.close();
})