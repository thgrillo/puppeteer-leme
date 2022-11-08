const puppeteer = require('puppeteer')
let scrape = async () => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://www.tibia.com/community/?subtopic=characters')
 
    await page.click('.ThreeColumnsFormCell.ThreeColumnsFormInputCell > input')
    await page.keyboard.type('Thgrillo')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await page.waitForNavigation()
    await page.evaluate(() => {
        document.querySelector('#cookiedialogbackground').remove()
    
    })
    await page.screenshot({path: 'tibia.png'});

}
scrape().then((value) => {
  console.log(value)
})