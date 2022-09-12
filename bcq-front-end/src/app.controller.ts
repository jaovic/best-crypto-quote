import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { selectCryptoDto } from './dto/crypto.select.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('crypto')
  selectCrypto(@Body() data: selectCryptoDto) {
    console.log(data.crypto);
    return this.appService.selectCrypto(data);
  }
}
