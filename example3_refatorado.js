const puppeteer = require('puppeteer')
let scrape = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/')
  page.click('h3 > a')
  await page.waitForNavigation()
  await page.screenshot({path: 'example3.png'})
  const title = await page.$eval(
    'div.product_main h1', divs => divs.innerText
  )
  const price = await page.$eval(
    'div.product_main .price_color', divs => divs.innerText
  )
  browser.close()
  return {title, price}
};
scrape().then((value) => {
  console.log(value)
})