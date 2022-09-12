import { IsNotEmpty } from 'class-validator';
import { MessagesHelper } from 'src/helpers/message.helper';

export class selectCryptoDto {
  @IsNotEmpty({ message: MessagesHelper.CRYPTO_REQUIRED })
  crypto: string;
}
