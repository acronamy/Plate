import { assert } from 'chai';
import { launch } from 'puppeteer';

const url = 'http://localhost:3030';

describe('Navigate to front page', () => {
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

const url404 = 'http://localhost:3030/system/__404__';

describe('Navigate to system error page 404', () => {
    it('should resolve', async () => {
        const browser = await launch();
        const page = await browser.newPage();

        try{
            await page.goto(url404);
        }
        catch(err){
            //close browser then fail and report;
            await browser.close();
            assert.ifError(err);
        }        
    });
});

const url403 = 'http://localhost:3030/system/__403__';

describe('Navigate to system error page 403', () => {
    it('should resolve', async () => {
        const browser = await launch();
        const page = await browser.newPage();

        try{
            await page.goto(url403);
        }
        catch(err){
            //close browser then fail and report;
            await browser.close();
            assert.ifError(err);
        }        
    });
});

const url500 = 'http://localhost:3030/system/__500__';

describe('Navigate to system error page 500', () => {
    it('should resolve', async () => {
        const browser = await launch();
        const page = await browser.newPage();

        try{
            await page.goto(url500);
        }
        catch(err){
            //close browser then fail and report;
            await browser.close();
            assert.ifError(err);
        }        
    });
});

const url502 = 'http://localhost:3030/system/__502__';

describe('Navigate to system error page 502', () => {
    it('should resolve', async () => {
        const browser = await launch();
        const page = await browser.newPage();

        try{
            await page.goto(url502);
        }
        catch(err){
            //close browser then fail and report;
            await browser.close();
            assert.ifError(err);
        }        
    });
});
