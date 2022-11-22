const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser .newPage();

    await page.goto('https://www.instagram.com/blink182');

    const imgList = await page.evaluate(() => {

        // pegar todas imgs que estao na parte de posts
        const nodeList = document.querySelectorAll('article img')

        // transoformar o nodeList em array
        const imgArray = [...nodeList]

        //transformar os nodes (elementos html) em objeto JS
        const imglist = imgArray.map( ({src}) => ({
            src
        }))

        console.log(imglist);

        //colocar pra fora da fn
        return imglist
    });

    // criar um json com o src
    fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
        if(err) throw new Error('something went wrong')
        console.log('Done')
    })
    
    await browser.close();
})();