const{test , expect}=require('@playwright/test')
test('InbuiltMethod' , async({page})=>{
    await page.goto('https://www.meesho.com/');
    await page.getByRole('searchbox');
    

})