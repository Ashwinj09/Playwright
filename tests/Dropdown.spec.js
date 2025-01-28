const{test , expect}=require('@playwright/test')
test('Dropdown' ,async({page})=>{
await page.goto('https://www.facebook.com/login.php/')
await page.press("//a[@rel='nofollow']" ,"Enter");
await page.pause();

await page.locator("//input[@name='firstname']") .fill('Ashwin');
await page.waitForTimeout(3000);
await page.locator("//input[@name='lastname']") .fill('J');

await page.locator("//select[@name='birthday_day']") .selectOption('22');   //single drop down

await page.locator("//select[@id='month']") .selectOption({index:2});

await page.selectOption("//select[@title='Year']" , '2002');

await page.click("//input[@value='2']" );

await page.getByLabel('Mobile number or email address') .fill('012345678');

await page.locator("//input[@type='password']") .fill('5546777')

await page.press("//button[@name='websubmit']" , "Enter");

await page.waitForTimeout(10000);

await page.close();
})


//multidropdown
test.only('Multidropdown' , async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
   let animal= await page.$$("//select[@id='animals']//child::option")

   // await page.waitForTimeout(3000);

    for(let a of animal){
        let data=await a .textContent();
        console.log(data);}
    
})





