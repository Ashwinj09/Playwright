const{test , expect} = require('@playwright/test')
test('CheckBox' ,async({page})=>{
await page.goto('https://practice.expandtesting.com/checkboxes');
await page.locator("//input[@id='checkbox1']").check();
await  page.pause();

})