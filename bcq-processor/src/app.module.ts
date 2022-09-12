import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';
import { PuppeteerModule } from './puppeteer/puppeteer.module';
import { PuppeteerService } from './puppeteer/puppeteer.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'BCQ_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'bcq',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'bcq-consumer',
          },
        },
      },
    ]),
    PuppeteerModule,
  ],
  controllers: [AppController],
  providers: [AppService, PuppeteerService],
})
export class AppModule {}
