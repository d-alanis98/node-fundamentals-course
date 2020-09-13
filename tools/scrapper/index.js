const pupeteer = require('puppeteer');

(async () => {
    //We launch a browser
    const browser = await puppeteer.launch({ headless: false });
    //We open a page
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    const title = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1.innerHTML;
    });

    console.log(title);
    //We close the browser
    browser.close();
})();