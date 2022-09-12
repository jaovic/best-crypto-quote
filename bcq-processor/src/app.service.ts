import { PuppeteerService } from './puppeteer/puppeteer.service';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('BCQ_SERVICE') private readonly kafkaService: ClientKafka,
    private readonly puppeteerService: PuppeteerService,
  ) {}
  async selectCrypto(crypto: string) {
    switch (crypto) {
      case 'Bitcoin':
        console.log('Bitcoin selecionado');
        await this.puppeteerService.bitcoin(crypto);
        break;
      case 'Ethereum':
        console.log('Ethereum selecionado');
        await this.puppeteerService.ethereum(crypto);
        break;
      case 'BNB':
        console.log('BNB selecionado');
        await this.puppeteerService.bnb(crypto);
        break;
      default:
        console.log(`Sorry, we are out of ${crypto}.`);
    }
  }
}
