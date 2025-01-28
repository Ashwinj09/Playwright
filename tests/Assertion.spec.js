const{test , expect}=require('@playwright/test');
const { title } = require('process');
test ('AssertionMethod', async({page})=>{
    await page.goto('https://www.instagram.com/')
    
    let insta = await page.title();
    await expect(page).toHaveTitle(insta);
    await page.pause();

    let CurrentUrl= await page.url();
    console.log(CurrentUrl);
    await expect (page).toHaveURL('https://www.instagram.com/');


    // await page.goto('https://www.flipkart.com/')

    // let CurrentUrl= await page.url();
    // console.log(CurrentUrl);
    // await expect(page).toHaveURL('https://www.flipkart.com/')

    // let PageTitle=await page.title();
    // console.log(PageTitle);
    
    // await expect(page).toHaveTitle(PageTitle);
})