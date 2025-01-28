 const{test , exoect, expect}=require('@playwright/test')
// test('Simple alert' , async({page})=>{
//  await page.goto('https://testautomationpractice.blogspot.com/');
//  await page.waitForTimeout(5000);

//  //Simple Alert
// //enable
//     page.on('dialog' , async Popup=>{
//         let pop=await Popup.type()
//         expect(pop).toContain('alert');
//         await page.waitForTimeout(3000)
//         await Popup.accept();
//  })


// //trigger
//      await page. click("//button[text()='Simple Alert']");
//     await page.pause();
//     console.log('Pass');
// })

//Confirm Alert
 test('Simple alert' , async({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com/');
     await page.waitForTimeout(5000);


     //Enable
    page.on('dialog' , async box=>{
       let a = await box.type();
       expect(a).toContain('confirm');

        let msg = await box.message();
        expect(msg).toContain('Press a button');
        await page.waitForTimeout(2000);
        await box.accept();
    })

    //trigger
    await page.click("//button[@id='confirmBtn']")
    await page.waitForTimeout(2000);
    console.log('pass');
    
})
