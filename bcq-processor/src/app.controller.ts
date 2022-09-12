import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { selectCryptoDto } from './dto/crypto.select.dto';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('selectCrypto')
  selectCrypto(@Payload() message: selectCryptoDto) {
    return this.appService.selectCrypto(message.toString());
  }
}
