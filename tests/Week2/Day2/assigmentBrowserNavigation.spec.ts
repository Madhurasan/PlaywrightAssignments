import {chromium, firefox, test} from "@playwright/test";

test("To Open Red Bus in an Edge browser instance and verify the page title and URL.", async()=>{
    const browser = await chromium.launch({channel:'msedge'});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://www.redbus.in/");
    const title = await page.title();
    const loadedURL = await page.url();
    console.log(`The Page loaded is RedBus in Edge Browser with url: ${loadedURL} and the Title of the page is: ${title}`);
    await browser.close();
});

test("Load Flipkart in a Firefox browser instance and verify the page title and URL", async ()=>{
    const browser = await firefox.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://www.flipkart.com/");
    const title = await page.title();
    const loadedURL = await page.url();
    console.log(`The Page loaded is RedBus in Firefox Browser with url: ${loadedURL} and the Title of the page is: ${title}`);
    await browser.close();
});