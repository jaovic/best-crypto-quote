import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { selectCryptoDto } from './dto/crypto.select.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('crypto')
  selectCrypto(crypto: selectCryptoDto) {
    return this.appService.selectCrypto(crypto);
  }
}
