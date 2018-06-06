import * as puppeteer from 'puppeteer';

describe('visit:root', async ()=>{
  it('should visit the home page or default home page',async ()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('localhost:4040');
    
    await browser.close();
  });
});