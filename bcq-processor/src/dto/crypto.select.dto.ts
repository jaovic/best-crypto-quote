import { IsNotEmpty } from 'class-validator';

export class selectCryptoDto {
  @IsNotEmpty()
  body: { crypto: string };
}
