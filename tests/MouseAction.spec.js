const{test , expect} =require('@playwright/test')
test('MouseAction' , async({page})=>{
    await page.goto('https://demo.automationtesting.in/Static.html');
    await page.dragAndDrop("//img[@id='angular']","//div[@id='droparea']");
    await page.waitForTimeout(2000);

    await page.dragAndDrop("//img[@id='mongo']", "//div[@id='droparea']");
    await page.waitForTimeout(2000);

    
    await page.waitForTimeout(5000);
})