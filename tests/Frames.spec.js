const{test , expect}=require('@playwright/test')
test('Frames' , async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');     
    let a = await page.frames();     //frameslength
    console.log(a.length);

    let Frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await Frame1.fill("//input[@name='mytext1']" , 'Ashwin');
    await page.waitForTimeout(2000);

    let Frame2=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'});
    await Frame2.fill("//input[@name='mytext2']" , 'Hazel');
    await page.waitForTimeout(2000);

    let Frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await Frame3.fill("//input[@name='mytext3']" , "Himalayan");
    await page.waitForTimeout(3000);


    let Frame4=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'});
    await Frame4.fill("//input[@name='mytext4']" , 'Pine Green');
    await page.waitForTimeout(2000);

    let Frame5=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'});
    await Frame5.fill("//input[@name='mytext5']" , 'My Bike');
    await page.waitForTimeout(2000);


})