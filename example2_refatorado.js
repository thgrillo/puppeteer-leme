const puppeteer = require('puppeteer')
let scrape = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/')
  const result = await page.$$eval('li img', titles =>
    titles.map(titles => titles.getAttribute('alt'))
  )
  browser.close()
  return result
};
scrape().then((value) => {
  console.log(value)
})