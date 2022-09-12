import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'BCQ_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'bcq-front-end',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'bcq-front-end',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
