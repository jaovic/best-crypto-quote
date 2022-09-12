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
            clientId: 'bcq',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'bcq-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
