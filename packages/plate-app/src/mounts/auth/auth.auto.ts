import { assert } from 'chai';
import { launch } from 'puppeteer';

const url = 'http://localhost:3030';

describe('Navigate to admin dashboard', () => {
    it('should resolve', async () => {
        const browser = await launch();
        const page = await browser.newPage();

        try{
            await page.goto(url);
        }
        catch(err){
            //close browser then fail and report;
            await browser.close();
            assert.ifError(err);
        }        
    });
});