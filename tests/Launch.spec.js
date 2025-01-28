const{test , expect} = require('@playwright/test')

test('Laumch Facebook' , async({page})=>{
await page.goto('https://www.facebook.com/');

})