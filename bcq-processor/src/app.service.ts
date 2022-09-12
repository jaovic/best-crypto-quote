import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { selectCryptoDto } from './dto/crypto.select.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly kafkaService: ClientKafka,
  ) {}
  async selectCrypto(crypto: selectCryptoDto) {
    console.log(crypto);
  }
}
