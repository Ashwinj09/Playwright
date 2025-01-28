const{test , expect}=require('@playwright/test')
test('Uploads' , async({page})=>{
     await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');     //signal
     await page.locator("//input[@type='file']").setInputFiles('D:/Documents/ash/ashwin.jpg');
    await page.waitForTimeout(3000);

    //multi
    await page.locator("//input[@type='file']").setInputFiles(['D:/Documents/ash/ashwin.jpg' , 'C:/Users/ashwi/Downloads/salary_slip (1).pdf',
     'C:/Users/ashwi/Downloads/Cv . Ashwin.pdf']);
     await page.waitForTimeout(5000);
     await page.screenshot({path:'ScreenShots/'+ Date.now() + 'UploadFiles.png'});
    
        //remove
    await page.locator("//input[@type='file']") .setInputFiles([]);
    await page.waitForTimeout(2000);

})