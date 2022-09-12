import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { selectCryptoDto } from './dto/crypto.select.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('BCQ_SERVICE') private readonly kafkaService: ClientKafka,
  ) {}
  async selectCrypto(data: selectCryptoDto) {
    this.kafkaService.emit('selectCrypto', data.crypto);
  }
}
