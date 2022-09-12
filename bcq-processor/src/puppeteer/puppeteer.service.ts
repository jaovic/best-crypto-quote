import { Injectable } from '@nestjs/common';

@Injectable()
export class PuppeteerService {
  async bitcoin(crypto: string) {
    console.log(crypto);
    console.log('Bitcoin Selecionado Puppeteer');
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
