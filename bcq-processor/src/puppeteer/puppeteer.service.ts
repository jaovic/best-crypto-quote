import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class PuppeteerService {
  async bitcoin(crypto: string) {
    console.log(crypto);
    console.log('Bitcoin Selecionado Puppeteer');

    const browser = await puppeteer.launch({
      headless: true,
      executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    });
    // cria uma nova pagina
    const page = await browser.newPage();
    // entra na url
    await page.goto('google.com');
  }
  async ethereum(crypto: string) {
    console.log(crypto);
    console.log('ethereum Selecionado Puppeteer');
  }
  async bnb(crypto: string) {
    console.log(crypto);
    console.log('BNB Selecionado Puppeteer');
  }
}
