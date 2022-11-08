const puppeteer = require('puppeteer')
let scrape = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/')
  const result = await page.evaluate(_ => 
    Array.from(
      document.querySelectorAll('section > div > ol > li img'))
              .map(books => books.getAttribute('alt'))
  )
  browser.close()
  return result
}
scrape().then((value) => {
  console.log(value)
})