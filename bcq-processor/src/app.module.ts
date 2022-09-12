import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'BCQ_processor_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'bcq-processor',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'bcq-processor-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
