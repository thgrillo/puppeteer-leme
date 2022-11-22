const dotenv = require('dotenv');
dotenv.config({ path: "feedz/.env" });
console.log(`${process.env.EMAIL}`)
const puppeteer = require('puppeteer')
let scrape = async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.goto('https://app.feedz.com.br/inicio')

  await page.type('#login_email', process.env.FEEDZ_EMAIL, {delay: 100})
  await page.type('#passInput', process.env.FEEDZ_PASS, {delay: 100})

  await page.keyboard.press('Tab')

  await page.click('#enter-login')

  await page.waitForNavigation()

  // await page.$$eval()

  await page.click('[title="Feliz"]')
  await page.waitForSelector('.fdz-panel-mood-btn-submit')
  await page.click('.fdz-panel-mood-btn-submit')
  // await page.waitForSelector('.confirm')
  await page.click('.confirm')

}
scrape().then((value) => {
  console.log(value)
})